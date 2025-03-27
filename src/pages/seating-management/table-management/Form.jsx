import { useEffect, useMemo, useState } from 'react';
import { ChevronDownIcon } from '../../../assets/globals/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropDownInput } from '../../../component/atoms/DropDownInput';
import { Button } from '../../../component/atoms/Button';
import { Input } from '../../../component/atoms/Input';
import { AmountInput } from '../../../component/organisms/AmountInput';
import { ModalLayout } from '../../../component/organisms/ModalLayout';
import { AddonModal } from './AddonModal';
import { TableLayout } from './TableLayout';
import {
  AddOnIcon,
  DuplicateIcon,
  EntryIcon,
  ExitIcon,
} from '../../../assets/globals/icons/TableManagement';
import { EditIcon } from '../../../assets/globals/icons';
import { AvailabilityIcon } from '../../../assets/globals/icons/Sidebar';
import {
  tables as storedTables,
  addons as storedAddons,
  levelAddons,
  shapes as shapeJson,
  shapeData,
  maximumPax,
  minimumPax,
  orientations as orientationJson,
} from '../../../assets/globals/data/tableData';
import { useTranslation } from 'react-i18next';

const icons = {
  addOnIcon: AddOnIcon,
  editIcon: EditIcon,
  availabilityIcon: AvailabilityIcon,
  entryIcon: EntryIcon,
  exitIcon: ExitIcon,
  duplicateIcon: DuplicateIcon,
};

const initialValues = {
  name: null,
  shape: null,
  orientation: null,
  maximumPax: null,
  minimumPax: null,
  price: null,
};

