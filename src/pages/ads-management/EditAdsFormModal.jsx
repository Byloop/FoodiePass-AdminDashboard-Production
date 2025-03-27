import { useState } from 'react';
import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';
import DateInput from '../availability-settings/DateInput';
import TimeInput from '../availability-settings/TimeInput';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { AdsImageUploadModal } from './AdsImageUpload';

export function EditAdsFormModal({ showModal, onClickCancel, editData }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-10"
    >
      {showForm ? (
        <>
          <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
            <h6 className="text-blue font-medium">Edit Ads</h6>
            <span className="cursor-pointer" onClick={() => onClickCancel()}>
              <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
            </span>
          </div>
          <div className="px-3 mt-6">
            <Input
              label="Name"
              value=""
              onChange={(e) => null}
              placeholder="Name"
              inputStyle="border-black border-opacity-20 !py-[7px]"
              className="flex-1"
            />
          </div>
          <div className="flex px-3 mt-4 gap-x-6 items-center">
            <div className="flex-1">
              <DateInput
                containerStyle="w-[100%] flex-1"
                buttonStyle="!w-full"
                title="Date From"
              />
            </div>
            <div className="flex-1">
              <DateInput
                containerStyle="w-[100%]"
                buttonStyle="!w-full"
                title="Date To"
              />
            </div>
          </div>
          <div className="flex mt-4 px-3 gap-x-6 items-center">
            <TimeInput
              containerStyle="flex-1"
              buttonStyle="w-full"
              title="Start Time"
              onSelectTime={(time) => null}
            />
            <TimeInput
              containerStyle="flex-1"
              buttonStyle="w-full"
              title="End Time"
              onSelectTime={(time) => null}
            />
          </div>
          <div className="px-3 mt-4">
            <Input
              label="Location"
              value=""
              onChange={(e) => null}
              placeholder="Location"
              inputStyle="border-black border-opacity-20 !py-[7px]"
              className="flex-1"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button size="small" text="Done" className="px-8" />
          </div>
        </>
      ) : (
        <AdsImageUploadModal
          selectedImage={editData.image}
          onClickNext={() => setShowForm(true)}
          onClickCancel={onClickCancel}
        />
      )}
    </ModalLayout>
  );
}
