import { NavLink as RouterLink } from 'react-router-dom';

const sizeMap = {
  small: 'text-base py-2',
  base: 'text-base xl:text-lg py-2',
  large: 'text-lg lg:text-xl py-2',
  extraLarge: 'text-xl lg:text-2xl py-2',
};

const colorMap = {
  transparent: '',
  outline: 'border-blue border text-blue',
  blue: 'border-none bg-blue text-white',
  yellow: 'bg-yellow border-none text-black',
  lightBlue: 'bg-blue bg-opacity-10 text-blue',
};

const fillMap = {
  transparent: '',
  outline: 'fill-blue',
  blue: 'fill-white',
  yellow: 'fill-black',
  lightBlue: 'fill-blue',
};

const activeFillMap = {
  blue: 'fill-white',
  yellow: 'fill-black',
};

const activeStateMap = {
  blue: 'bg-blue bg-opacity-100 text-white border-none',
  yellow: 'bg-yellow border-none text-black',
};

export function Link(props) {
  const {
    text,
    navigateTo,
    color = 'blue',
    size = 'large',
    activeState,
    type,
    isDisabled = false,
    isLoading = false,
    icon: Icon = null,
    className,
    iconStyle,
  } = props;

  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];
  const activeStateClass = activeStateMap[activeState];
  const fillClass = fillMap[color];
  const activeFillClass = activeFillMap[activeState];

  return (
    <RouterLink
      to={navigateTo}
      type={type}
      disabled={isDisabled}
      className={({ isActive }) =>
        `font-DMSans font-medium gap-x-2 justify-center items-center text-center 
      flex rounded-full ${isActive ? `${activeStateClass}` : ''} 
      ${sizeClass} ${colorClass} ${className}`
      }
    >
      {({ isActive }) => (
        <>
          {Icon && (
            <Icon
              className={`w-[14px] h-[14px] ${fillClass} ${isActive ? `${activeFillClass}` : ''} ${iconStyle}`}
            />
          )}
          {isLoading ? 'Loading...' : text}
        </>
      )}
    </RouterLink>
  );
}
