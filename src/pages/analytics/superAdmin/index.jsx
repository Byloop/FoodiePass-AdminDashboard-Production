import {
  SalesSummary,
  WeeklyRevenueComparison,
  MonthlyRevenueComparison,
  YearlyRevenueComparison,
  OrderAnalysis,
  MenuPerformance,
} from '../../../component/organisms';
import { RestaurantPerformance } from './RestaurantPerformance';
import { RevenueAnalysisChart } from './RevenueAnalysisChart';
import { WeeklyOrderComparison } from './WeeklyOrderComparison';
import { WeeklySignupComparison } from './WeeklySignupComparison';
import { MonthlySubscriptionComparison } from './MonthlySubscriptionComparison';

const orderData = {
  totalRevenue: 50000,
  totalOrders: 5000,
  completedOrders: 2500,
  cancelledOrders: 50,
  pendingOrders: 3000,
};

function Analytics() {
  {
    return (
      <div className="w-full pt-6 px-4 xlg:px-6">
        <h5 className="font-medium text-blue mb-6">Analytics</h5>
        <SalesSummary
          orderData={orderData}
          showPendingOrders={true}
          showTotalOrders={true}
        />
        <div className="flex gap-y-6 flex-col xl:flex-row items-stretch mt-6 gap-x-5">
          <div className="w-full xl:w-[56%]">
            <WeeklyRevenueComparison />
          </div>
          <div className="w-full xl:w-[44%]">
            <YearlyRevenueComparison />
          </div>
        </div>
        <MonthlyRevenueComparison showStats={true} />
        <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
          <div className="w-full lg:w-[40%]">
            <RevenueAnalysisChart />
          </div>
          <div className="w-full lg:w-[60%]">
            <RestaurantPerformance />
          </div>
        </div>
        <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
          <div className="w-full lg:w-[60%]">
            <WeeklyOrderComparison />
          </div>
          <div className="w-full lg:w-[40%]">
            <OrderAnalysis
              totalOrder={10000}
              cancelledOrder={2000}
              completedOrder={6000}
              newOrder={35}
            />
          </div>
        </div>
        <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
          <div className="w-full lg:w-[50%]">
            <WeeklySignupComparison />
          </div>
          <div className="w-full lg:w-[50%]">
            <MenuPerformance />
          </div>
        </div>
        <MonthlySubscriptionComparison />
      </div>
    );
  }
}

export default Analytics;
