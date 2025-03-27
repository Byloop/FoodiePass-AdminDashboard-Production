import { DropDownInput } from '../../component/atoms/DropDownInput';
import { staves as stavesData } from '../../assets/globals/data/Staff';
import { useMemo, useState } from 'react';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

function AssignStaffForm({ onCancel, onConfirm }) {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const staves = useMemo(
    () => stavesData.map((staff) => ({ id: staff.id, name: staff.fullName })),
    []
  );
  const { t } = useTranslation();

  return (
    <div className="flex mt-4 items-center gap-x-5">
      <DropDownInput
        className="w-[50%]"
        dropdownStyle="!top-[52px]"
        options={staves}
        selectedItem={selectedStaff}
        onSelectItem={(item) => setSelectedStaff(item)}
        placeholder={t('orderManagement.assignStaff')}
      />
      <Button
        onSubmit={onCancel}
        color="transparent"
        text={t('cancel')}
        size="small"
        className="px-4"
      />
      <Button
        isDisabled={selectedStaff == null}
        text={t('confirm')}
        nSubmit={onConfirm}
        size="small"
        className="px-4"
      />
    </div>
  );
}

export default AssignStaffForm;
