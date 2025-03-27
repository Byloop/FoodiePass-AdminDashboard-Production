import { useMemo } from 'react';
import { OrderMetrics } from '../../../component/organisms/OrderMetrics';
import { restaurants } from '../../../assets/globals/data/restaurants';
import { useLocation } from 'react-router-dom';
import { SegmentedPieChart } from '../../../component/atoms/SegmentedPieChart';

const orderData = {
  totalRevenue: 50000,
  completedOrders: 2500,
  cancelledOrders: 50,
};

function RestaurantDetails() {
  const location = useLocation();

  const restaurantId = useMemo(() => {
    if (location.state && location.state?.restaurantId) {
      return location.state.restaurantId;
    }
    return null;
  }, [location.state]);

  const restaurant = useMemo(() => {
    if (restaurantId) {
      return restaurants.find((restaurant) => restaurant.id === restaurantId);
    }
    return null;
  }, [restaurantId]);

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <h5 className="font-medium text-blue">Payment Management</h5>
      <div
        className="bg-white mt-6
                  border border-black border-opacity-10 rounded-3xl  
            px-6 py-4 h-full"
      >
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-blue">{restaurant.name}</h5>

          <div className="bg-lightBlue rounded-full px-4 py-1">
            <small className="text-blue">Weekly</small>
          </div>
        </div>
        <OrderMetrics
          orderData={orderData}
          showTotalOrders={true}
          showPendingOrders={true}
        />
      </div>
      <div className="grid grid-cols-3 gap-x-4 mt-6">
        <div className="bg-white border border-black border-opacity-10 rounded-lg py-4 px-4">
          <h5 className="text-green">Total Earnings</h5>
          <h4 className="mt-1">$10k</h4>
          <small className="text-black mt-2 block text-opacity-50">
            as of 07 feb 2025
          </small>
        </div>
        <div className="bg-white border border-black border-opacity-10 rounded-lg py-4 px-4">
          <h5 className="text-[#669CFF]">Pending Payments</h5>
          <h4 className="mt-1">$1400</h4>
          <small className="text-black mt-2 block text-opacity-50">
            Foodie Pass Pay Monthly Payments The Italian Job
          </small>
        </div>
        <div className="bg-white px-4 py-4 border border-black border-opacity-10 rounded-md">
          <h5 className="text-[#FF6402]">Bank Account</h5>
          <h4 className="mt-1">1502********4832</h4>
          <small className="text-black mt-2 block text-opacity-50">
            Foodie Pass payment to this account.
          </small>
        </div>
      </div>
      <div
        className="w-full border border-black border-opacity-10 bg-white 
          rounded-3xl px-4 2xl:px-6 py-4 h-full mt-6"
      >
        <div className="flex items-center justify-between">
          <h5 className="text-blue font-semibold">Account Analysis</h5>

          <div className="bg-lightBlue rounded-full px-4 py-1">
            <small className="text-blue">Weekly</small>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 lg:flex-row mt-4 items-center gap-x-10 justify-center">
          <div className="h-[280px] relative">
            <SegmentedPieChart
              segmentData={[50000, 20000, 10000]}
              labels={['restaurant', 'foodie-pass', 'tax']}
              backgroundColors={['#0E5FD9', '#FFCA40', '#F2740C']}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <h5 className="text-[#1E265E] font-semibold">50K</h5>
              <p
                className="text-[#1E265E] text-base font-DMSans 
                  font-medium"
              >
                Total Earnings
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center lg:justify-start gap-x-10 mt-6">
              <span>
                <span className="flex items-center gap-x-1">
                  <span className="w-[10px] h-[10px] bg-[#0E5FD9] rounded-full mt-[1px]" />
                  <small>{restaurant.name}</small>
                </span>
                <h6 className="text-center">$1,132.50</h6>
              </span>
              <span>
                <span className="flex items-center gap-x-1">
                  <span className="w-[10px] h-[10px] bg-[#FFCA40] rounded-full mt-[1px]" />
                  <small>Foodie Pass</small>
                </span>
                <h6 className="text-center">$50</h6>
              </span>
              <span>
                <span className="flex items-center gap-x-1">
                  <span className="w-[10px] h-[10px] bg-[#F2740C] rounded-full mt-[1px]" />
                  <small>Tax</small>
                </span>
                <h6 className="text-center">$1,2450</h6>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
