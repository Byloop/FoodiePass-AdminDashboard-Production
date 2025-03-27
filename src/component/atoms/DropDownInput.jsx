import { ChevronSharpIcon } from '../../assets/globals/icons';
import { useState } from 'react';

export function DropDownInput({
  label,
  placeholder,
  className,
  buttonStyle,
  iconStyle,
  selectedItem,
  onSelectItem,
  isDisabled,
  options,
  error,
  dropdownStyle,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full relative ${className}`}>
      <label className="font-DMSans font-semibold text-sm text-black">
        {label}
      </label>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        disabled={isDisabled}
        className={`mt-1 w-full py-2 rounded-md border border-black 
          border-opacity-20 hover:outline-none hover:border-blue px-2 
          focus:outline-none focus:border-blue flex items-center disabled:hover:border-opacity-20 
          disabled:text-black disabled:text-opacity-40 disabled:hover:border-black
          justify-between ${buttonStyle}`}
      >
        <span
          className={`text-base font-DMSans text-black 
            ${selectedItem?.key || selectedItem?.name ? 'text-opacity-100' : 'text-opacity-30'}`}
        >
          {selectedItem?.key
            ? selectedItem?.key
            : selectedItem?.name
              ? selectedItem?.name
              : placeholder}
        </span>
        <span>
          <ChevronSharpIcon
            className={` ${isDisabled ? 'fill-gray-300' : 'fill-blue'} 
            w-[12px] transition-all duration-200 ease-linear h-[12px] ${iconStyle} 
            ${open ? 'rotate-0' : 'rotate-180'}`}
          />
        </span>
      </button>
      <div
        className={`${open ? 'block opacity-100' : 'hidden opacity-0'} transition-all duration-200 ease-linear z-40 max-h-[180px] overflow-y-auto
        absolute top-[80px] bg-white shadow-xl w-full 
        border border-black border-opacity-10 ${dropdownStyle}`}
      >
        <ul className="list-none flex flex-col gap-y-2 py-2">
          {options.map((item) => (
            <li
              className={`${selectedItem?.id === item.id ? 'bg-blue text-white' : 'hover:text-blue'} rounded-sm py-[3px] px-4 
               font-DMSans text-[12px] xl:text-sm cursor-pointer text-left font-medium`}
              key={item.id}
            >
              <span onClick={() => onSelectItem(item)}>
                {item.key ?? item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
