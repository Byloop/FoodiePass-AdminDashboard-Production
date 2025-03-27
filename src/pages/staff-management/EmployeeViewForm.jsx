import { useMemo, useState } from 'react';
import { ModalLayout } from '../../component/organisms/ModalLayout';
import {
  CancelCircleIcon,
  AddIcon,
  DeleteIcon,
} from '../../assets/globals/icons';
import DateInput from '../availability-settings/DateInput';
import TimeInput from '../availability-settings/TimeInput';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import { Levels } from '../../assets/globals/data/levelData';
import { staves as stavesData } from '../../assets/globals/data/Staff';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

function EmployeeViewForm({ showModal, onClickCancel }) {
  const { t } = useTranslation();
  const [data, setData] = useState({
    staff: null,
    areas: [],
    date: null,
  });

  const staves = useMemo(
    () => stavesData.map((staff) => ({ id: staff.id, name: staff.fullName })),
    []
  );

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[610px] overflow-hidden !rounded-xl pb-4"
    >
      <div className="bg-lightBlue py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">
          {t('staffManagement.addShiftings')}
        </h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <div className="flex px-3 mt-4 gap-x-6 items-center">
        <div className="flex-1">
          <DropDownInput
            options={staves}
            label={t('staffManagement.employeeName')}
            buttonStyle="border-black border-opacity-20 !py-[7px]"
            placeholder={t('staffManagement.selectEmployee')}
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
      <div className="px-3 mt-6">
        <div className="bg-lightBlue py-3 px-4 rounded-md flex items-center justify-between">
          <h6 className="text-blue font-medium">
            {t('staffManagement.addArea')}
          </h6>
          <Button
            className="px-4"
            size="small"
            onSubmit={() => {
              const id =
                data.areas.length > 0
                  ? data.areas[data.areas.length - 1].id + 1
                  : 1;
              setData({
                ...data,
                areas: [
                  ...data.areas,
                  { id: id, area: null, startTime: '', endTime: '' },
                ],
              });
            }}
            text={t('add')}
            icon={icons.addIcon}
          />
        </div>
        {data.areas.map((area, index) => (
          <div key={area.id} className="flex px-3 mt-4 gap-x-3 items-end">
            <DropDownInput
              options={Levels}
              label={t('staffManagement.areaName')}
              className="max-w-[230px]"
              buttonStyle="border-black border-opacity-20 !py-[7px]"
              placeholder={t('tableManagement.selectArea')}
              selectedItem={null}
              onSelectItem={() => null}
            />
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

            <span
              onClick={() => {
                setData({
                  ...data,
                  areas: data.areas.filter(
                    (_, selectedAreaIndex) => selectedAreaIndex !== index
                  ),
                });
              }}
              className="cursor-pointer mb-1 block"
            >
              <DeleteIcon className="w-[26px] h-[26px] fill-[#E52614B2]" />
            </span>
          </div>
        ))}
        <div className="flex items-center justify-center mt-14">
          <Button size="small" text={t('save')} className="px-20" />
        </div>
      </div>
    </ModalLayout>
  );
}

export default EmployeeViewForm;
