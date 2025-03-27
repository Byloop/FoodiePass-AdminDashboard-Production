import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Link } from '../../../component/atoms/Link';
import { useTranslation } from 'react-i18next';

function OrderManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 rounded-full">
        <div
          className="flex items-center justify-between px-4 
                       gap-x-20"
        >
          <Link
            text={t('orderManagement.viewOrders')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="all-orders"
            className="!py-[7px] min-w-[160px]"
          />
          <Link
            text={t('orderManagement.viewRestaurants')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="all-restaurants"
            className="!py-[7px] min-w-[200px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/order-management' ? (
          <Navigate to="all-orders" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default OrderManagement;
