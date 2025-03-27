import { useState } from 'react';
import { PlanAnalysis } from './PlanAnalysis';
import { PlanCard } from './PlanCard';
import { plans } from '../../../assets/globals/data/plans';
import { PlanOfferForm } from './PlanOfferForm';
import { useTranslation } from 'react-i18next';

function PlanDetails() {
  const [billingType, setBillingType] = useState('monthly');
  const { t } = useTranslation();

  return (
    <div className="pt-6 px-4 xlg:px-6">
      <PlanAnalysis />
      <div
        className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4 mt-6"
      >
        <h5 className="font-medium text-center">
          {t('planManagement.planOfferTitle')}
        </h5>
        <h6 className="text-opacity-60 text-black text-center">
          {t('planManagement.planOfferSubtitle')}
        </h6>
        <div className="flex items-center justify-center mt-6">
          <div className="w-[440px] gap-x-[1%] flex bg-blue py-1 rounded-full relative">
            <span
              className={`w-[48%] h-[40px]  py-2 rounded-full block absolute transition-all 
                duration-200 ease-linear
             top-1 bg-white ${billingType === 'monthly' ? 'translate-x-[2%]' : 'translate-x-[106%]'}`}
            />
            <span
              onClick={() => {
                if (billingType !== 'monthly') {
                  setBillingType('monthly');
                }
              }}
              className={`w-[48%] z-10 h-[40px] flex items-center justify-center font-medium
            text-lg ${billingType === 'monthly' ? 'text-blue' : 'text-white cursor-pointer'}`}
            >
              {t('planManagement.monthlyBilling')}
            </span>
            <span
              onClick={() => {
                if (billingType !== 'yearly') {
                  setBillingType('yearly');
                }
              }}
              className={`w-[48%] z-10 h-[40px] flex items-center justify-center text-right font-medium  
            ${billingType === 'yearly' ? 'text-blue' : 'text-white cursor-pointer'} text-lg`}
            >
              {t('planManagement.annualBilling')}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-6 mt-8 justify-center">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              selectedBillingType={billingType}
              plan={plan}
            />
          ))}
        </div>
        <PlanOfferForm />
      </div>
    </div>
  );
}

export default PlanDetails;
