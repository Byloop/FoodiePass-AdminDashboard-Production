import {
  DashboardIcon,
  ChallengeManagementIcon,
  RestaurantManagementIcon,
  HelpManagementIcon,
  AdsManagementIcon,
  PaymentManagementIcon,
  PlanManagementIcon,
  OrderManagementIcon,
  ChatManagementIcon,
  SecurityIcon,
  AnalyticIcon,
  ReviewManagementIcon,
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
    name: 'Challenge Management',
    to: 'challenge-management',
    options: [],
    icon: ChallengeManagementIcon,
  },
  {
    id: 3,
    name: 'Ads Management',
    to: 'ads-management',
    options: [],
    icon: AdsManagementIcon,
  },
  {
    id: 4,
    name: 'Restaurant Management',
    to: 'restaurant-management',
    options: [],
    icon: RestaurantManagementIcon,
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
    name: 'Payment Management',
    to: 'payment-management',
    options: [],
    icon: PaymentManagementIcon,
  },
  {
    id: 7,
    name: 'Chat Management',
    to: 'chat-management',
    options: [],
    icon: ChatManagementIcon,
  },
  {
    id: 8,
    name: 'Plan Management',
    to: 'plan-management',
    options: [],
    icon: PlanManagementIcon,
  },
  {
    id: 9,
    name: 'Reviews Management',
    to: 'reviews-management',
    options: [],
    icon: ReviewManagementIcon,
  },
  {
    id: 10,
    name: 'Help Management',
    to: 'help-management',
    options: [],
    icon: HelpManagementIcon,
  },
  {
    id: 11,
    name: 'Analytics',
    to: 'analytics',
    options: [],
    icon: AnalyticIcon,
  },
  {
    id: 12,
    name: '2FA Security',
    to: '2FA-security',
    options: [],
    icon: SecurityIcon,
  },
];

export function AdminSidebar() {
  {
    return <Sidebar links={links} />;
  }
}
