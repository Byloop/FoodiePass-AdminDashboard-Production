import { useState } from 'react';
import { Input } from '../../../component/atoms/Input';
import { Button } from '../../../component/atoms/Button';
import { PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE } from '../../../constants';
import { useTranslation } from 'react-i18next';

const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export function PasswordReset() {
  const [passwordInformation, setPasswordInformation] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  const onChange = (e) => {
    setErrors({ ...errors, [e.target.name]: null });
    setPasswordInformation({
      ...passwordInformation,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log('values', passwordInformation);
  };

  const onValidate = () => {
    const newErrors = {};

    if (passwordInformation.oldPassword === '') {
      newErrors.oldPassword = 'profile.oldPasswordErrorMessage';
    }

    if (
      !PASSWORD_REGEX.test(passwordInformation.oldPassword) &&
      !newErrors.oldPassword
    ) {
      newErrors.oldPassword = PASSWORD_ERROR_MESSAGE;
    }

    if (passwordInformation.newPassword === '') {
      newErrors.newPassword = 'profile.newPasswordErrorMessage';
    }

    if (
      !PASSWORD_REGEX.test(passwordInformation.newPassword) &&
      !newErrors.newPassword
    ) {
      newErrors.newPassword = PASSWORD_ERROR_MESSAGE;
    }

    if (passwordInformation.confirmPassword === '') {
      newErrors.confirmPassword = 'profile.confirmPasswordErrorMessage';
    }

    if (
      !PASSWORD_REGEX.test(passwordInformation.confirmPassword) &&
      !newErrors.confirmPassword
    ) {
      newErrors.confirmPassword = PASSWORD_ERROR_MESSAGE;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit();
    }
  };

  return (
    <div className="max-w-[680px] 2xl:max-w-[800px]">
      <h5 className="font-semibold">{t('profile.changePassword')}</h5>
      <div className="flex flex-col lg:flex-row mt-4 gap-y-4 gap-x-4 xl:gap-x-8 2xl:gap-x-12 items-start">
        <Input
          name="oldPassword"
          value={passwordInformation.oldPassword}
          type="text"
          placeholder={t('profile.oldPassword')}
          label={t('profile.oldPassword')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.oldPassword}
          onChange={onChange}
        />
        <Input
          name="newPassword"
          value={passwordInformation.newPassword}
          type="text"
          placeholder={t('profile.newPassword')}
          label={t('profile.newPassword')}
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.newPassword}
          onChange={onChange}
        />
      </div>

      <Input
        name="confirmPassword"
        value={passwordInformation.confirmPassword}
        placeholder={t('profile.confirmPassword')}
        label={t('profile.confirmPassword')}
        error={errors?.confirmPassword}
        type="text"
        className="w-full lg:max-w-[47.5%] mt-4"
        inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
        onChange={onChange}
      />

      <Button
        onSubmit={onValidate}
        type="button"
        size="base"
        text={t('saveChanges')}
        className="w-full lg:max-w-[48%] mt-10 xl:mt-12"
      />
    </div>
  );
}
