import { Link } from '../../component/atoms/Link';
import {
  LevelManagementIcon,
  TableManagementIcon,
} from '../../assets/globals/icons/Sidebar';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const icon = {
  levelManagementIcon: LevelManagementIcon,
  tableManagementIcon: TableManagementIcon,
};

function SeatingManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 rounded-full">
        <div className="flex items-center justify-between px-4 w-[560px] lg:w-[600px] xl:w-[650px]">
          <Link
            text={t('levelManagement.addLevel')}
            icon={icon.levelManagementIcon}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="level-management"
            className="px-6 !py-[7px]"
          />
          <Link
            text={t('tableManagement.addTable')}
            icon={icon.tableManagementIcon}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="table-management"
            className="px-6 !py-[7px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/seating-management' ? (
          <Navigate to="level-management" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default SeatingManagement;
