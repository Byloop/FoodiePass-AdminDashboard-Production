import {
  Signin,
  Signup,
  Profile,
  Main,
  PersonalInformation,
  RestaurantProfile,
  PasswordReset,
  MenuManagement,
  FoodCategoryList,
  FoodCategoryForm,
  DrinkCategoryList,
  DrinkCategoryForm,
  DessertCategoryList,
  DessertCategoryForm,
  SeatingManagement,
  LevelList,
  LevelForm,
  TableList,
  TableForm,
  AvailabilityForm,
  MenuItemForm,
  HolidayForm,
  CouponList,
  ActiveCoupons,
  InactiveCoupons,
  AddCouponForm,
  EditCouponForm,
  TableBookingOrders,
  AllOrders,
  TakeAwayOrders,
  OrderList,
  StaffManagement,
  AttendenceList,
  StaffList,
  StaffForm,
  StaffShifting,
  GlobalShifting,
  AreaWiseShifting,
  EmployeeWiseShifting,
  FoodiePassChats,
  ChatManagement,
  CustomerChats,
  ReviewManagement,
  AllReviews,
  TakeAwayReviews,
  TableBookingReviews,
  Analytics,
} from '../pages/restaurantPages';
import Dashboard from '../component/organisms/Dashboard';
import { Routes, Route } from 'react-router-dom';

function RestaurantRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<Main />} />
        <Route path="profile" element={<Profile />}>
          <Route
            path="personal-information"
            element={<PersonalInformation />}
          />
          <Route path="restaurant-profile" element={<RestaurantProfile />} />
          <Route path="change-password" element={<PasswordReset />} />
        </Route>

        <Route path="menu-management" element={<MenuManagement />}>
          <Route path="food" element={<FoodCategoryList />} />
          <Route path="food/add-category" element={<FoodCategoryForm />} />
          <Route path="food/edit-category" element={<FoodCategoryForm />} />
          <Route
            path="food/:category/add-menu-item"
            element={<MenuItemForm />}
          />
          <Route
            path="food/:category/edit-menu-item"
            element={<MenuItemForm />}
          />

          <Route path="drinks" element={<DrinkCategoryList />} />
          <Route path="drinks/add-category" element={<DrinkCategoryForm />} />
          <Route path="drinks/edit-category" element={<DrinkCategoryForm />} />
          <Route
            path="drinks/:category/add-menu-item"
            element={<MenuItemForm />}
          />
          <Route
            path="drinks/:category/edit-menu-item"
            element={<MenuItemForm />}
          />

          <Route path="desserts" element={<DessertCategoryList />} />
          <Route
            path="desserts/add-category"
            element={<DessertCategoryForm />}
          />
          <Route
            path="desserts/edit-category"
            element={<DessertCategoryForm />}
          />
          <Route
            path="desserts/:category/add-menu-item"
            element={<MenuItemForm />}
          />
          <Route
            path="desserts/:category/edit-menu-item"
            element={<MenuItemForm />}
          />
        </Route>

        <Route path="seating-management" element={<SeatingManagement />}>
          <Route path="level-management" element={<LevelList />} />
          <Route path="level-management/add-level" element={<LevelForm />} />
          <Route path="level-management/edit-level" element={<LevelForm />} />

          <Route path="table-management" element={<TableList />} />
          <Route path="table-management/add-table" element={<TableForm />} />
        </Route>

        <Route path="availability-settings">
          <Route path="availability" element={<AvailabilityForm />} />
          <Route path="holidays" element={<HolidayForm />} />
        </Route>

        <Route path="order-management" element={<OrderList />}>
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="take-away-orders" element={<TakeAwayOrders />} />
          <Route path="table-booking-orders" element={<TableBookingOrders />} />
        </Route>

        <Route path="payment-management" element={<Main />} />
        <Route path="content-management" element={<Main />} />
        <Route path="2FA-security" element={<Main />} />
        <Route path="plan-management" element={<Main />} />

        <Route path="analytics" element={<Analytics />} />

        <Route path="staff-management" element={<StaffManagement />}>
          <Route path="staves" element={<StaffList />} />
          <Route path="attendence" element={<AttendenceList />} />
          <Route path="shiftings" element={<StaffShifting />}>
            <Route path="global-view" element={<GlobalShifting />} />
            <Route path="area-view" element={<AreaWiseShifting />} />
            <Route path="planner-view" element={<EmployeeWiseShifting />} />
          </Route>
        </Route>
        <Route path="staff-management/add-staff" element={<StaffForm />} />
        <Route path="staff-management/edit-staff" element={<StaffForm />} />

        <Route path="reviews-management" element={<ReviewManagement />}>
          <Route path="all-reviews" element={<AllReviews />} />
          <Route path="take-away-reviews" element={<TakeAwayReviews />} />
          <Route
            path="table-booking-reviews"
            element={<TableBookingReviews />}
          />
        </Route>

        <Route path="coupon-management" element={<CouponList />}>
          <Route path="active" element={<ActiveCoupons />} />
          <Route path="inActive" element={<InactiveCoupons />} />
        </Route>
        <Route
          path="coupon-management/add-coupon"
          element={<AddCouponForm />}
        />
        <Route
          path="coupon-management/edit-coupon"
          element={<EditCouponForm />}
        />

        <Route path="chat-management" element={<ChatManagement />}>
          <Route path="foodie-pass-chats" element={<FoodiePassChats />} />
          <Route path="customers-chats" element={<CustomerChats />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RestaurantRouter;
