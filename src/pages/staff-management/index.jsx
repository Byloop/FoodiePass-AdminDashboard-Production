import { useTranslation } from 'react-i18next';
import { Link } from '../../component/atoms/Link';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function StaffManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div
        className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 
              rounded-full"
      >
        <div className="flex items-center justify-between px-4 w-[560px] lg:w-[650px] xl:w-[700px]">
          <Link
            text={t('staffManagement.staffManagement')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="staves"
            className="px-6 !py-[7px]"
          />
          <Link
            text={t('staffManagement.attendence')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="attendence"
            className="px-6 !py-[7px]"
          />
          <Link
            text={t('staffManagement.staffShiftings')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="shiftings"
            className="px-6 !py-[7px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/staff-management' ? (
          <Navigate to="staves" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default StaffManagement;
