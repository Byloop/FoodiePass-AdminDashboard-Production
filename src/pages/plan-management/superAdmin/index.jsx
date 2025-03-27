import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Link } from '../../../component/atoms/Link';
import { useTranslation } from 'react-i18next';

function PlanManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6">
      <div
        className="bg-white flex items-center justify-center h-[60px] border border-black 
      border-opacity-10 rounded-full mx-4 xlg:mx-6"
      >
        <div className="flex items-center justify-between px-4 gap-x-20">
          <Link
            text={t('orderManagement.viewRestaurants')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="all-restaurants"
            className="!py-[7px] min-w-[200px]"
          />
          <Link
            text={t('planManagement.planOffer')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="plan-offer"
            className="!py-[7px] min-w-[200px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/plan-management' ? (
          <Navigate to="all-restaurants" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default PlanManagement;
