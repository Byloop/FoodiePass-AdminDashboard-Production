import { Banner } from '../Banner';
import {
  SalesSummary,
  MenuPerformance,
  MonthlyRevenueComparison,
  OrderAnalysis,
} from '../../../component/organisms';
import { UserReport } from '../../analytics/superAdmin/UserReport';
import { RestaurantPerformance } from '../../analytics/superAdmin/RestaurantPerformance';
import { RevenueAnalysisChart } from '../../analytics/superAdmin/RevenueAnalysisChart';

const orderData = {
  totalRevenue: 50000,
  completedOrders: 2500,
  cancelledOrders: 50,
};

function Main() {
  return (
    <div className="pt-6 px-4 overflow-y-auto dashboard-main-content">
      <Banner />
      <div className="mt-6 gap-y-6 flex flex-col xl:flex-row items-stretch gap-x-2">
        <div className="w-full xl:w-[60%]">
          <SalesSummary orderData={orderData} />
        </div>
        <div className="w-full xl:w-[40%]">
          <UserReport />
        </div>
      </div>
      <MonthlyRevenueComparison />
      <div className="flex mt-6 flex-col lg:flex-row items-stretch gap-x-2 gap-y-6">
        <div className="w-full lg:w-[50%]">
          <MenuPerformance />
        </div>
        <div className="w-full lg:w-[50%]">
          <OrderAnalysis
            totalOrder={10000}
            cancelledOrder={2000}
            completedOrder={6000}
            newOrder={35}
          />
        </div>
      </div>
      <div className="flex mt-6 flex-col lg:flex-row items-stretch gap-x-2 gap-y-6">
        <div className="w-full lg:w-[50%]">
          <RestaurantPerformance />
        </div>
        <div className="w-full lg:w-[50%]">
          <RevenueAnalysisChart />
        </div>
      </div>
    </div>
  );
}

export default Main;
