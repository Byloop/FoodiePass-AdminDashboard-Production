import { useMemo, useState } from 'react';
import PremiumIcon from '../../../assets/plan-management/icons/premium.svg';
import AdvanceIcon from '../../../assets/plan-management/icons/advance.svg';
import BasicIcon from '../../../assets/plan-management/icons/basic.svg';
import OfferIcon from '../../../assets/plan-management/icons/offer.svg';
import { Button } from '../../../component/atoms/Button';
import { ArrowRightIcon } from '../../../assets/globals/icons';
import { planOffers } from '../../../assets/globals/data/plans';
import { EditPlanPrice } from './EditPlanPriceModal';
import { useTranslation } from 'react-i18next';

const icons = {
  arrowIcon: ArrowRightIcon,
  premiumPlan: PremiumIcon,
  advancePlan: AdvanceIcon,
  basicPlan: BasicIcon,
};

export function PlanCard({ plan, selectedBillingType }) {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const offer = useMemo(() => {
    return (
      planOffers.filter(
        (offer) =>
          offer.planId === plan.id && offer.billingType === selectedBillingType
      )[0] ?? null
    );
  }, [plan.id, selectedBillingType]);

  const price = useMemo(
    () =>
      selectedBillingType === 'monthly' ? plan.monthlyPrice : plan.annualPrice,
    [plan.annualPrice, plan.monthlyPrice, selectedBillingType]
  );

  return (
    <div className="border-2 border-blue rounded-md relative w-[33%] px-4 py-5 max-w-[260px]">
      {showModal && (
        <EditPlanPrice
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
          currentPrice={
            selectedBillingType === 'monthly'
              ? plan.monthlyPrice
              : plan.annualPrice
          }
        />
      )}
      {offer && (
        <img
          src={OfferIcon}
          className="absolute right-2 top-2 w-[36px] h-[36px]"
          alt="offer-icon"
        />
      )}
      <img
        src={icons[plan.name]}
        className="w-[40px] h-[40px] mt-2"
        alt="basic"
      />
      <h6 className="text-blue font-semibold leading-4 mt-6">
        {t(`restaurantManagement.${plan.name}`)}
      </h6>
      <small className="font-medium text-sm">
        {t('planManagement.startingAt')}
      </small>

      <h4 className="text-blue mt-6 font-medium leading-6">
        ${offer ? <s className="text-sm font-regular">{price}</s> : null}
        {offer ? offer.offerPrice : price}
        <span className="text-sm font-regular text-blue">
          {selectedBillingType === 'monthly'
            ? `/${t('planManagement.month')}`
            : `/${t('planManagement.year')}`}
        </span>
      </h4>
      <p className="font-DMSans font-regular text-sm text-blue">
        {selectedBillingType === 'monthly'
          ? t('planManagement.monthlySubscription')
          : t('planManagement.annuallySubscription')}
      </p>

      <Button
        icon={icons.arrowIcon}
        onSubmit={() => setShowModal(true)}
        iconPosition="right"
        size="small"
        text={t('planManagement.editPlan')}
        className="mt-6 w-[80%]"
      />
    </div>
  );
}
