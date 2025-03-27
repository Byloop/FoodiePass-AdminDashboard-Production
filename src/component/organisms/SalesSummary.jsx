import { TimeRangeDropdown } from '../../pages/main/TimeRangeDropdown';
import { OrderMetrics } from './OrderMetrics';

export function SalesSummary({
  orderData,
  showPendingOrders,
  showTotalOrders,
}) {
  return (
    <div
      className="bg-white 
            border border-black border-opacity-10 rounded-3xl  
      px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-blue">Sales Summary</h5>

        <TimeRangeDropdown />
      </div>
      <OrderMetrics
        orderData={orderData}
        showTotalOrders={showTotalOrders}
        showPendingOrders={showPendingOrders}
      />
    </div>
  );
}
