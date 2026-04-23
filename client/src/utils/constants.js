// DBus - Constants

export const APP_NAME = 'DBus';
export const APP_TAGLINE = "India's Premium Bus Booking Platform";

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  SEATS: '/seats/:busId',
  BOOKINGS: '/bookings',
  HELP: '/help',
  ACCOUNT: '/account',
};

export const DEPARTURE_TIME_FILTERS = [
  { label: 'Before 6 AM', value: 'early', range: [0, 6] },
  { label: '6 AM - 12 PM', value: 'morning', range: [6, 12] },
  { label: '12 PM - 6 PM', value: 'afternoon', range: [12, 18] },
  { label: 'After 6 PM', value: 'evening', range: [18, 24] },
];

export const BUS_TYPES = [
  { label: 'AC', value: 'AC' },
  { label: 'Non-AC', value: 'Non-AC' },
  { label: 'Sleeper', value: 'Sleeper' },
  { label: 'Seater', value: 'Seater' },
  { label: 'Semi-Sleeper', value: 'Semi-Sleeper' },
];

export const OPERATOR_TYPES = [
  { label: 'Government', value: 'Government' },
  { label: 'Private', value: 'Private' },
];

export const RATING_FILTERS = [
  { label: '4+ Stars', value: 4 },
  { label: '3+ Stars', value: 3 },
  { label: 'All', value: 0 },
];

export const AMENITY_ICONS = {
  'WiFi': '📶',
  'Charging Point': '🔌',
  'Reading Light': '💡',
  'Blanket': '🛏️',
  'Water Bottle': '💧',
  'Snacks': '🍿',
  'AC': '❄️',
  'Sleeper': '🛌',
  'Semi-Sleeper': '💺',
  'Seater': '🪑',
  'GPS Tracking': '📍',
  'Emergency Exit': '🚪',
  'Fire Extinguisher': '🧯',
  'First Aid': '🩹',
  'CCTV': '📹',
  'Washroom': '🚻',
};

export const SEAT_COLORS = {
  available: '#64B5F6',
  booked: '#E57373',
  selected: '#81C784',
  women: '#FFD54F',
  disabled: '#BDBDBD',
};

export const SEAT_TYPES = {
  window: 'Window',
  aisle: 'Aisle',
  middle: 'Middle',
};

export const PRICE_RANGE = {
  min: 200,
  max: 5000,
};
