import Signin from './authentication/Signin';
import Signup from './authentication/Signup';
import Main from './main/index';

import Profile from './profile';
import { PersonalInformation } from './profile/PersonalInformation';
import { RestaurantProfile } from './profile/RestaurantProfile';
import { PasswordReset } from './profile/settings/PasswordReset';

import MenuManagement from './menu-management';
import { FoodCategoryList } from './menu-management/category-management/food/List';
import { FoodCategoryForm } from './menu-management/category-management/food/Form';
import { DrinkCategoryList } from './menu-management/category-management/drinks/List';
import { DrinkCategoryForm } from './menu-management/category-management/drinks/Form';
import { DessertCategoryList } from './menu-management/category-management/desserts/List';
import { DessertCategoryForm } from './menu-management/category-management/desserts/Form';
import { MenuItemForm } from './menu-management/Form';

import SeatingManagement from './seating-management';
import { LevelList } from './seating-management/level-management/LevelList';
import { LevelForm } from './seating-management/level-management/Form';
import { TableList } from './seating-management/table-management/List';
import { TableForm } from './seating-management/table-management/Form';

import AvailabilityForm from './availability-settings/AvailabilityForm';
import HolidayForm from './availability-settings/HolidayForm';

import CouponList from './coupons/CouponList';
import ActiveCoupons from './coupons/ActiveCoupons';
import InactiveCoupons from './coupons/InactiveCoupons';
import AddCouponForm from './coupons/AddCouponForm';
import EditCouponForm from './coupons/EditCouponForm';

import OrderList from './orders-management/OrderList';
import AllOrders from './orders-management/AllOrders';
import TableBookingOrders from './orders-management/TableBookingOrders';
import TakeAwayOrders from './orders-management/TakeAwayOrders';

import StaffList from './staff-management/StaffList';
import AttendenceList from './staff-management/AttendenceList';
import StaffManagement from './staff-management';
import StaffForm from './staff-management/Form';
import StaffShifting from './staff-management/StaffShifting';
import AreaWiseShifting from './staff-management/AreaWiseShiftings';
import GlobalShifting from './staff-management/GlobalShiftings';
import EmployeeWiseShifting from './staff-management/EmployeeWiseShiftings';

import ChatManagement from './chat-management';
import FoodiePassChats from './chat-management/FoodiePassChats';
import CustomerChats from './chat-management/CustomerChats';

import ReviewManagement from './review-management';
import AllReviews from './review-management/AllReviews';
import TableBookingReviews from './review-management/TableBookingReviews';
import TakeAwayReviews from './review-management/TakeAwayReviews';

import Analytics from './analytics';

export {
  Signin,
  Signup,
  Main,
  Profile,
  PersonalInformation,
  RestaurantProfile,
  PasswordReset,
  MenuManagement,
  FoodCategoryForm,
  FoodCategoryList,
  DrinkCategoryForm,
  DrinkCategoryList,
  DessertCategoryForm,
  DessertCategoryList,
  SeatingManagement,
  LevelList,
  LevelForm,
  TableList,
  TableForm,
  MenuItemForm,
  AvailabilityForm,
  HolidayForm,
  CouponList,
  ActiveCoupons,
  InactiveCoupons,
  AddCouponForm,
  EditCouponForm,
  OrderList,
  TakeAwayOrders,
  TableBookingOrders,
  AllOrders,
  StaffManagement,
  StaffList,
  AttendenceList,
  StaffForm,
  StaffShifting,
  GlobalShifting,
  AreaWiseShifting,
  EmployeeWiseShifting,
  ChatManagement,
  FoodiePassChats,
  CustomerChats,
  ReviewManagement,
  AllReviews,
  TableBookingReviews,
  TakeAwayReviews,
  Analytics,
};
