import { useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LevelFeatures } from '../../../assets/globals/data/levelData';

import { LayoutWithImageUpload } from '../../../component/organisms/LayoutWithImageUpload';
import { CategorySelection } from '../../../component/organisms/CategorySelection';
import { Button } from '../../../component/atoms/Button';
import { Input } from '../../../component/atoms/Input';
import { AddIcon } from '../../../assets/globals/icons';
import { Switch } from '../../../component/atoms/Switch';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

const initialValue = {
  areaName: null,
  features: [],
  numberOfTable: null,
  image: null,
  isActive: null,
};

export function LevelForm() {
  const [newLevel, setNewLevel] = useState(initialValue);
  const [newFeature, setNewFeature] = useState('');
  const [addFeature, setAddFeature] = useState(false);
  const { t } = useTranslation();

  const location = useLocation();
  const fileInputRef = useRef(null);

  const editLevel = useMemo(() => {
    if (location?.state?.level) {
      return location?.state?.level;
    }
    return null;
  }, [location]);

  const onChange = (key, value) => {
    setNewLevel({ ...newLevel, [key]: value });
  };

  const onCancel = () => {
    fileInputRef.current.value = null;
    setNewLevel(initialValue);
  };

  const onSubmit = () => {
    if (!editLevel) {
      fileInputRef.current.value = null;
      setNewLevel(initialValue);
      console.log(newLevel, 'newLevel');
    } else {
      console.log('edited level', newLevel);
    }
  };

  const onAddFeature = () => {
    console.log('new feature', newFeature);
    setNewFeature('');
  };

  const isButtonDisabled = useMemo(() => {
    if (editLevel) {
      return false;
    }
    if (
      newLevel.name &&
      newLevel.image &&
      newLevel.features.length &&
      newLevel.numberOfTable &&
      newLevel.numberOfTable > 0
    ) {
      return false;
    }
    return true;
  }, [newLevel, editLevel]);

  return (
    <LayoutWithImageUpload
      ref={fileInputRef}
      selectedImage={
        newLevel.image ? URL.createObjectURL(newLevel.image) : editLevel?.image
      }
      onSelectImage={(file) => onChange('image', file)}
      heading={t('levelManagement.levelManagement')}
      leftContainerStyle="w-full !py-8"
      rightContainerStyle="w-[500px] lg:w-[460px] xl:w-[460px] xlg:w-[440px] 2xl:w-[420px]"
      imageContainerStyle="h-[290px] lg:!h-[320px]"
      imageStyle="object-cover w-full rounded-md"
    >
      <div className="flex items-end justify-end">
        <Switch
          isActive={
            newLevel.isActive != null ? newLevel.isActive : editLevel?.isActive
          }
          onToggle={(val) => onChange('isActive', val)}
        />
      </div>
      <Input
        value={newLevel.areaName ?? editLevel?.name}
        label={t('levelManagement.areaName')}
        onChange={(e) => onChange('areaName', e.target.value)}
        placeholder={t('levelManagement.areaName')}
        className="mt-4"
        inputStyle="border-black border-opacity-20 !py-[7px]"
      />
      <Input
        value={newLevel.numberOfTable ?? editLevel?.numberOfTable}
        onChange={(e) => onChange('numberOfTable', e.target.value)}
        label={t('levelManagement.numberOfTables')}
        className="mt-4"
        inputStyle="border-black border-opacity-20 !py-[7px]"
        type="number"
        placeholder={t('levelManagement.numberOfTables')}
      />
      <label className="font-DMSans mt-4 block font-semibold text-sm text-black">
        {t('levelManagement.features')}
      </label>
      <CategorySelection
        categories={LevelFeatures}
        selectedCategories={
          newLevel.features.length > 0
            ? newLevel.features
            : (editLevel?.features ?? [])
        }
        onSelectCategory={(newFeatures) => onChange('features', newFeatures)}
        multiple
        className="mt-2"
      />
      {!editLevel && (
        <>
          <Button
            text={t('levelManagement.addFeatures')}
            icon={icons.addIcon}
            className="px-4 !py-[7px] mt-4"
            color="yellow"
            size="small"
            onSubmit={() => setAddFeature(true)}
          />
          {addFeature && (
            <div className="mt-4">
              <div className="flex flex-col lg:flex-row items-start gap-y-3 lg:items-end mt-4 gap-x-6">
                <Input
                  value={newFeature}
                  label={t('levelManagement.addFeatures')}
                  onChange={(e) => setNewFeature(e.target.value)}
                  className="w-full"
                  inputStyle="border-black border-opacity-20 !py-[7px]"
                  placeholder={t('levelManagement.featureName')}
                />
                <div className="flex items-center gap-x-4">
                  <Button
                    text={t('cancel')}
                    color="transparent"
                    size="small"
                    className="px-4 !py-[7px]"
                    onSubmit={() => setAddFeature(false)}
                  />
                  <Button
                    text={t('add')}
                    size="small"
                    className="px-6 !py-[8px]"
                    onSubmit={onAddFeature}
                    isDisabled={newFeature === ''}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <div className="flex lg:w-[70%] lg:mx-auto flex-row items-center gap-x-4 xl:gap-x-8 2xl:gap-x-12 mt-10 xl:mt-12">
        <Button
          text={t('cancel')}
          className="w-full px-4"
          color="blue"
          size="base"
          onSubmit={onCancel}
        />
        <Button
          isDisabled={isButtonDisabled}
          text={editLevel ? t('saveChanges') : t('save')}
          className="w-full px-4"
          size="base"
          color="yellow"
          onSubmit={onSubmit}
        />
      </div>
    </LayoutWithImageUpload>
  );
}