export function TableForm() {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedAction, setSelectedAction] = useState();
  const [tables, setTables] = useState([]);
  const [addons, setAddons] = useState([]);
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const shapes = useMemo(() => {
    return shapeJson.map((shape) => ({
      ...shape,
      key: t(`tableManagement.${shape.key}`),
    }));
  }, [t]);

  const selectedArea = useMemo(() => {
    if (location?.state?.area) {
      return location.state.area;
    }
    return {
      id: 1,
      name: 'Second Floor',
    };
  }, [location]);

  const editTable = useMemo(() => {
    const shape =
      shapes.filter((shape) => shape.value === selectedTable?.shape)[0] ?? null;
    return {
      name: selectedAction === 'edit' ? selectedTable?.name : '',
      price: selectedAction === 'edit' ? selectedTable?.price : '',
      shape: shape,
      maximumPax: shape
        ? shapeData[shape.value].maximumPax.filter(
            (item) => parseInt(item.value) === selectedTable?.maximumPax
          )[0]
        : null,
      minimumPax: shape
        ? shapeData[shape.value].minimumPax.filter(
            (item) => parseInt(item.value) === selectedTable?.minimumPax
          )[0]
        : null,
      orientation:
        shape && shape.value !== 'circle' && shape.value !== 'sqaure'
          ? shapeData[shape.value].orientations.filter(
              (orientation) => orientation.value === selectedTable?.orientation
            )[0]
          : null,
    };
  }, [selectedAction, selectedTable, shapes]);

  const orientations = useMemo(() => {
    if (
      formData.shape &&
      formData.shape?.value !== 'circle' &&
      formData.shape?.value !== 'square'
    ) {
      return shapeData[formData.shape.value].orientations.map(
        (orientation) => ({
          ...orientation,
          key: t(`tableManagement.${orientation.key}`),
        })
      );
    }
    if (
      !formData.shape &&
      editTable.shape &&
      editTable.shape?.value !== 'circle' &&
      editTable.shape?.value !== 'square'
    ) {
      return shapeData[editTable.shape.value].orientations.map(
        (orientation) => ({
          ...orientation,
          key: t(`tableManagement.${orientation.key}`),
        })
      );
    }
    return [];
  }, [editTable.shape, formData.shape, t]);

  const maximumPax = useMemo(() => {
    return formData.shape
      ? shapeData[formData.shape.value].maximumPax
      : editTable.shape
        ? shapeData[editTable.shape.value].maximumPax
        : [];
  }, [editTable.shape, formData.shape]);

  const minimumPax = useMemo(() => {
    return formData.shape
      ? shapeData[formData.shape.value].minimumPax
      : editTable.shape
        ? shapeData[editTable.shape.value].minimumPax
        : [];
  }, [editTable.shape, formData.shape]);

  useEffect(() => {
    if (selectedArea) {
      setTables(
        storedTables.filter((table) => table.levelId === selectedArea.id)
      );
      setAddons(
        levelAddons
          .filter((levelAddon) => levelAddon.levelId === selectedArea.id)
          .map((item) =>
            storedAddons.find((addon) => addon.id === item.addonId)
          )
      );
    }
  }, [selectedArea]);

  const onChange = (key, value) => {
    setErrors({ ...errors, [key]: null });
    setFormData({ ...formData, [key]: value });
  };

  const onAddTable = () => {
    const newErrors = {};
    if (!formData.name || formData.name === '') {
      newErrors.name = 'Table name is required.';
    }

    if (!formData.shape) {
      newErrors.shape = 'Please select any shape.';
    }

    if (!formData.price) {
      newErrors.price = 'Please Enter price.';
    }

    if (!formData.orientation) {
      newErrors.orientation = 'Please select any orientation.';
    }

    if (!formData.maximumPax) {
      newErrors.maximumPax = 'Please select any maximum pax.';
    }

    if (!formData.minimumPax) {
      newErrors.minimumPax = 'Please select any minimum pax.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setTables([...tables, { ...formData, id: '' }]);
    }
  };

  const onEditTable = () => {
    console.log(formData, 'updated table data');
  };

  const onDragTable = (data) => {
    const updatedTables = tables.map((table) => {
      if (table.id === selectedTable?.id) {
        return {
          ...table,
          positions: { x: data.x, y: data.y },
          isModified: true,
        };
      } else {
        return table;
      }
    });
    setTables(updatedTables);
  };

  const onDragAddon = (data, selectedAddon) => {
    const updatedAddons = addons.map((addon) => {
      if (addon.id === selectedAddon.id) {
        return {
          ...addon,
          positions: { x: data.x, y: data.y },
        };
      } else {
        return addon;
      }
    });
    setAddons(updatedAddons);
  };

  const onSave = () => {
    console.log('updated tables', tables);
    console.log('updated addons', addons);
  };

  return (
    <div className="mt-6">
      <ModalLayout
        showModal={showModal}
        modalStyle="w-[640px] lg:!w-[800px] xl:!w-[1020px] h-[70%] xl:h-[86%]
        overflow-hidden !rounded-xl"
      >
        <AddonModal
          onCancel={() => {
            setSelectedAction(null);
            setShowModal(false);
          }}
        />
      </ModalLayout>
      <div className="flex items-center gap-x-4 w-full">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">
          {t('tableManagement.tableManagement')}
        </h5>
      </div>
      <div className="flex flex-col-reverse gap-y-6 lg:flex-row items-start 2xl:max-w-[1336px] gap-x-[1%] mt-6">
        <div
          className="bg-white border border-black rounded-2xl border-opacity-10 
        py-10 w-full lg:w-[70%] px-4 lg:!px-4 xl:!px-12"
        >
          <Input
            value={selectedArea.name}
            label={t('tableManagement.area')}
            className=""
            inputStyle="border-black border-opacity-20 !py-[7px]"
            isDisabled={true}
          />
          <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-4 mt-8">
            <Button
              size="small"
              text={t('tableManagement.addOn').toUpperCase()}
              icon={icons.addOnIcon}
              iconStyle="w-[24px] h-[24px]"
              className="px-6 !py-[6px] lg:!py-2 lg:px-12"
              color="transparent"
              isActive={selectedAction === 'add-on'}
              onSubmit={() => {
                if (selectedAction === 'add-on') {
                  setSelectedAction(null);
                } else {
                  setSelectedAction('add-on');
                  setShowModal(true);
                }
              }}
            />
            <Button
              size="small"
              text={t('tableManagement.addTable').toUpperCase()}
              iconStyle="w-[28px] h-[28px]"
              icon={icons.availabilityIcon}
              isActive={selectedAction === 'add'}
              className="px-6 !py-[6px] lg:!py-2 lg:px-8"
              color="transparent"
              onSubmit={() => {
                if (selectedAction === 'add') {
                  setSelectedAction(null);
                } else {
                  setSelectedAction('add');
                  setSelectedTable(null);
                  setFormData(initialValues);
                }
              }}
            />
            <Button
              size="small"
              text={t('edit').toUpperCase()}
              icon={icons.editIcon}
              iconStyle="w-[22px] h-[22px]"
              isActive={selectedAction === 'edit' && selectedTable}
              isDisabled={selectedTable === null}
              className="px-6 !py-[6px] lg:!py-2 lg:px-9"
              color="transparent"
              onSubmit={() => {
                if (selectedAction === 'edit') {
                  setSelectedAction(null);
                } else {
                  setSelectedAction('edit');
                  setFormData(initialValues);
                }
              }}
            />
            <Button
              size="small"
              text={t('tableManagement.duplicate').toUpperCase()}
              isActive={selectedAction === 'duplicate' && selectedTable}
              isDisabled={selectedTable === null}
              icon={icons.duplicateIcon}
              iconStyle="w-[26px] h-[26px]"
              className="px-6 !py-[6px] lg:!py-2 lg:px-9"
              color="transparent"
              onSubmit={() => {
                if (selectedAction === 'duplicate') {
                  setSelectedAction(null);
                } else {
                  setSelectedAction('duplicate');
                  setFormData(initialValues);
                }
              }}
            />
          </div>
          <div
            className={`${
              selectedAction === 'add' ||
              (selectedAction === 'edit' && selectedTable) ||
              (selectedAction === 'duplicate' && selectedTable)
                ? 'block'
                : 'hidden'
            }`}
          >
            <Input
              inputStyle="border-black border-opacity-20 !py-[7px]"
              label={t('tableManagement.tableName')}
              placeholder={t('tableManagement.tableName')}
              className="mt-4"
              value={formData.name ?? editTable.name}
              onChange={(e) => onChange('name', e.target.value)}
              error={errors.name}
            />
            <div className="flex flex-col gap-y-4 lg:flex-row items-start gap-x-4 mt-4">
              <DropDownInput
                options={shapes}
                label={t('tableManagement.shape')}
                buttonStyle="border-black border-opacity-20 !py-[7px]"
                placeholder={t('tableManagement.shape')}
                selectedItem={formData.shape ?? editTable.shape}
                onSelectItem={(item) => onChange('shape', item)}
                error={errors.shape}
              />

              <DropDownInput
                options={maximumPax}
                isDisabled={maximumPax.length === 0}
                label={t('tableManagement.maximumPax')}
                placeholder={t('tableManagement.maximumPax')}
                selectedItem={formData.maximumPax ?? editTable.maximumPax}
                onSelectItem={(item) => onChange('maximumPax', item)}
                buttonStyle="border-black border-opacity-20 !py-[7px]"
                error={errors.maximumPax}
              />
            </div>

            <div className="flex flex-col gap-y-4 lg:flex-row items-start gap-x-4 mt-4">
              <DropDownInput
                options={minimumPax}
                isDisabled={minimumPax.length === 0}
                label={t('tableManagement.minimumPax')}
                placeholder={t('tableManagement.minimumPax')}
                selectedItem={formData.minimumPax ?? editTable.minimumPax}
                onSelectItem={(item) => onChange('minimumPax', item)}
                buttonStyle="border-black border-opacity-20 !py-[7px]"
                error={errors.minimumPax}
              />

              <DropDownInput
                options={orientations}
                isDisabled={orientations.length === 0}
                label={t('tableManagement.orientation')}
                placeholder={t('tableManagement.orientation')}
                error={errors.orientation}
                selectedItem={formData.orientation ?? editTable?.orientation}
                onSelectItem={(item) => onChange('orientation', item)}
                buttonStyle="border-black border-opacity-20 !py-[7px]"
                className={`${
                  formData.shape?.value === 'Circle' ||
                  formData.shape?.value === 'Square' ||
                  ((editTable.shape?.value === 'Circle' ||
                    editTable.shape?.value === 'Square') &&
                    formData.shape == null)
                    ? 'invisible'
                    : 'visible'
                }`}
              />
            </div>
            <AmountInput
              price={formData.price ?? editTable.price}
              onSetPrice={(price) => onChange('price', price)}
              className="mt-4"
              error={errors.price}
            />

            <Button
              className="px-4 w-full mt-6"
              size="base"
              text={
                selectedAction === 'add'
                  ? t('tableManagement.addTable')
                  : selectedAction === 'edit'
                    ? t('tableManagement.editTable')
                    : t('tableManagement.duplicateTable')
              }
              color="transparent"
              onSubmit={() =>
                selectedAction === 'add' || selectedAction === 'duplicate'
                  ? onAddTable()
                  : onEditTable()
              }
            />
          </div>

          <div className="flex flex-row gap-x-4 xl:gap-x-8 2xl:gap-x-12 mt-10 xl:mt-12 lg:mx-auto items-center">
            <Button className="px-4 w-full" size="base" text={t('cancel')} />
            <Button
              className="px-4 w-full"
              size="base"
              color="yellow"
              text={t('save')}
              onSubmit={onSave}
            />
          </div>
        </div>
        <TableLayout
          tables={tables}
          addons={addons}
          onDragTable={onDragTable}
          className="!w-full !h-[400px] lg:!w-[400px] lg:!h-[500px]"
          onDragAddon={onDragAddon}
          onSelectTable={(table) => setSelectedTable(table)}
          selectedTable={selectedTable}
          isDraggable={selectedAction !== 'add'}
        />
      </div>
    </div>
  );
}
