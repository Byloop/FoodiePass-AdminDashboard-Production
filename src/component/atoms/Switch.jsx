export function Switch({ className, toggleStyle, isActive, onToggle }) {
  return (
    <span
      className={`w-[66px] h-[30px] px-[1px] rounded-full flex items-center transition-all ease-linear duration-300 cursor-pointer
        ${isActive ? 'bg-blue' : 'bg-[#EFEFEF] shadow-[0px_4.62px_6.15px_2.31px_#0000001A_inset]'}
        ${className}`}
      onClick={() => onToggle(!isActive)}
    >
      <span
        className={`w-[24px] h-[24px] rounded-full block transition-all ease-linear duration-300 delay-100
            ${
              isActive
                ? 'bg-white translate-x-[150%]'
                : 'bg-gradient-to-t from-[#dddddd] to-[#fff_80%] translate-x-[3px] shadow-[3px_2px_14px_0px_#999999]'
            } 
            ${toggleStyle}`}
      />
    </span>
  );
}
