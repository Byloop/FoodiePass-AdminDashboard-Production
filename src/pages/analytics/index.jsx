import {
  SalesSummary,
  WeeklyRevenueComparison,
  MonthlyRevenueComparison,
  YearlyRevenueComparison,
  MenuPerformance,
  OrderAnalysis,
} from '../../component/organisms';
import { CustomerReport } from './CustomerReport';
import { OfferPerformance } from './OfferPerformance';
import { SpecialOfferPerformance } from './SpecialOfferPerformance';
import { CustomerFeedback } from './CustomerFeedback';
import { TablePerformance } from './TablePerformance';

const orderData = {
  totalRevenue: 50000,
  completedOrders: 5000,
  cancelledOrders: 50,
};

function Analytics() {
  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <h5 className="font-medium text-blue mb-6">Analytics</h5>
      <div className="flex gap-y-6 flex-col xl:flex-row items-stretch mt-6 gap-x-5">
        <div className="w-full xl:w-[60%]">
          <SalesSummary orderData={orderData} />
        </div>
        <div className="w-full xl:w-[40%]">
          <CustomerReport />
        </div>
      </div>
      <div className="flex gap-y-6 flex-col xl:flex-row items-stretch mt-6 gap-x-5">
        <div className="w-full xl:w-[56%]">
          <WeeklyRevenueComparison />
        </div>
        <div className="w-full xl:w-[44%]">
          <YearlyRevenueComparison />
        </div>
      </div>
      <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
        <div className="w-full lg:w-[56%] xl:w-[60%]">
          <MenuPerformance />
        </div>
        <div className="w-full lg:w-[44%] xl:w-[40%]">
          <OrderAnalysis
            totalOrder={10000}
            cancelledOrder={2000}
            completedOrder={6000}
            newOrder={35}
          />
        </div>
      </div>
      <MonthlyRevenueComparison showStats={true} />
      <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
        <div className="w-full lg:w-[44%] xl:w-[40%]">
          <OfferPerformance />
        </div>
        <div className="w-full lg:w-[56%] xl:w-[60%]">
          <SpecialOfferPerformance />
        </div>
      </div>
      <div className="flex gap-y-6 flex-col lg:flex-row items-stretch mt-6 gap-x-5">
        <div className="w-full lg:w-[60%]">
          <TablePerformance />
        </div>
        <div className="w-full lg:w-[40%]">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
