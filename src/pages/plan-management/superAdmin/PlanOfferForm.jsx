import { useMemo } from 'react';
import { Input } from '../../../component/atoms/Input';
import DateInput from '../../availability-settings/DateInput';
import TimeInput from '../../availability-settings/TimeInput';
import { Button } from '../../../component/atoms/Button';
import { DropDownInput } from '../../../component/atoms/DropDownInput';
import { plans } from '../../../assets/globals/data/plans';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function PlanOfferForm() {
  const { t } = useTranslation();

  const billingTypes = useMemo(
    () => [
      { id: 1, key: t('monthly'), value: 'monthly' },
      { id: 2, key: t('yearly'), value: 'yearly' },
    ],
    []
  );

  const [data, setData] = useState({
    plan: null,
    billingType: '',
    offerPrice: '',
    startTime: null,
    endTime: null,
    startDate: null,
    endDate: null,
    usageLimit: '',
  });

  const onChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <div>
      <h5 className="text-blue font-semibold mt-6">
        {t('planManagement.planOffer')}
      </h5>
      <div className="flex mt-6 items-center gap-x-6">
        <DropDownInput
          placeholder={t('planManagement.selectPlan')}
          label={t('planManagement.plan')}
          buttonStyle="!py-[7px]"
          options={plans}
          selectedItem={data.plan}
          onSelectItem={(item) => onChange('plan', item)}
        />
        <DropDownInput
          label={t('restaurantManagement.billingType')}
          buttonStyle="!py-[7px]"
          placeholder={t('planManagement.selectBillingType')}
          options={billingTypes}
          selectedItem={data.billingType}
          onSelectItem={(item) => onChange('billingType', item)}
        />
      </div>
      <div className="flex mt-6 items-center gap-x-6">
        <Input
          label={t('planManagement.offerPrice')}
          placeholder={t('planManagement.offerPrice')}
          className="flex-1"
          value=""
          onChange={(e) => null}
          name="offerPrice"
          inputStyle="border-black border-opacity-20 !py-[7px]"
        />
        <Input
          label={t('couponManagement.usageLimit')}
          placeholder={t('couponManagement.usageLimit')}
          className="flex-1"
          value=""
          onChange={(e) => null}
          name="usageLimit"
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
          selectedTime={null}
          title={t('startTime')}
          onSelectTime={(time) => null}
        />
        <TimeInput
          containerStyle="flex-1"
          buttonStyle="w-full"
          selectedTime={null}
          title={t('endTime')}
          onSelectTime={(time) => null}
        />
      </div>
      <div className="flex items-center mt-10 justify-center">
        <Button
          className="px-12 !py-[8px] w-[300px]"
          size="small"
          text={t('update')}
        />
      </div>
    </div>
  );
}
