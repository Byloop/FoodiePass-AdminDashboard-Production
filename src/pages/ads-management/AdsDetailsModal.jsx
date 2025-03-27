import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';

export function AdsDetailsModal({ showModal, ads, onClickCancel }) {
  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[710px] overflow-hidden !rounded-xl pb-10"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">Add Ads Info</h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-stretch">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-start gap-x-2">
          <small className="font-semibold">Name</small>
          <small>{ads.name}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-start gap-x-2">
          <small className="font-semibold">Location</small>
          <small>{ads.location}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Date From</small>
          <small>{ads.startDate}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Date To</small>
          <small>{ads.endDate}</small>
        </div>
      </div>
      <div className="flex px-3 gap-x-3 mt-6 items-center">
        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Start Time</small>
          <small>{ads.startTime}</small>
        </div>

        <div className="flex flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">End Time</small>
          <small>{ads.endTime}</small>
        </div>
      </div>
    </ModalLayout>
  );
}
