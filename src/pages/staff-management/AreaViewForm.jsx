import { useMemo, useState } from 'react';
import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';
import DateInput from '../availability-settings/DateInput';
import TimeInput from '../availability-settings/TimeInput';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import { Levels } from '../../assets/globals/data/levelData';
import { staves as stavesData } from '../../assets/globals/data/Staff';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

function AreaViewForm({ showModal, onClickCancel }) {
  const [data, setData] = useState({
    area: null,
    staves: [],
    selectedDate: null,
    startTime: null,
    endTime: null,
  });
  const { t } = useTranslation();

  const staves = useMemo(
    () => stavesData.map((staff) => ({ id: staff.id, name: staff.fullName })),
    []
  );

  const onAddEmployee = (item) => {
    const staves = data.staves;

    if (staves.some((staff) => staff.name === item.name)) {
      return;
    } else {
      setData({
        ...data,
        staves: [...data.staves, item],
      });
    }
  };

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-4"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">
          {t('staffManagement.staffShiftings')}
        </h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 mt-4 gap-x-6 items-center">
        <div className="flex-1">
          <DropDownInput
            options={Levels}
            label={t('staffManagement.areaName')}
            buttonStyle="border-black border-opacity-20 !py-[7px]"
            placeholder={t('tableManagement.selectArea')}
            selectedItem={null}
            onSelectItem={() => null}
          />
        </div>
        <div className="flex-1">
          <DateInput
            containerStyle="w-[100%] flex-1"
            buttonStyle="!w-full"
            title={t('date')}
          />
        </div>
      </div>
      <div className="flex px-3 mt-4 gap-x-6 items-center">
        <div className="flex-1">
          <TimeInput
            containerStyle="flex-1 w-full"
            buttonStyle="w-full"
            title={t('startTime')}
          />
        </div>
        <div className="flex-1">
          <TimeInput
            containerStyle="flex-1 w-full"
            buttonStyle="w-full"
            title={t('endTime')}
          />
        </div>
      </div>
      <div className="px-3 mt-6">
        <div className="bg-lightBlue py-3 px-4 rounded-md flex items-center justify-between">
          <h6 className="text-blue font-medium">
            {t('staffManagement.addEmployees')}
          </h6>
        </div>
        <div className="my-4 flex flex-wrap gap-2 items-center">
          {data.staves.map((staff) => (
            <div
              className="bg-blue px-4 py-2 rounded-full flex items-center gap-x-2 w-auto"
              key={staff.id}
            >
              <small className="w-auto text-sm text-white">{staff.name}</small>
              <span
                className="cursor-pointer"
                onClick={() =>
                  setData({
                    ...data,
                    staves: data.staves.filter(
                      (item) => staff.name !== item.name
                    ),
                  })
                }
              >
                <CancelCircleIcon className="w-[20px] h-[20px] fill-white" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex mt-4 items-end justify-between gap-x-4">
          <DropDownInput
            label={t('staffManagement.employee')}
            placeholder={t('staffManagement.employee')}
            options={staves}
            onSelectItem={onAddEmployee}
          />
        </div>
        <div className="flex items-center justify-center mt-14">
          <Button size="small" text={t('save')} className="px-20" />
        </div>
      </div>
    </ModalLayout>
  );
}

export default AreaViewForm;
