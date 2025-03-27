import { useMemo, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, DeleteIcon } from '../../assets/globals/icons';
import { Button } from '../../component/atoms/Button';
import { Camera, ImageFolderIcon, AddIcon } from '../../assets/globals/icons';
import { Input } from '../../component/atoms/Input';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import { MenuItemType, Allergens } from '../../assets/globals/data';
import { CategorySelection } from '../../component/organisms/CategorySelection';
import { TextArea } from '../../component/atoms/Textarea';
import { AmountInput } from '../../component/organisms/AmountInput';
import { useTranslation } from 'react-i18next';

const icons = {
  camera: Camera,
  addIcon: AddIcon,
};

const initialValue = {
  name: null,
  description: null,
  type: null,
  price: null,
  video: null,
  image: null,
  elaborationTime: null,
  minimumPax: null,
  allergens: [],
  modifiers: [
    { name: '', price: '', id: 1 },
    { name: '', price: '', id: 2 },
  ],
};

export function MenuItemForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const editMenuItem = useMemo(() => {
    if (location?.state?.menuItem) {
      return location.state.menuItem;
    }
    return null;
  }, [location]);

  const [newMenuItem, setNewMenuItem] = useState(() => {
    if (editMenuItem && editMenuItem?.modifiers?.length > 0) {
      return { ...initialValue, modifiers: editMenuItem.modifiers };
    } else {
      return initialValue;
    }
  });

  const category = useMemo(() => {
    if (location?.state?.category) {
      return location.state.category;
    }
    return null;
  }, [location]);

  const onChange = (key, value) => {
    setNewMenuItem({ ...newMenuItem, [key]: value });
  };

  const onCancel = () => {
    navigate(`/menu-management/${category.type}`);
  };

  const onSave = () => {
    console.log('new menu', newMenuItem);
  };

  const onSaveAndEnable = () => {
    console.log('new menu', newMenuItem);
  };

  if (!category && !editMenuItem) {
    return <Navigate to="/menu-management" />;
  }

  return (
    <>
      <div className="flex items-start gap-x-4 mt-6 px-2">
        <h6 className="text-gray4 leading-4 mt-[1px] font-medium">
          {t(`menuManagement.${category.type}`)}
        </h6>
        <span>
          <ChevronDownIcon
            className={`w-[18px] h-[18px] -rotate-90 ${editMenuItem ? 'fill-gray4' : 'fill-blue'}`}
          />
        </span>
        <h6
          className={`leading-4 mt-[1px] font-medium ${editMenuItem ? 'text-gray4' : 'text-blue'}`}
        >
          {category.name}
        </h6>
        {editMenuItem && (
          <>
            <span>
              <ChevronDownIcon className="w-[18px] h-[18px] -rotate-90 fill-blue" />
            </span>
            <h6 className={`text-blue leading-4 mt-[1px] font-medium`}>
              {editMenuItem.name}
            </h6>
          </>
        )}
      </div>
      <div className="bg-transparent flex 2xl:max-w-[1336px] gap-x-[1%] mt-6 items-start">
        <div className="w-full bg-transparent">
          <div
            className="rounded-2xl border 
        border-black border-opacity-10 bg-white py-6 px-4"
          >
            <Form
              newMenuItem={newMenuItem}
              editMenuItem={editMenuItem}
              onChange={onChange}
            />
          </div>

          {/* Desktop View */}
          <div className="w-full mt-6 py-6 px-4 bg-white rounded-2xl border-black border-opacity-10 border hidden lg:block">
            <ModifierForm
              price={
                !newMenuItem.price && !editMenuItem?.price
                  ? '$'
                  : (newMenuItem.price ?? `$${editMenuItem?.price}`)
              }
              onSetPrice={(newPrice) => onChange('price', newPrice)}
              modifiers={newMenuItem.modifiers}
              onSetModifiers={(newModifiers) =>
                onChange('modifiers', newModifiers)
              }
            />
            <div className="flex items-center gap-x-10 mt-8">
              <Button
                text={t('cancel')}
                color="transparent"
                size="base"
                className="px-4 w-full"
                onSubmit={onCancel}
              />
              <Button
                text={t('save')}
                color="blue"
                size="base"
                className="px-4 w-full"
                onSubmit={onSave}
              />
              <Button
                text={t('save&Enable')}
                color="yellow"
                size="base"
                className="px-4 w-full"
                onSubmit={onSaveAndEnable}
              />
            </div>
          </div>
        </div>
        <div
          className="w-[420px] lg:w-[380px] xlg:w-[360px] h-auto 
          rounded-2xl bg-white px-4 py-6 
        border border-black border-opacity-10"
        >
          <UploadVideo
            selectedVideo={
              newMenuItem.video
                ? URL.createObjectURL(newMenuItem.video)
                : (editMenuItem?.video ?? null)
            }
            onSelectVideo={(video) => onChange('video', video)}
          />
        </div>
      </div>

      {/* mobile View  */}
      <div
        className="w-full mt-6 py-6 px-4 bg-white 
      rounded-2xl border-black border-opacity-10 border lg:hidden"
      >
        <ModifierForm
          price={
            !newMenuItem.price && !editMenuItem?.price
              ? '$'
              : (newMenuItem.price ?? `$${editMenuItem?.price}`)
          }
          onSetPrice={(newPrice) => onChange('price', newPrice)}
          modifiers={newMenuItem.modifiers}
          onSetModifiers={(newModifiers) => onChange('modifiers', newModifiers)}
        />
        <div className="flex items-center gap-x-10 mt-8">
          <Button
            text={t('cancel')}
            color="transparent"
            size="base"
            onSubmit={onCancel}
            className="px-4 w-full"
          />
          <Button
            text={t('save')}
            color="blue"
            size="base"
            className="px-4 w-full"
            onSubmit={onSave}
          />
          <Button
            text={t('save&Enable')}
            color="yellow"
            size="base"
            className="px-4 w-full"
            onSubmit={onSaveAndEnable}
          />
        </div>
      </div>
    </>
  );
}

