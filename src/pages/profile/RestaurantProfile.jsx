import { useState } from 'react';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import { AddressForm } from './AddressForm';
import { UploadImage } from './UploadImage';
import { CategorySelection } from '../../component/organisms/CategorySelection';
import { Categories } from '../../assets/globals/data/Categories';
import { Cuisines } from '../../assets/globals/data';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  cuisine: null,
  categories: [],
  coverImage: null,
  profileImage: null,
  address: {
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    postalCode: '',
  },
};

export function RestaurantProfile() {
  const [restaurantInformation, setRestaurantInformation] =
    useState(initialValues);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  const onChange = (key, value) => {
    setRestaurantInformation({ ...restaurantInformation, [key]: value });
  };

  const onChangeAddressInformation = (e) => {
    setRestaurantInformation({
      ...restaurantInformation,
      address: {
        ...restaurantInformation.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onDiscard = () => {
    setErrors({});
    setRestaurantInformation(initialValues);
  };

  const onSubmit = () => {
    console.log(restaurantInformation, 'values');
  };

  const onValidate = () => {
    const newErrors = {};

    if (restaurantInformation.name === '') {
      newErrors.name = 'profile.restaurantNameErrorMessage';
    }

    if (restaurantInformation.categories.length === 0) {
      newErrors.categories = 'profile.foodCategoryErrorMessage';
    }

    if (!restaurantInformation.profileImage) {
      newErrors.profileImage = 'profile.profilePicErrorMessage';
    }

    if (!restaurantInformation.coverImage) {
      newErrors.coverImage = 'profile.coverImageErrorMessage';
    }

    if (!restaurantInformation.cuisine) {
      newErrors.cuisine = 'profile.cuisineErrorMessage';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit();
    }
  };

  return (
    <div className="">
      <div className="max-w-[680px] 2xl:max-w-[800px]">
        <h5 className="font-semibold">{t('profile.restaurantProfile')}</h5>
        <div className="flex flex-col lg:flex-row mt-4 gap-y-4 gap-x-4 xl:gap-x-8 2xl:gap-x-12 items-start">
          <Input
            name="name"
            value={restaurantInformation.name}
            type="text"
            placeholder={t('profile.restaurantName')}
            label={t('profile.restaurantName')}
            className="w-full"
            inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
            error={errors?.name}
            onChange={(e) => onChange('name', e.target.value)}
          />
          <DropDownInput
            selectedItem={restaurantInformation.cuisine}
            onSelectItem={(item) => onChange('cuisine', item)}
            buttonStyle="!py-[6px]"
            error={errors.cuisine}
            placeholder={t('selectCuisine')}
            label={t('cuisine')}
            options={Cuisines}
          />
        </div>
        <h5 className="font-semibold mt-6 xl:mt-8">
          {t('profile.accountProfile')}
        </h5>
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-12 mt-4">
          <UploadImage
            selectedImage={
              restaurantInformation.profileImage
                ? URL.createObjectURL(restaurantInformation.profileImage)
                : ''
            }
            onSelectImage={(e) => onChange('profileImage', e.target.files[0])}
            text={t('profile.uploadProfilePic')}
            error={errors.profileImage}
          />
          <UploadImage
            selectedImage={
              restaurantInformation.coverImage
                ? URL.createObjectURL(restaurantInformation.coverImage)
                : ''
            }
            onSelectImage={(e) => onChange('coverImage', e.target.files[0])}
            text={t('profile.uploadCoverImage')}
            error={errors.coverImage}
          />
        </div>
      </div>

      <h5 className="font-semibold mt-6 xl:mt-8">
        {t('profile.foodCategory')}
      </h5>
      <div className="mt-4">
        <CategorySelection
          categories={Categories}
          multiple={true}
          selectedCategories={restaurantInformation.categories}
          onSelectCategory={(categories) => onChange('categories', categories)}
        />
        {errors.categories && <p className="error">{errors.categories}</p>}
      </div>
      <div className="max-w-[680px] 2xl:max-w-[800px]">
        <h5 className="font-semibold mt-6 xl:mt-8">Address Information</h5>
        <AddressForm
          address={restaurantInformation.address}
          setAddress={onChangeAddressInformation}
          errors={errors}
        />
        <div className="flex flex-row items-center gap-x-4 xl:gap-x-8 2xl:gap-x-12 mt-10 xl:mt-12">
          <Button
            onSubmit={onDiscard}
            type="button"
            size="base"
            color="transparent"
            text={t('discardChanges')}
            className="w-full"
          />
          <Button
            onSubmit={onValidate}
            type="button"
            size="base"
            text={t('saveChanges')}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
