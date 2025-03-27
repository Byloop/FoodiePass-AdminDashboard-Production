import {
  MonthlyRevenueComparison,
  WeeklyRevenueComparison,
  YearlyRevenueComparison,
  MenuPerformance,
  SalesSummary,
  OrderAnalysis,
} from '../../component/organisms';
import { CustomerReport } from '../analytics/CustomerReport';

const orderData = {
  totalRevenue: 50000,
  completedOrders: 2500,
  cancelledOrders: 50,
};

export function RestaurantAnalytics() {
  return (
    <>
      <div className="mt-6 gap-y-6 flex flex-col xl:flex-row items-stretch gap-x-[1%]">
        <div className="w-full xl:w-[56%]">
          <SalesSummary orderData={orderData} />
        </div>
        <div className="w-full xl:w-[43%]">
          <CustomerReport />
        </div>
      </div>
      <div className="gap-y-6 flex flex-col xl:flex-row items-stretch mt-6 gap-x-[1%]">
        <div className="w-full xl:w-[59%]">
          <WeeklyRevenueComparison />
        </div>
        <div className="w-full xl:w-[40%]">
          <YearlyRevenueComparison />
        </div>
      </div>
      <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-[1%]">
        <div className="w-full lg:w-[59%]">
          <MenuPerformance />
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
      <MonthlyRevenueComparison showStats={true} />
    </>
  );
}
