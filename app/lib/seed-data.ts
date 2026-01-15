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
    date: new Date(),
    completed: false,
    source: 'training_peaks',
    sport: 'cycling',
    intensityType: 'power',
    title: 'CCI19 (Cruise Intervals Bike)',
    distanceUnit: 'miles',
    estimatedPace: null,
    plannedDistance: null,
    plannedDuration: 7200,
    plannedTss: 124,
    plannedIf: 0.79,
    plannedCalories: null,
    description: '20 minutes Z1, 10 minutes Z2, 4 x (6 minutes Z3/3 minutes Z1), 49 minutes Z2, 5 minutes Z1',
    workoutStructure: [
      {type: 'warmup', duration: 1200, target: {zone: 1}},
      {type: 'warmup', duration: 600, target: {zone: 2}},
      {
        type: 'repeat',
        iterations: 4,
        steps: [
          {type: 'active', duration: 360, target: {zone: 3}},
          {type: 'rest', duration: 180, target: {zone: 1}}
        ]
      },
      {type: 'active', duration: 2940, target: {zone: 2}},
      {type: 'cooldown', duration: 300, target: {zone: 1}}
    ]
  },
  {
    userId: users[0].id,
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: false,
    source: 'training_peaks',
    sport: 'swimming',
    intensityType: 'heart_rate',
    title: 'SMI1 (Mixed Intervals)',
    distanceUnit: 'yards',
    estimatedPace: 150,
    plannedDistance: 2000,
    plannedDuration: 3004,
    plannedTss: 52,
    plannedIf: 0.79,
    plannedCalories: null,
    description: '500 Z1, 5 x (100 Z3/15" rest), 250 Z1, 5 x (50 Z4/20" rest), 500 Z1',
    workoutStructure: [
      {type: 'warmup', distance: 500, target: {zone: 1}},
      {type: 'rest', duration: 15},
      {
        type: 'repeat',
        iterations: 5,
        steps: [
          {type: 'active', distance: 100, target: {zone: 3}},
          {type: 'rest', duration: 15}
        ]
      },
      {type: 'active', distance: 250, target: {zone: 1}},
      {
        type: 'repeat',
        iterations: 5,
        steps: [
          {type: 'active', distance: 50, target: {zone: 4}},
          {type: 'rest', duration: 20}
        ]
      },
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
    description: '5 minutes Z1, 21 minutes Z2, 3 x (5 minutes Z3/3 minutes Z1), 5 minutes Z2, 5 minutes Z1',
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
      {type: 'active', duration: 300, target: {zone: 2}},
      {type: 'cooldown', duration: 300, target: {zone: 1}}
    ]
  }
];

const recommendations = [
  {
    userId: users[0].id,
    date: new Date(),
    accepted: false,
    sport: 'cycling',
    intensityType: 'power',
    title: 'CF6 (Foundation Bike)',
    distanceUnit: 'miles',
    estimatedPace: null,
    plannedDistance: null,
    plannedDuration: 2700,
    plannedTss: 41,
    plannedIf: 0.74,
    plannedCalories: null,
    description: '5 minutes in Z1, 35 minutes Z2, 5 minutes Z1',
    workoutStructure: [
      {type: 'warmup', duration: 300, target: {zone: 1}},
      {type: 'active', duration: 2100, target: {zone: 2}},
      {type: 'cooldown', duration: 300, target: {zone: 1}}
    ]
  }
];

export {users, workouts, recommendations};