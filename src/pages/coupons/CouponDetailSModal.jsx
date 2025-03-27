import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

function CouponDetailsModal({ showModal, coupon, onClickCancel }) {
  const {
    couponCode,
    type,
    subType,
    usageLimit,
    minimumCartValue,
    startTime,
    endTime,
    startDate,
    endDate,
    discountPercentage,
    rewardPoints,
  } = coupon;
  const { t } = useTranslation();

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-10"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">
          {t('couponManagement.couponDetails')}
        </h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">{`${t('couponManagement.couponCode')}:`}</small>
          <small>{couponCode}</small>
        </div>
        {type === 'discount' ? (
          <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
            <small className="font-semibold">{`${t('couponManagement.discount')}:`}</small>
            <small>{`${discountPercentage ? `${discountPercentage}%` : '-'}`}</small>
          </div>
        ) : (
          <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
            <small className="font-semibold">
              {t(`${t('couponManagement.specialOffer')}:`)}
            </small>
            <small>{subType.split('-').join(' ')}</small>
          </div>
        )}
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">{`${t('couponManagement.minimumCartAmount')}:`}</small>
          <small>{minimumCartValue}</small>
        </div>
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">{`${t('couponManagement.usageLimit')}:`}</small>
          <small>{usageLimit}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">{`${t('couponManagement.duration')}:`}</small>
          <small>{`${startDate} ${startTime} - ${endDate} ${endTime}`}</small>
        </div>
      </div>
      {subType === 'rewardPoints' && (
        <div className="flex px-3 gap-x-3 mt-6 items-center">
          <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
            <small className="font-semibold">Reward Points:</small>
            <small>{rewardPoints}</small>
          </div>
        </div>
      )}
    </ModalLayout>
  );
}

export default CouponDetailsModal;