const UploadVideo = ({ selectedVideo, onSelectVideo }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`w-full ${selectedVideo ? 'bg-blue bg-opacity-10' : 'bg-gray3 bg-opacity-100'} 
            border border-opacity-20 h-[360px] rounded-2xl flex items-center justify-center`}
      >
        {selectedVideo ? (
          <video controls className="w-full h-full object-cover">
            <source src={selectedVideo} />
          </video>
        ) : (
          <span>
            <ImageFolderIcon className="w-[60px] h-[60px] fill-gray4" />
          </span>
        )}
      </div>
      <div className="relative">
        <Button
          text={t('upload')}
          className="w-full mt-8"
          color="lightBlue"
          icon={icons.camera}
          iconStyle="w-[26px] h-[26px]"
          size="base"
        />
        <input
          type="file"
          className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0"
          onChange={(e) => onSelectVideo(e.target.files[0])}
          accept="video/*"
        />
      </div>
    </>
  );
};

const UploadImage = ({ selectedImage, onSelectImage }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-[220px] bg-gray3 border border-opacity-20 h-[270px] rounded-md flex items-center justify-center">
        {selectedImage ? (
          <img
            className="w-full h-full object-cover"
            src={selectedImage}
            alt="profile-pic"
          />
        ) : (
          <span>
            <ImageFolderIcon className="w-[60px] h-[60px] fill-gray4" />
          </span>
        )}
      </div>
      <button
        className="bg-blue mt-3 text-[14px] lg:text-base font-DMSans font-medium w-auto py-[5px] px-4 rounded-md flex items-center 
        justify-between text-white gap-x-3 relative"
      >
        <span>
          <Camera className="w-[22px] lg:w-[24px] h-[22px] lg:h-[24px] fill-white" />
        </span>
        <input
          type="file"
          className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0"
          onChange={(e) => onSelectImage(e.target.files[0])}
        />
        {t('profile.uploadCoverImage')}
      </button>
    </>
  );
};

