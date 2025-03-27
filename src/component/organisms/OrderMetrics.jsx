import Completed from '../../assets/order-management/icons/completed.svg';
import Cancelled from '../../assets/order-management/icons/cancelled.svg';
import Pending from '../../assets/order-management/icons/pending.svg';
import Revenue from '../../assets/order-management/icons/revenue.svg';
import Total from '../../assets/order-management/icons/total.svg';
import { useTranslation } from 'react-i18next';

const analytics = [
  {
    id: 1,
    key: 'totalRevenue',
    icon: Revenue,
    color: 'bg-[#be40ff]',
  },
  {
    id: 2,
    key: 'totalOrders',
    icon: Total,
    color: 'bg-[#004D9B]',
  },
  {
    id: 3,
    key: 'completedOrders',
    icon: Completed,
    color: 'bg-[#50AF00]',
  },
  {
    id: 4,
    key: 'pendingOrders',
    icon: Pending,
    color: 'bg-[#FFCA40]',
  },
  {
    id: 5,
    key: 'cancelledOrders',
    icon: Cancelled,
    color: 'bg-[#FF5800]',
  },
];

export function OrderMetrics({
  showTotalOrders,
  showPendingOrders,
  orderData,
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`${showPendingOrders && showTotalOrders ? 'flex-wrap xl:flex-nowrap' : 'flex-nowrap'} 
      flex flex-row gap-y-4 mt-6 items-stretch gap-x-3`}
    >
      {analytics.map((item) => {
        if (
          (item.key !== 'totalOrders' && item.key !== 'pendingOrders') ||
          (item.key === 'totalOrders' && showTotalOrders) ||
          (item.key === 'pendingOrders' && showPendingOrders)
        ) {
          return (
            <div
              key={item.id}
              className={`${item.color} rounded-lg
              ${showPendingOrders && showTotalOrders ? 'w-[30%] lg:w-[20%]' : 'w-[33%]'}
                   bg-opacity-20 px-5 py-6 lg:min-w-[200px] xl:min-w-0`}
            >
              <span
                className={`w-[50px] h-[50px] 
                   rounded-full flex items-center justify-center ${item.color}
                  `}
              >
                <img src={item.icon} className="w-[25px] h-[25px]" />
              </span>
              <h6 className="font-medium mt-4">{orderData[item.key]}</h6>
              <small className="mt-3 block">
                {t(`orderManagement.${item.key}`)}
              </small>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
