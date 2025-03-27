import { useMemo } from 'react';
import { TimeRangeDropdown } from '../../main/TimeRangeDropdown';
import { restaurantOrders } from '../../../assets/globals/data/Orders';
import { OrderMetrics } from '../../../component/organisms/OrderMetrics';

export function RestaurantOrderAnalytics({ restaurantName }) {
  const restaurant = useMemo(() => {
    return restaurantOrders.find(
      (restaurant) => restaurant.name === restaurantName
    );
  }, [restaurantName]);

  return (
    <div
      className="bg-white 
    border border-black border-opacity-10 rounded-md mt-6 px-6 py-10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src=""
            alt=""
            className="w-[50px] h-[50px] border border-opacity-10 border-black rounded-full"
          />
          <h6 className="font-medium text-blue">{restaurantName}</h6>
        </div>
        <TimeRangeDropdown />
      </div>
      <OrderMetrics showPendingOrders showTotalOrders orderData={restaurant} />
    </div>
  );
}
