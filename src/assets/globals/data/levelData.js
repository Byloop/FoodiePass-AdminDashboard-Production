import GardenImage from '../../seating-management/level-management/garden.png';

export const Levels = [
  {
    id: 1,
    name: 'Second Floor',
    numberOfTable: 12,
    isActive: false,
    features: [
      { id: 8, name: 'A/C' },
      { id: 7, name: 'Sofa' },
      { id: 4, name: 'Privacy' },
      { id: 3, name: 'No Kids' },
    ],
    image: GardenImage,
  },
  {
    id: 2,
    name: 'Garden',
    numberOfTable: 6,
    isActive: true,
    features: [
      { id: 6, name: 'Beach' },
      { id: 7, name: 'Sofa' },
      { id: 2, name: 'Kids Zone' },
    ],
    image: GardenImage,
  },
  {
    id: 3,
    name: 'Ground Floor',
    numberOfTable: 8,
    isActive: false,
    features: [
      { id: 5, name: 'Pool' },
      { id: 8, name: 'A/C' },
      { id: 6, name: 'Beach' },
      { id: 2, name: 'Kids Zone' },
    ],
    image: GardenImage,
  },
  {
    id: 4,
    name: 'Terrace',
    numberOfTable: 6,
    isActive: true,
    features: [
      { id: 7, name: 'Sofa' },
      { id: 3, name: 'No Kids' },
      { id: 1, name: 'Bar' },
    ],
    image: GardenImage,
  },
  {
    id: 5,
    name: 'Third Floor',
    numberOfTable: 12,
    isActive: true,
    features: [
      { id: 2, name: 'Kids Zone' },
      { id: 1, name: 'Bar' },
    ],
    image: GardenImage,
  },
  {
    id: 6,
    name: 'First Floor',
    numberOfTable: 7,
    isActive: true,
    features: [
      { id: 6, name: 'Beach' },
      { id: 4, name: 'Privacy' },
      { id: 3, name: 'No Kids' },
    ],
    image: GardenImage,
  },
  {
    id: 7,
    name: 'Pool Side',
    numberOfTable: 5,
    isActive: false,
    features: [
      { id: 8, name: 'A/C' },
      { id: 7, name: 'Sofa' },
      { id: 9, name: 'VIP Area' },
    ],
    image: GardenImage,
  },
];

export const LevelFeatures = [
  { id: 1, name: 'Bar' },
  { id: 2, name: 'Kids Zone' },
  { id: 3, name: 'No Kids' },
  { id: 4, name: 'Privacy' },
  { id: 5, name: 'Pool' },
  { id: 6, name: 'Beach' },
  { id: 7, name: 'Sofa' },
  { id: 8, name: 'A/C' },
  { id: 9, name: 'VIP Area' },
];
