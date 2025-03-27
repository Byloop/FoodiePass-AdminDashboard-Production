import { useMemo } from 'react';
import { Button } from '../../component/atoms/Button';
import { Input } from '../../component/atoms/Input';
import TimeInput from '../availability-settings/TimeInput';
import DateInput from '../availability-settings/DateInput';
import MenuItemSelection from './MenuItemSelection';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CouponForm({ coupon, onChange, editCoupon }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const type = useMemo(() => {
    if (editCoupon) {
      return editCoupon.type;
    }
    return coupon.type;
  }, [coupon.type, editCoupon]);

  const subType = useMemo(() => {
    if (editCoupon) {
      return editCoupon.subType;
    }
    return coupon.subType;
  }, [coupon.subType, editCoupon]);

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-transparent px-1 flex items-center gap-x-4 w-full">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">
          {t('couponManagement.couponManagement')}
        </h5>
      </div>
      <div className="bg-white mt-6 py-10 rounded-2xl border-black border-opacity-10 border px-4 ">
        <div className="flex items-end gap-x-8">
          <Input
            label={t('couponManagement.couponCode')}
            isDisabled={editCoupon != null}
            value={coupon.couponCode}
            onChange={(e) => onChange('couponCode', e.target.value)}
            placeholder={t('couponManagement.couponCodeInputPlaceholder')}
            inputStyle="border-black border-opacity-20 !py-[7px]"
            className="flex-1"
          />
          <Button
            isDisabled={editCoupon != null}
            className="px-4"
            text={t('couponManagement.generate')}
          />
        </div>
        <div className="flex gap-x-6 mt-6 items-center">
          {(editCoupon == null || editCoupon?.type === 'discount') && (
            <Button
              text={t('couponManagement.discount')}
              color={`${type === 'discount' ? 'blue' : 'lightBlue'}`}
              size="small"
              className="min-w-[120px]"
              onSubmit={() => onChange('type', 'discount')}
            />
          )}

          {(editCoupon == null || editCoupon?.type === 'special') && (
            <Button
              color={`${type === 'special' ? 'blue' : 'lightBlue'}`}
              text={t('couponManagement.specialOffer')}
              size="small"
              onSubmit={() => onChange('type', 'special')}
              className="px-4"
            />
          )}
        </div>
        {type === 'discount' && (
          <Input
            label={t('couponManagement.discountPercentage')}
            value={coupon.discountPercentage}
            onChange={(e) => onChange('discountPercentage', e.target.value)}
            placeholder={t(
              'couponManagement.discountPercentageInputPlaceholder'
            )}
            inputStyle="border-black border-opacity-20 !py-[7px]"
            className="max-w-[500px] mt-6"
          />
        )}
        {type === 'special' && (
          <div className="flex gap-x-6 mt-6 items-center">
            {(editCoupon == null || editCoupon?.subType === '2X1') && (
              <Button
                text="2x1"
                size="small"
                color={`${subType === '2X1' ? 'blue' : 'lightBlue'}`}
                className="min-w-[70px]"
                onSubmit={() => onChange('subType', '2X1')}
              />
            )}
            {(editCoupon == null || editCoupon?.subType === '3X1') && (
              <Button
                text="3x1"
                size="small"
                color={`${subType === '3X1' ? 'blue' : 'lightBlue'}`}
                className="min-w-[70px]"
                onSubmit={() => onChange('subType', '3X1')}
              />
            )}
            {(editCoupon == null || editCoupon?.subType === 'bonus-plate') && (
              <Button
                text={t('couponManagement.bonusPlate')}
                size="small"
                color={`${subType === 'bonus-plate' ? 'blue' : 'lightBlue'}`}
                className="min-w-[120px] px-4"
                onSubmit={() => onChange('subType', 'bonus-plate')}
              />
            )}
            {(editCoupon == null ||
              editCoupon?.subType === 'reward-points') && (
              <Button
                text={t('couponManagement.rewardPoints')}
                size="small"
                color={`${subType === 'reward-points' ? 'blue' : 'lightBlue'}`}
                className="min-w-[140px] px-4"
                onSubmit={() => onChange('subType', 'reward-points')}
              />
            )}
          </div>
        )}
        {(subType === '2X1' ||
          subType === 'bonus-plate' ||
          subType === '3X1') &&
          type === 'special' && (
            <MenuItemSelection
              title={t('couponManagement.selectMenuTitle')}
              selectedMenuItem={coupon.menuItemId}
              onSelectMenuItem={(menuItemId) =>
                onChange('menuItemId', menuItemId)
              }
            />
          )}
        {type === 'special' && subType === 'bonus-plate' && (
          <MenuItemSelection
            title={t('couponManagement.selectFreeMenuTitle')}
            selectedMenuItem={coupon.freeMenuItemId}
            onSelectMenuItem={(menuItemId) =>
              onChange('freeMenuItemId', menuItemId)
            }
          />
        )}
        {subType === 'reward-points' && type === 'special' && (
          <Input
            label={t('couponManagement.rewardPoints')}
            value={coupon.rewardPoints}
            onChange={(e) => onChange('rewardPoints', e.target.value)}
            placeholder={t('couponManagement.rewardPointsInputPlaceholder')}
            inputStyle="border-black border-opacity-20 !py-[7px]"
            className="max-w-[500px] mt-6"
          />
        )}
        <div className="flex mt-6 items-center gap-x-6">
          <Input
            label={t('couponManagement.minimumCartAmount')}
            placeholder={t('couponManagement.minimumCartAmount')}
            className="flex-1"
            value={coupon.minimumCartAmount}
            onChange={(e) => onChange('minimumCartAmount', e.target.value)}
            name="minimumCartAmount"
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
          <Input
            label={t('couponManagement.usageLimit')}
            placeholder={t('couponManagement.usageLimit')}
            className="flex-1"
            value={coupon.usageUserLimit}
            onChange={(e) => onChange('usageUserLimit', e.target.value)}
            name="usageUserLimit"
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
        </div>
        <div className="flex mt-4 gap-x-6 items-center">
          <div className="flex-1">
            <DateInput
              containerStyle="w-[100%] flex-1"
              buttonStyle="!w-full"
              title={t('dateFrom')}
            />
          </div>
          <div className="flex-1">
            <DateInput
              containerStyle="w-[100%]"
              buttonStyle="!w-full"
              title={t('dateTo')}
            />
          </div>
        </div>
        <div className="flex mt-4 gap-x-6 items-center">
          <TimeInput
            containerStyle="flex-1"
            buttonStyle="w-full"
            selectedTime={coupon.startTime}
            title={t('startTime')}
            onSelectTime={(time) => onChange('startTime', time)}
          />
          <TimeInput
            containerStyle="flex-1"
            buttonStyle="w-full"
            selectedTime={coupon.endTime}
            title={t('endTime')}
            onSelectTime={(time) => onChange('endTime', time)}
          />
        </div>
        <div className="flex items-center mt-10 justify-center">
          <Button
            className="px-12 !py-[8px] w-[300px]"
            size="small"
            text={editCoupon ? t('update') : t('save')}
          />
        </div>
      </div>
    </div>
  );
}

export default CouponForm;
