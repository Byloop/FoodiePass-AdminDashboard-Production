import {
  DashboardIcon,
  MenuManagementIcon,
  PaymentManagementIcon,
  PlanManagementIcon,
  OrderManagementIcon,
  CouponManagementIcon,
  TableManagementIcon,
  ChatManagementIcon,
  SecurityIcon,
  AvailabilityIcon,
  StaffManagementIcon,
  ContentManagementIcon,
  AnalyticIcon,
  ReviewManagementIcon,
  FoodIcon,
  DessertIcon,
  DrinkIcon,
  LevelManagementIcon,
  AvailabilitySettingIcon,
  HolidayManagementIcon,
} from '../../assets/globals/icons/Sidebar';
import { Sidebar } from './Sidebar';

const links = [
  {
    id: 1,
    name: 'Dashboard',
    to: 'dashboard',
    options: [],
    icon: DashboardIcon,
  },
  {
    id: 2,
    name: 'Menu Management',
    to: 'menu-management',
    options: [
      { id: 1, name: 'Food', to: 'menu-management/food', icon: FoodIcon },
      { id: 2, name: 'Drink', to: 'menu-management/drinks', icon: DrinkIcon },
      {
        id: 3,
        name: 'Desserts',
        to: 'menu-management/desserts',
        icon: DessertIcon,
      },
    ],
    icon: MenuManagementIcon,
  },
  {
    id: 3,
    name: 'Seating Management',
    to: 'seating-management',
    options: [
      {
        id: 1,
        name: 'Level Management',
        to: 'seating-management/level-management',
        icon: LevelManagementIcon,
      },
      {
        id: 2,
        name: 'Table Management',
        to: 'seating-management/table-management',
        icon: TableManagementIcon,
      },
    ],
    icon: TableManagementIcon,
  },
  {
    id: 4,
    name: 'Availability',
    to: 'availability-settings',
    options: [
      {
        id: 1,
        name: 'Availability Settings',
        to: 'availability-settings/availability',
        icon: AvailabilitySettingIcon,
      },
      {
        id: 2,
        name: 'Holidays',
        to: 'availability-settings/holidays',
        icon: HolidayManagementIcon,
      },
    ],
    icon: AvailabilityIcon,
  },
  {
    id: 5,
    name: 'Order Management',
    to: 'order-management',
    options: [],
    icon: OrderManagementIcon,
  },
  {
    id: 6,
    name: 'Coupon Management',
    to: 'coupon-management',
    options: [],
    icon: CouponManagementIcon,
  },
  {
    id: 7,
    name: 'Payment Management',
    to: 'payment-management',
    options: [],
    icon: PaymentManagementIcon,
  },
  {
    id: 8,
    name: 'Chat Management',
    to: 'chat-management',
    options: [],
    icon: ChatManagementIcon,
  },
  {
    id: 9,
    name: 'Plan Management',
    to: 'plan-management',
    options: [],
    icon: PlanManagementIcon,
  },
  {
    id: 10,
    name: 'Staff Management',
    to: 'staff-management',
    options: [],
    icon: StaffManagementIcon,
  },
  {
    id: 11,
    name: 'Content Management',
    to: 'content-management',
    options: [],
    icon: ContentManagementIcon,
  },
  {
    id: 12,
    name: 'Reviews Management',
    to: 'reviews-management',
    options: [],
    icon: ReviewManagementIcon,
  },
  {
    id: 13,
    name: 'Analytics',
    to: 'analytics',
    options: [],
    icon: AnalyticIcon,
  },
  {
    id: 14,
    name: '2FA Security',
    to: '2FA-security',
    options: [],
    icon: SecurityIcon,
  },
];

export function RestaurantSidebar() {
  return <Sidebar links={links} />;
}
