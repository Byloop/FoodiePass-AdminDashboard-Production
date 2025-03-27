import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Link } from '../../../component/atoms/Link';

function PaymentManagement() {
  const location = useLocation();

  return (
    <div className="w-full pt-6">
      <div
        className="bg-white flex items-center justify-center h-[60px] border border-black 
          border-opacity-10 rounded-full mx-4 xlg:mx-6"
      >
        <div className="flex items-center justify-between px-4 gap-x-20">
          <Link
            text="Restaurants"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="all-restaurants"
            className="!py-[7px] min-w-[140px] lg:min-w-[200px]"
          />
          <Link
            text="Foodie Pass"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="foodie-pass"
            className="!py-[7px] min-w-[140px] lg:min-w-[200px]"
          />
          <Link
            text="Customer"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="customers"
            className="!py-[7px] min-w-[140px] lg:min-w-[200px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/payment-management' ? (
          <Navigate to="all-restaurants" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default PaymentManagement;
