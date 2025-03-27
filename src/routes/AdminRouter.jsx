import {
  Signin,
  Signup,
  Profile,
  PersonalInformation,
  RestaurantProfile,
  PasswordReset,
} from '../pages/restaurantPages';

import {
  OrderManagement,
  OrderList,
  RestaurantList,
  RestaurantOrderIndex,
  RestaurantOrders,
  ReviewList,
  ReviewManagement,
  RestaurantReviews,
  ChatManagement,
  RestaurantManagement,
  RestaurantDetails,
  Analytics,
  Main,
  PlanManagement,
  PlanDetails,
  PlanManagementRestaurantList,
  AdsManagement,
  HomeAds,
  PromotionAds,
  ChallengeList,
  AddChallenge,
  EditChallenge,
  PaymentManagement,
  PaymentRestauarantList,
  FoodiePassPayment,
  CustomersPayment,
  PaymentRestaurantDetails,
} from '../pages/adminPages';

import Dashboard from '../component/organisms/Dashboard';
import { Routes, Route } from 'react-router-dom';

function AdminRouter() {
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

        <Route
          path="restaurant-management"
          element={<RestaurantManagement />}
        />
        <Route
          path="restaurant-management/:restaurant/details"
          element={<RestaurantDetails />}
        />

        <Route path="plan-management" element={<PlanManagement />}>
          <Route
            path="all-restaurants"
            element={<PlanManagementRestaurantList />}
          />
          <Route
            path="all-restaurants/:restaurant/details"
            element={<RestaurantDetails />}
          />
          <Route path="plan-offer" element={<PlanDetails />} />
        </Route>

        <Route path="order-management" element={<OrderManagement />}>
          <Route path="all-orders" element={<OrderList />} />
          <Route path="all-restaurants" element={<RestaurantList />} />
        </Route>
        <Route
          path="order-management/:restaurantName"
          element={<RestaurantOrderIndex />}
        >
          <Route path=":serviceType" element={<RestaurantOrders />} />
        </Route>

        <Route path="ads-management" element={<AdsManagement />}>
          <Route path="home-view-ads" element={<HomeAds />} />
          <Route path="promotions-view-ads" element={<PromotionAds />} />
        </Route>

        <Route path="challenge-management" element={<ChallengeList />} />
        <Route
          path="challenge-management/add-challenge"
          element={<AddChallenge />}
        />
        <Route
          path="challenge-management/edit-challenge"
          element={<EditChallenge />}
        />

        <Route path="payment-management" element={<PaymentManagement />}>
          <Route path="foodie-pass" element={<FoodiePassPayment />} />
          <Route path="all-restaurants" element={<PaymentRestauarantList />} />
          <Route path="customers" element={<CustomersPayment />} />
          <Route
            path="all-restaurants/:restaurant/details"
            element={<PaymentRestaurantDetails />}
          />
        </Route>

        <Route path="content-management" element={<Main />} />
        <Route path="2FA-security" element={<Main />} />

        <Route path="analytics" element={<Analytics />} />

        <Route path="reviews-management" element={<ReviewManagement />}>
          <Route path="all" element={<ReviewList />} />
          <Route path=":restaurant/reviews" element={<RestaurantReviews />} />
        </Route>

        <Route path="chat-management" element={<ChatManagement />} />
      </Route>
    </Routes>
  );
}

export default AdminRouter;
