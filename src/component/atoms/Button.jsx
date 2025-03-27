const sizeMap = {
  small: 'text-base py-2',
  base: 'text-base xl:text-lg py-2',
  large: 'text-lg lg:text-xl py-2',
  extraLarge: 'text-xl lg:text-2xl py-2',
};

const colorMap = {
  transparent: 'bg-transparent border-blue border text-blue',
  blue: 'border-none bg-blue text-white',
  yellow: 'bg-yellow border-none text-black',
  lightBlue: 'bg-blue bg-opacity-10 text-blue',
  grey: 'bg-black bg-opacity-10 text-black',
};

const activeStateMap = {
  transparent: '!bg-blue text-white',
};

const fillMap = {
  transparent: 'fill-blue',
  blue: 'fill-white',
  yellow: 'fill-black',
  lightBlue: 'fill-blue',
};

const activeFillStateMap = {
  transparent: 'fill-white',
};

export function Button(props) {
  const {
    text,
    color = 'blue',
    size = 'large',
    type,
    onSubmit,
    isDisabled = false,
    isActive = false,
    isLoading = false,
    icon: Icon = null,
    iconPosition = 'left',
    className,
    iconStyle,
  } = props;

  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];
  const fillClass = fillMap[color];
  const activeClass = activeStateMap[color];
  const activeFillClass = activeFillStateMap[color];

  return (
    <button
      type={type}
      onClick={onSubmit}
      disabled={isDisabled}
      className={`font-DMSans flex justify-center items-center gap-x-2 
        font-medium rounded-full 
        disabled:border-none disabled:bg-black disabled:bg-opacity-10 
        disabled:text-black disabled:text-opacity-40
        ${sizeClass} ${colorClass} ${isActive && activeClass} ${className}`}
    >
      {Icon && iconPosition === 'left' && (
        <Icon
          className={`w-[14px] h-[14px] ${fillClass} ${isActive && activeFillClass} 
          ${isDisabled && '!fill-[#0000004d]'} ${iconStyle}`}
        />
      )}
      {isLoading ? 'Loading...' : text}
      {Icon && iconPosition === 'right' && (
        <Icon
          className={`w-[14px] h-[14px] ${fillClass} ${isActive && activeFillClass} 
          ${isDisabled && '!fill-[#0000004d]'} ${iconStyle}`}
        />
      )}
    </button>
  );
}
