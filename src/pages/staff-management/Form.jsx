import { useState } from 'react';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { permissions } from '../../assets/globals/data/Staff';
import { Switch } from '../../component/atoms/Switch';
import { useTranslation } from 'react-i18next';

function StaffForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [staff, setStaff] = useState({
    fullName: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    permissions: [],
  });

  const onChange = (key, value) => {
    setStaff({
      ...staff,
      [key]: value,
    });
  };

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-transparent px-1 flex items-center gap-x-4 w-full">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">
          {t('staffManagement.staffManagement')}
        </h5>
      </div>
      <div className="bg-white mt-6 py-10 rounded-2xl border-black border-opacity-10 border px-4 ">
        <div className="flex mt-6 items-center gap-x-6">
          <Input
            label={t('staffManagement.fullName')}
            placeholder={t('staffManagement.fullName')}
            className="flex-1"
            value={staff.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
          <Input
            label={t('staffManagement.role')}
            placeholder={t('staffManagement.role')}
            className="flex-1"
            value={staff.role}
            onChange={(e) => onChange('role', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
        </div>
        <div className="flex mt-6 items-center gap-x-6">
          <Input
            label={t('profile.email')}
            placeholder={t('profile.email')}
            className="flex-1"
            value={staff.email}
            onChange={(e) => onChange('email', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
          <Input
            label={t('profile.phoneNumber')}
            placeholder={t('profile.phoneNumber')}
            className="flex-1"
            value={staff.phoneNumber}
            onChange={(e) => onChange('phoneNumber', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
        </div>
        <div className="flex mt-6 items-center gap-x-6">
          <Input
            label={t('profile.password')}
            placeholder={t('profile.password')}
            className="flex-1"
            value={staff.password}
            onChange={(e) => onChange('password', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
          <Input
            label={t('profile.confirmPassword')}
            placeholder={t('profile.confirmPassword')}
            className="flex-1"
            value={staff.confirmPassword}
            onChange={(e) => onChange('confirmPassword', e.target.value)}
            inputStyle="border-black border-opacity-20 !py-[7px]"
          />
        </div>
        <div className="mt-8 pb-8 border rounded-md border-blue">
          <div className="py-2 px-4 bg-lightBlue">
            <h6 className="text-base text-blue">
              {t('staffManagement.staffPermissions')}
            </h6>
          </div>
          <div className="flex px-4 mt-6 flex-row gap-x-12 gap-y-6 flex-wrap">
            {permissions.map((permission) => (
              <div key={permission.id} className="min-w-[100px]">
                <small className="font-semibold text-center">
                  {t(permission.key)}
                </small>
                <Switch
                  isActive={staff.permissions.includes(permission.value)}
                  onToggle={(isActive) => {
                    if (isActive) {
                      setStaff({
                        ...staff,
                        permissions: [...staff.permissions, permission.value],
                      });
                    } else {
                      setStaff({
                        ...staff,
                        permissions: staff.permissions.filter(
                          (selectedPermission) =>
                            selectedPermission !== permission.value
                        ),
                      });
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button text={t('save')} size="small" className="w-[200px] px-4" />
        </div>
      </div>
    </div>
  );
}

export default StaffForm;
