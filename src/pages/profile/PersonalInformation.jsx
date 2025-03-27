import { useState } from 'react';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { AddressForm } from './AddressForm';
import { EMAIL_REGEX } from '../../constants';
import { useTranslation } from 'react-i18next';

const initialValues = {
  firstName: 'Ruben',
  lastName: 'test',
  email: 'testuser@mail.com',
  phoneNumber: '',
  address: {
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    postalCode: '',
  },
};

export function PersonalInformation() {
  const [personalInformation, setPersonalInformation] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  const onChangePersonalInformation = (e) => {
    setErrors({ ...errors, [e.target.name]: null });
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeAddressInformation = (e) => {
    setErrors({ ...errors, [e.target.name]: null });
    setPersonalInformation({
      ...personalInformation,
      address: {
        ...personalInformation.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onSubmit = () => {
    console.log('values', personalInformation);
  };

  const onValidate = () => {
    const newErrors = {};

    if (personalInformation.firstName === '') {
      newErrors.firstName = 'profile.firstNameErrorMessage';
    }

    if (personalInformation.lastName === '') {
      newErrors.lastName = 'profile.lastNameErrorMessage';
    }

    if (personalInformation.email === '') {
      newErrors.email = 'profile.emailErrorMessage';
    }

    if (!EMAIL_REGEX.test(personalInformation.email) && !newErrors.email) {
      newErrors.email = 'profile.emailErrorMessage';
    }

    if (
      personalInformation.phoneNumber.toString() !== '' &&
      (personalInformation.phoneNumber.toString().length > 15 ||
        personalInformation.phoneNumber.toString().length < 10)
    ) {
      newErrors.phoneNumber = 'profile.phoneNumberErrorMessage';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit();
    }
  };

  const onDiscard = () => {
    setErrors({});
    setPersonalInformation(initialValues);
  };

  return (
    <div className="max-w-[680px] 2xl:max-w-[800px]">
      <h5 className="font-semibold">{t('profile.personalInformation')}</h5>
      <div className="flex flex-col lg:flex-row mt-4 gap-y-4 gap-x-4 xl:gap-x-8 2xl:gap-x-12 items-start">
        <Input
          name="firstName"
          value={personalInformation.firstName}
          type="text"
          placeholder={t('profile.firstName')}
          label={t('profile.firstName')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.firstName}
          onChange={onChangePersonalInformation}
        />
        <Input
          name="lastName"
          value={personalInformation.lastName}
          type="text"
          placeholder={t('profile.lastName')}
          label={t('profile.lastName')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.lastName}
          onChange={onChangePersonalInformation}
        />
      </div>
      <div className="flex flex-col lg:flex-row mt-4 gap-y-4 gap-x-4 xl:gap-x-8 2xl:gap-x-12 items-start">
        <Input
          name="email"
          value={personalInformation.email}
          type="text"
          placeholder={t('profile.email')}
          label={t('profile.email')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.email}
          onChange={onChangePersonalInformation}
        />
        <Input
          name="phoneNumber"
          value={personalInformation.phoneNumber}
          type="number"
          placeholder={t('profile.phoneNumber')}
          label={t('profile.phoneNumber')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.phoneNumber}
          onChange={onChangePersonalInformation}
        />
      </div>

      <h5 className="font-semibold mt-6 xl:mt-8">Address Information</h5>

      <AddressForm
        address={personalInformation.address}
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
  );
}
