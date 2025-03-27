import { useState } from 'react';
import { Button } from '../../component/atoms/Button';
import { AddIcon } from '../../assets/globals/icons';
import { Link } from '../../component/atoms/Link';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AreaViewForm from './AreaViewForm';
import EmployeeViewForm from './EmployeeViewForm';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

function StaffShifting() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {showModal &&
      location.pathname === '/staff-management/shiftings/planner-view' ? (
        <EmployeeViewForm
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      ) : showModal ? (
        <AreaViewForm
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      ) : null}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Link
            text={t('staffManagement.globalView')}
            color="outline"
            activeState="blue"
            size="small"
            navigateTo="global-view"
            className="!py-[7px] min-w-[160px]"
          />
          <Link
            text={t('staffManagement.areaView')}
            color="outline"
            activeState="blue"
            size="small"
            navigateTo="area-view"
            className="!py-[7px] min-w-[160px]"
          />

          <Link
            text={t('staffManagement.plannerView')}
            color="outline"
            activeState="blue"
            size="small"
            navigateTo="planner-view"
            className="!py-[7px] px-4 min-w-[160px]"
          />
        </div>
        <Button
          className="px-4 font-semibold py-[10px]"
          text={t('staffManagement.addShiftings')}
          onSubmit={() => setShowModal(true)}
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="small"
          color="yellow"
        />
      </div>
      <div>
        {location.pathname === '/staff-management/shiftings' ? (
          <Navigate to="global-view" />
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}

export default StaffShifting;
