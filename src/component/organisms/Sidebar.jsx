import { useState, useMemo } from 'react';
import Logo from '../../assets/globals/logo.svg';
import LogoIcon from '../../assets/globals/logo-icon.svg';
import { NavLink, useLocation } from 'react-router-dom';

import { ChevronDownIcon } from '../../assets/globals/icons/index';

export function Sidebar({ toggle, links }) {
  const [openOptions, setOpenOptions] = useState([]);
  const location = useLocation();

  const pathName = useMemo(() => {
    const splitedPathName = location.pathname.split('/');
    if (splitedPathName.length > 0) {
      return splitedPathName[1];
    }
    return null;
  }, [location.pathname]);

  return (
    <div className="h-full">
      <div className="px-4 pt-10">
        <div className="w-[50px] xl:w-full xl:h-[60px]">
          <img
            className="w-full h-full xl:block hidden"
            src={Logo}
            alt="logo"
          />
          <img
            className="w-full h-full xl:hidden"
            src={LogoIcon}
            alt="logo-icon"
          />
        </div>
      </div>
      <ul className="flex overflow-visible flex-col gap-y-5 xl:gap-y-4 2xl:gap-y-8 py-10">
        {links.map((item) => {
          const isActiveOption = item.to === pathName;

          return (
            <li className="w-full" key={item.id}>
              {item.options.length === 0 ? (
                <div className="flex relative items-center">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? 'text-black  bg-yellow hover:text-black'
                          : 'bg-transparent  text-gray4'
                      } flex items-center gap-x-2 xlg:gap-x-4 w-full ml-2 xlg:ml-3 py-[13px] rounded-tl-md rounded-bl-md 
                    ${toggle ? 'justify-center px-0' : 'justify-center xl:px-2 xlg:px-4 xl:justify-start'}`
                    }
                    to={item.to}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`absolute rounded-tr-[4px] rounded-br-[4px] bg-black w-[6px] xlg:w-[10px] h-full left-0 
                        ${isActive ? 'visible' : 'invisible'}`}
                        />
                        <span className="">
                          {item.icon && (
                            <item.icon
                              className={`${isActive ? 'fill-black' : 'fill-gray4'} w-[32px] h-[32px] 
                            xl:w-[22px] xl:h-[22px] xlg:w-[28px] xlg:h-[28px]`}
                            />
                          )}
                        </span>

                        <p
                          className={`${toggle ? 'hidden opacity-0 delay-150' : 'opacity-100 hidden xl:block'} font-DMSans font-semibold 
                          text-base xlg:text-lg transition-all duration-200 ease-linear`}
                        >
                          {item.name}
                        </p>
                      </>
                    )}
                  </NavLink>
                </div>
              ) : (
                <div className="flex relative items-center">
                  <span
                    className={`cursor-pointer flex items-center gap-x-2 xlg:gap-x-4 w-full 
                ${toggle ? 'justify-center px-0' : 'justify-center xl:px-2 xlg:px-4 xl:justify-start'} 
                ${
                  isActiveOption
                    ? ' bg-yellow hover:text-black'
                    : 'bg-transparent'
                }
                py-[13px] ml-2 xlg:ml-3 rounded-tl-md rounded-bl-md text-gray4`}
                    onClick={() => {
                      if (openOptions.includes(item.id)) {
                        const newOpenOptions = openOptions.filter(
                          (id) => id !== item.id
                        );
                        setOpenOptions(newOpenOptions);
                      } else {
                        setOpenOptions([...openOptions, item.id]);
                      }
                    }}
                  >
                    <span
                      className={`absolute rounded-tr-[4px] rounded-br-[4px] bg-black w-[6px] xlg:w-[10px] h-full left-0 
                    ${isActiveOption ? 'visible' : 'invisible'}`}
                    />
                    <span className="">
                      {item.icon && (
                        <item.icon
                          className={`${isActiveOption ? 'fill-black' : 'fill-gray4'} w-[34px] h-[34px]
                        xl:w-[22px] xl:h-[22px] xlg:w-[28px] xlg:h-[28px]`}
                        />
                      )}
                    </span>

                    <div className="flex items-center gap-x-2 xlg:gap-x-4">
                      <p
                        className={`${toggle ? 'hidden opacity-0 delay-150' : 'opacity-100 hidden xl:block'} 
                    ${isActiveOption ? 'text-black' : 'text-gray4'}
                     font-DMSans text-base xlg:text-lg font-semibold transition-opacity duration-200 ease-linear`}
                      >
                        {item.name}
                      </p>

                      <ChevronDownIcon
                        className={`${isActiveOption ? 'fill-black' : 'fill-gray4'}
                        ${openOptions.includes(item.id) ? 'rotate-180' : 'rotate-0'} 
                        transition-all hidden xl:block duration-200 ease-out w-[14px] h-[14px]`}
                      />
                    </div>
                  </span>
                </div>
              )}

              {item.options.length > 0 && (
                <ul
                  className={`list-none ${openOptions.includes(item.id) ? 'block' : 'hidden overflow-hidden'} 
                transition-all duration-200 ease-in flex flex-col gap-y-4 2xl:gap-y-6 mt-2 xl:mt-4`}
                >
                  {item.options.map((option) => (
                    <li key={option.id} className="">
                      <NavLink
                        to={option.to}
                        className={({ isActive }) =>
                          `justify-center xl:justify-start xl:ml-3 xlg:ml-5 xl:px-3 xlg:px-4 flex items-center gap-x-2
                      ${isActive ? 'text-blue' : 'text-gray4 hover:text-blue group'}`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`w-[8px] hidden xl:block xlg:w-[10px] group-hover:bg-blue h-[8px] xlg:h-[10px] rounded-full 
                              ${isActive ? 'bg-blue' : 'bg-gray4'}`}
                            />
                            <p className="font-DMSans hidden xl:block font-semibold text-sm xlg:text-base">
                              {option.name}
                            </p>
                            <span>
                              <option.icon
                                className={`xl:hidden w-[24px] h-[24px] ${isActive ? 'fill-blue' : 'fill-gray4'}`}
                              />
                            </span>
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
