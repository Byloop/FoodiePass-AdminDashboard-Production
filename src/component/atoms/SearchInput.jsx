import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SearchInput({
  onSearch,
  className,
  inputStyle,
  iconStyle,
  focusStyle,
}) {
  const [focus, setFocus] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const { t } = useTranslation();

  return (
    <div
      className={`flex items-center group px-2  
      border rounded-md bg-transparent relative ${className} ${
        focus ? `${focusStyle}` : `border-black border-opacity-20 ${className}`
      }`}
    >
      <span
        className={`${focus ? 'opacity-0' : 'opacity-100'} absolute left-2 transition-all duration-100 ease-linear`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[20px] h-[20px] fill-gray4 ${iconStyle}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3591 12.6255C10.2212 13.5101 8.79141 14.0368 7.2386 14.0368C3.52749 14.0368 0.519043 11.0283 0.519043 7.31721C0.519043 3.6061 3.52749 0.597656 7.2386 0.597656C10.9497 0.597656 13.9582 3.6061 13.9582 7.31721C13.9582 8.87003 13.4314 10.2998 12.5469 11.4377L17.0719 15.9627C17.3999 16.2907 17.3999 16.8225 17.0719 17.1505C16.7439 17.4786 16.2121 17.4786 15.8841 17.1505L11.3591 12.6255ZM12.2783 7.31721C12.2783 10.1005 10.0219 12.3569 7.2386 12.3569C4.45527 12.3569 2.19893 10.1005 2.19893 7.31721C2.19893 4.53388 4.45527 2.27755 7.2386 2.27755C10.0219 2.27755 12.2783 4.53388 12.2783 7.31721Z"
            fill="#BDBDBD"
          />
        </svg>
      </span>
      <input
        value={searchKey}
        placeholder={t('search')}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchKey(e.target.value)}
        className={`border-none ml-4 transition-all ease-linear duration-100 focus:ml-0 bg-transparent px-2 
           focus:outline-none focus:border-none w-full focus:ring-0 outline-none text-base font-DMSans font-medium
            ${inputStyle}`}
      />
      <span
        onClick={() => onSearch(searchKey)}
        className={`${focus ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'} 
        transition-all duration-100 ease-linear cursor-pointer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </div>
  );
}
