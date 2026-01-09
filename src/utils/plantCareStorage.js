// localStorage utilities for Plant Care Calendar

const STORAGE_KEY = 'meri_bagiya_plants';
const NOTIFICATION_PERMISSION_KEY = 'meri_bagiya_notification_permission';

// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get all plants from localStorage
export const getPlants = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading plants from localStorage:', error);
    return [];
  }
};

// Save all plants to localStorage
export const savePlants = (plants) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
    return true;
  } catch (error) {
    console.error('Error saving plants to localStorage:', error);
    return false;
  }
};

// Add a new plant
export const addPlant = (plant) => {
  const plants = getPlants();
  const newPlant = {
    ...plant,
    id: generateId(),
    dateAdded: new Date().toISOString(),
    careHistory: []
  };
  plants.push(newPlant);
  savePlants(plants);
  return newPlant;
};

// Update a plant
export const updatePlant = (plantId, updates) => {
  const plants = getPlants();
  const index = plants.findIndex(p => p.id === plantId);
  if (index !== -1) {
    plants[index] = { ...plants[index], ...updates };
    savePlants(plants);
    return plants[index];
  }
  return null;
};

// Delete a plant
export const deletePlant = (plantId) => {
  const plants = getPlants();
  const filtered = plants.filter(p => p.id !== plantId);
  savePlants(filtered);
  return filtered;
};

// Get a single plant by ID
export const getPlantById = (plantId) => {
  const plants = getPlants();
  return plants.find(p => p.id === plantId) || null;
};

// Mark a care task as complete
export const markCareComplete = (plantId, careType) => {
  const plants = getPlants();
  const index = plants.findIndex(p => p.id === plantId);

  if (index !== -1) {
    const plant = plants[index];
    const now = new Date().toISOString();
    const frequency = plant.careSchedule[careType]?.frequency || 7;

    // Update last done and next due dates
    plant.careSchedule[careType] = {
      ...plant.careSchedule[careType],
      lastDone: now,
      nextDue: addDays(new Date(), frequency).toISOString()
    };

    // Add to care history
    plant.careHistory = plant.careHistory || [];
    plant.careHistory.unshift({
      type: careType,
      date: now,
      completed: true
    });

    // Keep only last 50 history items
    if (plant.careHistory.length > 50) {
      plant.careHistory = plant.careHistory.slice(0, 50);
    }

    plants[index] = plant;
    savePlants(plants);
    return plant;
  }
  return null;
};

// Helper: Add days to a date
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Get tasks due today
export const getTasksDueToday = () => {
  const plants = getPlants();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tasks = [];

  plants.forEach(plant => {
    const careTypes = ['watering', 'fertilizing', 'pruning', 'repotting'];

    careTypes.forEach(type => {
      const schedule = plant.careSchedule[type];
      if (schedule && schedule.nextDue) {
        const dueDate = new Date(schedule.nextDue);
        dueDate.setHours(0, 0, 0, 0);

        if (dueDate <= today) {
          tasks.push({
            plantId: plant.id,
            plantName: plant.nickname || plant.name,
            careType: type,
            dueDate: schedule.nextDue,
            isOverdue: dueDate < today,
            plant
          });
        }
      }
    });
  });

  return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

// Get tasks due this week
export const getTasksThisWeek = () => {
  const plants = getPlants();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = addDays(today, 7);

  const tasks = [];

  plants.forEach(plant => {
    const careTypes = ['watering', 'fertilizing', 'pruning', 'repotting'];

    careTypes.forEach(type => {
      const schedule = plant.careSchedule[type];
      if (schedule && schedule.nextDue) {
        const dueDate = new Date(schedule.nextDue);
        dueDate.setHours(0, 0, 0, 0);

        if (dueDate <= weekEnd) {
          tasks.push({
            plantId: plant.id,
            plantName: plant.nickname || plant.name,
            careType: type,
            dueDate: schedule.nextDue,
            isOverdue: dueDate < today,
            isToday: dueDate.getTime() === today.getTime(),
            plant
          });
        }
      }
    });
  });

  return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

// Initialize plant with next due dates from template
export const initializePlantFromTemplate = (template, nickname, location) => {
  const now = new Date();

  const careSchedule = {
    watering: {
      ...template.careSchedule.watering,
      lastDone: null,
      nextDue: addDays(now, template.careSchedule.watering.frequency).toISOString()
    },
    fertilizing: {
      ...template.careSchedule.fertilizing,
      lastDone: null,
      nextDue: addDays(now, template.careSchedule.fertilizing.frequency).toISOString()
    },
    pruning: {
      ...template.careSchedule.pruning,
      lastDone: null,
      nextDue: addDays(now, template.careSchedule.pruning.frequency).toISOString()
    },
    repotting: {
      ...template.careSchedule.repotting,
      lastDone: null,
      nextDue: addDays(now, template.careSchedule.repotting.frequency).toISOString()
    }
  };

  return {
    name: template.name,
    scientificName: template.scientificName,
    nickname: nickname || template.name,
    location: location || 'My Garden',
    image: template.image,
    tips: template.tips,
    difficulty: template.difficulty,
    careSchedule
  };
};

// Notification permission helpers
export const getNotificationPermission = () => {
  return localStorage.getItem(NOTIFICATION_PERMISSION_KEY);
};

export const setNotificationPermission = (status) => {
  localStorage.setItem(NOTIFICATION_PERMISSION_KEY, status);
};

// Request browser notification permission
export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    return 'unsupported';
  }

  if (Notification.permission === 'granted') {
    setNotificationPermission('granted');
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
    return permission;
  }

  return Notification.permission;
};

// Send a browser notification
export const sendNotification = (title, body, icon = '/assets/images/MERI-BAGIYA-LOGO-UPDATED.png') => {
  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon });
  }
};

// Check for due tasks and send notifications
export const checkAndNotify = () => {
  const tasks = getTasksDueToday();

  if (tasks.length > 0) {
    const overdueCount = tasks.filter(t => t.isOverdue).length;
    const dueCount = tasks.length - overdueCount;

    let body = '';
    if (overdueCount > 0) {
      body += `${overdueCount} overdue task(s). `;
    }
    if (dueCount > 0) {
      body += `${dueCount} task(s) due today.`;
    }

    sendNotification('Plant Care Reminder', body);
  }
};
