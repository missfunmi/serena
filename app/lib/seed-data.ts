const users = [
  {
    email: 'jane.doe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
  }
];

const workouts = [
  {
    userId: users[0].id,
    date: new Date(),
    completed: true,
    source: 'training_peaks',
    sport: 'strength',
    intensityType: 'heart_rate',
    title: 'Tabata Strength Class',
    plannedDuration: 3600,
    plannedTss: 50,
    plannedIf: 0.55,
    plannedCalories: null,
    completedDuration: 3509,
    completedTss: 41,
    completedIf: 0.61,
    completedCalories: 400,
    description: '',
    workoutStructure: null
  },
  {
    userId: users[0].id,
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: false,
    source: 'training_peaks',
    sport: 'cycling',
    intensityType: 'power',
    title: '[Extended] CF6 (Foundation Bike)',
    distanceUnit: 'miles',
    estimatedPace: null,
    plannedDistance: null,
    plannedDuration: 3600,
    plannedTss: 56,
    plannedIf: 0.75,
    plannedCalories: null,
    description: '5 minutes in Z1, 35 minutes Z2, 5 minutes Z1',
    workoutStructure: [
      {type: 'warmup', duration: 300, target: {zone: 1, min: 50, max: 70}},
      {type: 'active', duration: 3300, target: {zone: 2, min: 70, max: 83}},
      {type: 'cooldown', duration: 300, target: {zone: 1, min: 50, max: 70}}
    ]
  },
  {
    userId: users[0].id,
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: false,
    source: 'training_peaks',
    sport: 'swimming',
    intensityType: 'heart_rate',
    title: '[Extended] SMI1 (Mixed Intervals)',
    distanceUnit: 'yards',
    estimatedPace: 150,
    plannedDistance: 2000,
    plannedDuration: 3004,
    plannedTss: 52,
    plannedIf: 0.79,
    plannedCalories: null,
    description: 'Modified: 500 Z1, 5 x (100 Z3/15" rest), 250 Z1, 5 x (50 Z4/20" rest), 500 Z1\n\n---\n\nWas: 500 Z1, 5 x (100 Z3/15" rest) 250 Z1, 5 x (50 Z4/20" rest) 250 Z1',
    workoutStructure: [
      {type: 'warmup', distance: 500, target: {zone: 1}},
      {
        type: 'repeat',
        iterations: 5,
        steps: [
          {type: 'active', distance: 100, target: {zone: 3}},
          {type: 'rest', duration: 15}
        ]
      },
      {type: 'active', distance: 250, target: {zone: 1}},
      {type: 'cooldown', distance: 500, target: {zone: 1}}
    ]
  },
  {
    userId: users[0].id,
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    completed: false,
    source: 'training_peaks',
    sport: 'running',
    intensityType: 'power',
    title: 'RCI1 (Cruise Intervals Run)',
    distanceUnit: 'miles',
    estimatedPace: 576,
    plannedDistance: null,
    plannedDuration: 3600,
    plannedTss: 68,
    plannedIf: 0.83,
    plannedCalories: null,
    description: '5 minutes Z1, 21 minutes Z2, 3 x (5 minutes Z3/3 minutes Z1) 5 minutes Z2, 5 minutes Z1',
    workoutStructure: [
      {type: 'warmup', duration: 300, target: {zone: 1}},
      {type: 'active', duration: 1260, target: {zone: 2}},
      {
        type: 'repeat',
        iterations: 3,
        steps: [
          {type: 'active', duration: 300, target: {zone: 3}},
          {type: 'rest', duration: 180, target: {zone: 1}}
        ]
      },
      {type: 'cooldown', duration: 300, target: {zone: 1}}
    ]
  }
];

export {users, workouts};