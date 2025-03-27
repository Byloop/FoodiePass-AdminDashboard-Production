import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';

export function ChallengeDetailsModal({ showModal, onClickCancel, challenge }) {
  const {
    name,
    description,
    location,
    moneySpent,
    startDate,
    endDate,
    startTime,
    endTime,
    hasOffer,
  } = challenge;

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[710px] overflow-hidden !rounded-xl pb-10"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">Challenge Details</h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Name:</small>
          <small>{name}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-4 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Challenge:</small>
          <small>{description}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-4 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Money Spent:</small>
          <small>{moneySpent}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Can Use Offers/Discounts:</small>
          <small>{hasOffer ? 'Yes' : 'No'}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-4 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Date From:</small>
          <small>{startDate}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Date To:</small>
          <small>{endDate}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-4 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Start Time:</small>
          <small>{startTime}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">End Time:</small>
          <small>{endTime}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-4 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Location:</small>
          <small>{location}</small>
        </div>
      </div>
    </ModalLayout>
  );
}
