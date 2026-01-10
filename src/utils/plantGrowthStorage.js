// localStorage utilities for Plant Growth Tracker

const STORAGE_KEY = 'meri_bagiya_growth_tracker';

// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get all tracked plants from localStorage
export const getTrackedPlants = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading growth data from localStorage:', error);
    return [];
  }
};

// Save all tracked plants to localStorage
export const saveTrackedPlants = (plants) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
    return true;
  } catch (error) {
    console.error('Error saving growth data to localStorage:', error);
    return false;
  }
};

// Add a new plant for tracking
export const addTrackedPlant = (plant) => {
  const plants = getTrackedPlants();
  const newPlant = {
    ...plant,
    id: generateId(),
    dateAdded: new Date().toISOString(),
    growthRecords: [],
    photos: [],
    bloomCycles: []
  };
  plants.push(newPlant);
  saveTrackedPlants(plants);
  return newPlant;
};

// Get a single plant by ID
export const getTrackedPlantById = (plantId) => {
  const plants = getTrackedPlants();
  return plants.find(p => p.id === plantId) || null;
};

// Update a tracked plant
export const updateTrackedPlant = (plantId, updates) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);
  if (index !== -1) {
    plants[index] = { ...plants[index], ...updates };
    saveTrackedPlants(plants);
    return plants[index];
  }
  return null;
};

// Delete a tracked plant
export const deleteTrackedPlant = (plantId) => {
  const plants = getTrackedPlants();
  const filtered = plants.filter(p => p.id !== plantId);
  saveTrackedPlants(filtered);
  return filtered;
};

// Add a growth record
export const addGrowthRecord = (plantId, record) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    const newRecord = {
      id: generateId(),
      date: new Date().toISOString(),
      ...record
    };

    plants[index].growthRecords = plants[index].growthRecords || [];
    plants[index].growthRecords.unshift(newRecord);

    // Update current height if provided
    if (record.height) {
      plants[index].currentHeight = record.height;
    }
    if (record.health) {
      plants[index].currentHealth = record.health;
    }

    saveTrackedPlants(plants);
    return newRecord;
  }
  return null;
};

// Add a photo record
export const addPhotoRecord = (plantId, photo) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    const newPhoto = {
      id: generateId(),
      date: new Date().toISOString(),
      ...photo
    };

    plants[index].photos = plants[index].photos || [];
    plants[index].photos.unshift(newPhoto);

    // Keep only last 20 photos to manage storage
    if (plants[index].photos.length > 20) {
      plants[index].photos = plants[index].photos.slice(0, 20);
    }

    saveTrackedPlants(plants);
    return newPhoto;
  }
  return null;
};

// Delete a photo record
export const deletePhotoRecord = (plantId, photoId) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    plants[index].photos = plants[index].photos.filter(p => p.id !== photoId);
    saveTrackedPlants(plants);
    return true;
  }
  return false;
};

// Add a bloom cycle record
export const addBloomCycle = (plantId, bloomData) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    const newBloom = {
      id: generateId(),
      startDate: new Date().toISOString(),
      ...bloomData
    };

    plants[index].bloomCycles = plants[index].bloomCycles || [];
    plants[index].bloomCycles.unshift(newBloom);
    plants[index].isCurrentlyBlooming = true;

    saveTrackedPlants(plants);
    return newBloom;
  }
  return null;
};

// End a bloom cycle
export const endBloomCycle = (plantId, bloomId) => {
  const plants = getTrackedPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    const bloomIndex = plants[index].bloomCycles.findIndex(b => b.id === bloomId);
    if (bloomIndex !== -1) {
      plants[index].bloomCycles[bloomIndex].endDate = new Date().toISOString();
      plants[index].isCurrentlyBlooming = false;
      saveTrackedPlants(plants);
      return plants[index].bloomCycles[bloomIndex];
    }
  }
  return null;
};

// Calculate growth analytics
export const getGrowthAnalytics = (plantId) => {
  const plant = getTrackedPlantById(plantId);
  if (!plant || !plant.growthRecords || plant.growthRecords.length === 0) {
    return null;
  }

  const records = [...plant.growthRecords].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );

  // Calculate total growth
  const heightRecords = records.filter(r => r.height);
  let totalGrowth = 0;
  let growthRate = 0;

  if (heightRecords.length >= 2) {
    const firstHeight = heightRecords[0].height;
    const lastHeight = heightRecords[heightRecords.length - 1].height;
    totalGrowth = lastHeight - firstHeight;

    // Calculate growth rate (cm per month)
    const firstDate = new Date(heightRecords[0].date);
    const lastDate = new Date(heightRecords[heightRecords.length - 1].date);
    const monthsDiff = (lastDate - firstDate) / (1000 * 60 * 60 * 24 * 30);
    growthRate = monthsDiff > 0 ? (totalGrowth / monthsDiff).toFixed(1) : 0;
  }

  // Average health score
  const healthRecords = records.filter(r => r.health);
  const avgHealth = healthRecords.length > 0
    ? (healthRecords.reduce((sum, r) => sum + r.health, 0) / healthRecords.length).toFixed(1)
    : null;

  // Bloom statistics
  const bloomCycles = plant.bloomCycles || [];
  const totalBlooms = bloomCycles.length;
  const avgBloomDuration = bloomCycles.filter(b => b.endDate).length > 0
    ? Math.round(
        bloomCycles
          .filter(b => b.endDate)
          .reduce((sum, b) => {
            const start = new Date(b.startDate);
            const end = new Date(b.endDate);
            return sum + (end - start) / (1000 * 60 * 60 * 24);
          }, 0) / bloomCycles.filter(b => b.endDate).length
      )
    : null;

  return {
    totalRecords: records.length,
    totalGrowth: totalGrowth.toFixed(1),
    growthRate,
    avgHealth,
    totalBlooms,
    avgBloomDuration,
    firstRecordDate: records[0]?.date,
    lastRecordDate: records[records.length - 1]?.date,
    currentHeight: plant.currentHeight,
    isCurrentlyBlooming: plant.isCurrentlyBlooming
  };
};

// Get all plants with their latest stats
export const getPlantsWithStats = () => {
  const plants = getTrackedPlants();
  return plants.map(plant => ({
    ...plant,
    analytics: getGrowthAnalytics(plant.id)
  }));
};

// Compress image for storage (returns base64)
export const compressImage = (file, maxWidth = 800, quality = 0.7) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedBase64);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Health status labels
export const healthLabels = {
  1: 'Critical',
  2: 'Poor',
  3: 'Fair',
  4: 'Good',
  5: 'Excellent'
};

export const healthColors = {
  1: '#dc3545',
  2: '#fd7e14',
  3: '#ffc107',
  4: '#28a745',
  5: '#198754'
};
