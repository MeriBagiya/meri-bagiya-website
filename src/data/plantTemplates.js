// Pre-loaded plant templates with default care schedules
export const plantTemplates = [
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    image: '/assets/images/plants/snake-plant.jpg',
    careSchedule: {
      watering: { frequency: 21, summerFrequency: 14, winterFrequency: 28 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 180 },
      repotting: { frequency: 730 }
    },
    tips: 'Very drought tolerant. Allow soil to dry completely between waterings.',
    difficulty: 'Easy'
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    image: '/assets/images/plants/peace-lily.jpg',
    careSchedule: {
      watering: { frequency: 7, summerFrequency: 5, winterFrequency: 10 },
      fertilizing: { frequency: 14, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 90 },
      repotting: { frequency: 365 }
    },
    tips: 'Droops dramatically when thirsty but recovers quickly after watering.',
    difficulty: 'Easy'
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    image: '/assets/images/plants/spider-plant.jpg',
    careSchedule: {
      watering: { frequency: 7, summerFrequency: 5, winterFrequency: 10 },
      fertilizing: { frequency: 14, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 90 },
      repotting: { frequency: 365 }
    },
    tips: 'Produces baby plants (spiderettes) that can be propagated.',
    difficulty: 'Easy'
  },
  {
    id: 'pothos',
    name: 'Pothos',
    scientificName: 'Epipremnum aureum',
    image: '/assets/images/plants/pothos.jpg',
    careSchedule: {
      watering: { frequency: 10, summerFrequency: 7, winterFrequency: 14 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 60 },
      repotting: { frequency: 730 }
    },
    tips: 'Tolerates low light. Vines can grow very long - trim to maintain shape.',
    difficulty: 'Easy'
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    scientificName: 'Ficus elastica',
    image: '/assets/images/plants/rubber-plant.jpg',
    careSchedule: {
      watering: { frequency: 10, summerFrequency: 7, winterFrequency: 14 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 180 },
      repotting: { frequency: 730 }
    },
    tips: 'Wipe leaves monthly to keep them shiny and dust-free.',
    difficulty: 'Medium'
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    image: '/assets/images/plants/zz-plant.jpg',
    careSchedule: {
      watering: { frequency: 21, summerFrequency: 14, winterFrequency: 28 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 365 },
      repotting: { frequency: 730 }
    },
    tips: 'Extremely low maintenance. Tolerates neglect and low light.',
    difficulty: 'Easy'
  },
  {
    id: 'monstera',
    name: 'Monstera',
    scientificName: 'Monstera deliciosa',
    image: '/assets/images/plants/monstera.jpg',
    careSchedule: {
      watering: { frequency: 10, summerFrequency: 7, winterFrequency: 14 },
      fertilizing: { frequency: 14, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 90 },
      repotting: { frequency: 365 }
    },
    tips: 'Prefers high humidity. Develops iconic split leaves as it matures.',
    difficulty: 'Medium'
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    scientificName: 'Crassula ovata',
    image: '/assets/images/plants/jade-plant.jpg',
    careSchedule: {
      watering: { frequency: 14, summerFrequency: 10, winterFrequency: 21 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 180 },
      repotting: { frequency: 730 }
    },
    tips: 'Succulent that stores water in leaves. Avoid overwatering.',
    difficulty: 'Easy'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    image: '/assets/images/plants/aloe-vera.jpg',
    careSchedule: {
      watering: { frequency: 21, summerFrequency: 14, winterFrequency: 28 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 365 },
      repotting: { frequency: 730 }
    },
    tips: 'Medicinal plant. Gel from leaves can be used for minor burns.',
    difficulty: 'Easy'
  },
  {
    id: 'boston-fern',
    name: 'Boston Fern',
    scientificName: 'Nephrolepis exaltata',
    image: '/assets/images/plants/boston-fern.jpg',
    careSchedule: {
      watering: { frequency: 5, summerFrequency: 3, winterFrequency: 7 },
      fertilizing: { frequency: 7, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 30 },
      repotting: { frequency: 365 }
    },
    tips: 'Needs high humidity. Mist regularly or use a humidity tray.',
    difficulty: 'Hard'
  },
  {
    id: 'philodendron',
    name: 'Philodendron',
    scientificName: 'Philodendron hederaceum',
    image: '/assets/images/plants/philodendron.jpg',
    careSchedule: {
      watering: { frequency: 7, summerFrequency: 5, winterFrequency: 10 },
      fertilizing: { frequency: 14, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 60 },
      repotting: { frequency: 365 }
    },
    tips: 'Heart-shaped leaves. Can climb or trail depending on support.',
    difficulty: 'Easy'
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    image: '/assets/images/plants/fiddle-leaf-fig.jpg',
    careSchedule: {
      watering: { frequency: 10, summerFrequency: 7, winterFrequency: 14 },
      fertilizing: { frequency: 30, activeSeasons: ['spring', 'summer'] },
      pruning: { frequency: 180 },
      repotting: { frequency: 730 }
    },
    tips: 'Prefers bright indirect light. Sensitive to changes in environment.',
    difficulty: 'Hard'
  }
];

// Get current season based on month
export const getCurrentSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
};

// Get watering frequency based on season
export const getSeasonalWateringFrequency = (careSchedule) => {
  const season = getCurrentSeason();
  if (season === 'winter') {
    return careSchedule.watering.winterFrequency || careSchedule.watering.frequency;
  }
  if (season === 'summer') {
    return careSchedule.watering.summerFrequency || careSchedule.watering.frequency;
  }
  return careSchedule.watering.frequency;
};

// Check if fertilizing is active for current season
export const isFertilizingActive = (careSchedule) => {
  const season = getCurrentSeason();
  return careSchedule.fertilizing.activeSeasons.includes(season);
};