const Form = ({ newMenuItem, editMenuItem, onChange }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-x-8 xlg:gap-x-20">
        <Input
          value={newMenuItem.name ?? editMenuItem?.name}
          label={t('menuManagement.name')}
          name="name"
          placeholder={t('menuManagement.name')}
          className="w-full"
          inputStyle="border-black border-opacity-20 !py-[7px]"
          onChange={(e) => onChange('name', e.target.value)}
        />
        <DropDownInput
          options={MenuItemType}
          label={t('menuManagement.menuType')}
          placeholder={t('menuManagement.menuType')}
          selectedItem={newMenuItem.type ?? editMenuItem?.type}
          onSelectItem={(item) => onChange('type', item)}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-x-8 xlg:gap-x-20 mt-4">
        <Input
          label={t('menuManagement.timeElaboration')}
          placeholder={t('menuManagement.timeElaboration')}
          value={newMenuItem.elaborationTime ?? editMenuItem?.elaborationTime}
          className="w-full"
          inputStyle="border-black border-opacity-20 !py-[7px]"
          onChange={(e) => onChange('elaborationTime', e.target.value)}
          type="number"
        />
        <Input
          label={t('menuManagement.minimumPax')}
          value={newMenuItem.minimumPax ?? editMenuItem?.minimumPax}
          placeholder={t('menuManagement.minimumPax')}
          className="w-full"
          type="number"
          inputStyle="border-black border-opacity-20 !py-[7px]"
          onChange={(e) => onChange('minimumPax', e.target.value)}
        />
      </div>
      <div className="mt-4">
        <UploadImage
          selectedImage={
            newMenuItem.image
              ? URL.createObjectURL(newMenuItem.image)
              : (editMenuItem?.image ?? null)
          }
          onSelectImage={(image) => onChange('image', image)}
        />
      </div>
      <div className="mt-4">
        <label className="font-DMSans font-semibold  text-sm text-black">
          {t('menuManagement.allergens')}
        </label>
        <CategorySelection
          categories={Allergens}
          selectedCategories={
            newMenuItem.allergens.length > 0
              ? newMenuItem.allergens
              : (editMenuItem?.allergens ?? [])
          }
          multiple
          className="mt-2"
          onSelectCategory={(item) => onChange('allergens', item)}
        />
      </div>
      <div className="mt-4">
        <TextArea
          label={t('description')}
          placeholder={t('description')}
          value={newMenuItem.description ?? editMenuItem?.description}
          textareaStyle="border-black border-opacity-20 !py-[7px]"
          onChange={(e) => onChange('description', e.target.value)}
        />
      </div>
    </>
  );
};

const ModifierForm = ({ price, onSetPrice, modifiers, onSetModifiers }) => {
  const { t } = useTranslation();

  const onAddModifiers = () => {
    const id = modifiers[modifiers.length - 1].id;
    onSetModifiers([...modifiers, { name: '', price: '', id: id + 1 }]);
  };

  const onDeleteModifiers = (indexToRemove) => {
    onSetModifiers(modifiers.filter((_, index) => index !== indexToRemove));
  };

  const onChangeModifiers = (key, value, index) => {
    modifiers[index][key] = value;
    onSetModifiers(modifiers);
  };

  return (
    <>
      <div className="flex rounded-lg py-2 px-4 bg-blue items-center bg-opacity-10 justify-between">
        <h5 className="text-blue font-medium">
          {t('menuManagement.modifiers')}
        </h5>
        <Button
          text={t('add')}
          size="base"
          className="px-[18px] !py-[7px]"
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          onSubmit={onAddModifiers}
        />
      </div>
      <div className="flex mt-6 gap-x-4 xl:gap-x-6">
        <AmountInput price={price} onSetPrice={onSetPrice} />
        <div className="w-full">
          <div className="flex items-center px-[2px]">
            <h6 className="font-DMSans font-semibold text-base w-[92%]">
              {t('menuManagement.name')}
            </h6>
            <h6 className="font-DMSans font-semibold text-base w-full">
              {t('price')}
            </h6>
          </div>
          <div className="flex flex-col gap-y-4">
            {modifiers.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-x-2 xlg:gap-x-[14px] 2xl:gap-x-6"
              >
                <Input
                  value={modifiers[index].name}
                  className="w-full"
                  placeholder={t('menuManagement.name')}
                  name="name"
                  inputStyle="border-black border-opacity-20 !py-[7px]"
                  onChange={(e) =>
                    onChangeModifiers(e.target.name, e.target.value, index)
                  }
                />
                <Input
                  className="w-full"
                  inputStyle="border-black border-opacity-20 !py-[7px]"
                  value={modifiers[index].price}
                  placeholder={t('price')}
                  name="price"
                  onChange={(e) =>
                    onChangeModifiers(e.target.name, e.target.value, index)
                  }
                />
                <span
                  className={`${modifiers.length > 2 ? 'visible' : 'invisible'}`}
                  onClick={() => onDeleteModifiers(index)}
                >
                  <DeleteIcon className="w-[26px] h-[26px] fill-[#E52614B2]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
