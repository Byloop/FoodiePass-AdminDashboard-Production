import { useMemo, useState } from 'react';
import { ProfileImage } from '../../component/atoms/ProfileImage';
import {
  Profile,
  Settings,
  Restaurant,
  Logout,
} from '../../assets/profile/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

const links = [
  {
    id: 1,
    name: 'profile.personalInformation',
    to: 'personal-information',
    icon: Profile,
    options: [],
  },
  {
    id: 2,
    name: 'profile.restaurantProfile',
    to: 'restaurant-profile',
    icon: Restaurant,
    options: [],
  },
  {
    id: 3,
    name: 'profile.settings',
    to: 'settings',
    icon: Settings,
    options: [{ id: 1, name: 'profile.changePassword', to: 'change-password' }],
    optionsPath: ['change-password'],
  },
];

export function Sidebar() {
  const [openOptions, setOpenOptions] = useState([]);
  const location = useLocation();
  const { t } = useTranslation();

  const pathName = useMemo(() => {
    const splitedPathName = location.pathname.split('/');
    if (splitedPathName.length === 3) {
      return splitedPathName[2];
    } else if (splitedPathName.length === 2) {
      return location.pathname;
    }
    return null;
  }, [location]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ProfileImage />
        <h6 className="font-semibold mt-3">Ruben Test</h6>
        <p className="font-DMSans text-base font-medium">testuser@mail.com</p>
      </div>

      <ul className="list-none flex flex-col gap-y-4 mt-6 px-2 xl:px-6">
        {links.map((link) => {
          const isActiveOption = link?.optionsPath?.includes(pathName);
          return (
            <li key={link.id}>
              {link.options.length === 0 ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-blue' : ''} transition-all ease-in-out duration-500 flex py-1 px-4 rounded-full items-center gap-x-2 
                  group`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>
                        <link.icon
                          className={`w-[16px] xl:w-[20px] h-[16px] xl:h-[20px] transition-all ease-in-out duration-500
                            ${isActive ? 'fill-white' : 'fill-gray4 group-hover:fill-blue'}`}
                        />
                      </span>
                      <p
                        className={`${isActive ? 'text-white' : 'text-gray4 group-hover:text-blue'} 
                        text-base xl:text-lg font-DMSans font-medium transition-all ease-in-out duration-500`}
                      >
                        {t(link.name)}
                      </p>
                    </>
                  )}
                </NavLink>
              ) : (
                <span
                  onClick={() => {
                    if (openOptions.includes(link.id)) {
                      const newOpenOptions = openOptions.filter(
                        (id) => id !== link.id
                      );
                      setOpenOptions(newOpenOptions);
                    } else {
                      setOpenOptions([...openOptions, link.id]);
                    }
                  }}
                  className={`flex cursor-pointer group py-1 px-4 rounded-full items-center gap-x-2 transition-all ease-in-out duration-500
                    ${isActiveOption ? 'bg-blue' : ''}`}
                >
                  <span>
                    <link.icon
                      className={`w-[16px] xl:w-[20px] h-[16px] xl:h-[20px] transition-all ease-in-out duration-500
                        ${isActiveOption ? 'fill-white' : 'fill-gray4 group-hover:fill-blue'}`}
                    />
                  </span>
                  <p
                    className={`${isActiveOption ? 'text-white' : 'text-gray4 group-hover:text-blue'} 
                    text-base xl:text-lg font-DMSans font-medium transition-all ease-in-out duration-500`}
                  >
                    {t(link.name)}
                  </p>
                  <ChevronDownIcon
                    className={`w-[14px] h-[14px] ${openOptions.includes(link.id) ? 'rotate-180' : 'rotate-0'} 
                    ${isActiveOption ? 'fill-white' : 'fill-gray4 group-hover:fill-blue'} transition-all ease-in-out duration-500`}
                  />
                </span>
              )}

              {link.options.length > 0 && (
                <ul
                  className={`list-none ${openOptions.includes(link.id) ? 'block' : 'hidden'} transition-all ease-in-out duration-500 
                  flex flex-col gap-y-8 mt-4`}
                >
                  {link.options.map((option) => (
                    <li key={option.id}>
                      <NavLink
                        to={option.to}
                        className={({ isActive }) =>
                          `font-DMSans transition-all ease-in-out duration-500 text-sm xl:text-base font-medium px-8 
                        ${isActive ? 'text-blue' : 'text-gray4 hover:text-black'}`
                        }
                      >
                        {t(option.name)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
        <li>
          <span className="flex cursor-pointer group py-1 px-4 rounded-full items-center gap-x-2">
            <span>
              <Logout className="w-[18px] xl:w-[22px] h-[18px] xl:h-[22px] fill-gray4 group-hover:fill-blue transition-all ease-in-out duration-500" />
            </span>
            <p
              className={`text-gray4 text-base xl:text-lg font-DMSans font-medium group-hover:text-blue 
                transition-all ease-in-out duration-500`}
            >
              {t('profile.logout')}
            </p>
          </span>
        </li>
      </ul>
    </>
  );
}
