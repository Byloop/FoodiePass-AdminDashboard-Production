import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Link } from '../../component/atoms/Link';
import { useTranslation } from 'react-i18next';

function ReviewManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 rounded-full">
        <div
          className="flex items-center justify-between px-4 
                      w-[600px] xl:w-[650px]"
        >
          <Link
            text={t('viewAll')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="all-reviews"
            className="!py-[7px] min-w-[160px]"
          />
          <Link
            text={t('viewTableBooking')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="table-booking-reviews"
            className="!py-[7px] min-w-[200px]"
          />
          <Link
            text={t('viewTakeAway')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="take-away-reviews"
            className="!py-[7px] min-w-[180px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/reviews-management' ? (
          <Navigate to="all-reviews" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default ReviewManagement;
