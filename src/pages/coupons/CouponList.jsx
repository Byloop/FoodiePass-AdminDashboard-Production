import { Link } from '../../component/atoms/Link';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AddIcon } from '../../assets/globals/icons';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

function CouponList() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 rounded-full">
        <div
          className="flex items-center justify-between px-4 w-[460px] 
        md:w-[500px] "
        >
          <Link
            text={t('active')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="active"
            className="!py-[7px] min-w-[160px]"
          />
          <Link
            text={t('inactive')}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="inactive"
            className="!py-[7px] min-w-[160px]"
          />
        </div>
      </div>
      <div className="flex items-center my-6 justify-between">
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">
            {t('couponManagement.totalCoupons')}
          </h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">80</div>
        </div>
        <Button
          className="px-4 font-semibold py-[10px]"
          text={t('couponManagement.addNewCoupon')}
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={() => navigate('add-coupon')}
        />
      </div>
      <div className="">
        {location.pathname === '/coupon-management' ? (
          <Navigate to="active" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default CouponList;
