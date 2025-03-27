import { ModalLayout } from './ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';
import DateInput from '../../pages/availability-settings/DateInput';
import TimeInput from '../../pages/availability-settings/TimeInput';
import { Button } from '../atoms/Button';
import { useTranslation } from 'react-i18next';

export function DateTimeQueryModal({ showModal, onClickCancel }) {
  const { t } = useTranslation();

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-10"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">{t('selectPeriod')}</h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 mt-4 gap-x-6 items-center">
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
      <div className="flex mt-4 px-3 gap-x-6 items-center">
        <TimeInput
          containerStyle="flex-1"
          buttonStyle="w-full"
          title={t('startTime')}
          onSelectTime={(time) => null}
        />
        <TimeInput
          containerStyle="flex-1"
          buttonStyle="w-full"
          title={t('endTime')}
          onSelectTime={(time) => null}
        />
      </div>
      <div className="mt-8 flex justify-center">
        <Button className="px-4 w-[36%]" text={t('apply')} size="small" />
      </div>
    </ModalLayout>
  );
}
