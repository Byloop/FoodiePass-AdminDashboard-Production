import { ModalLayout } from '../../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../../assets/globals/icons';
import { Input } from '../../../component/atoms/Input';
import { Button } from '../../../component/atoms/Button';

export function EditPlanPrice({ showModal, onClickCancel, currentPrice }) {
  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-10"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">Edit Plan</h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="px-3 gap-x-3 mt-6">
        <div className="flex mb-6 flex-1 py-[10px] px-4 bg-lightBlue items-center gap-x-2">
          <small className="font-semibold">Current Price:</small>
          <small>{`$${currentPrice}`}</small>
        </div>
        <Input
          label="Price"
          placeholder="Enter price"
          className="flex-1"
          value=""
          onChange={(e) => null}
          inputStyle="border-black border-opacity-20 !py-[7px]"
        />
      </div>
      <div className="flex mt-8 items-center justify-center">
        <Button className="px-12" size="small" text="Apply" />
      </div>
    </ModalLayout>
  );
}
