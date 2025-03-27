import { LanguageDropdown } from '../atoms/LanguageDropdown';
import UploadImage from '../../assets/globals/profile-image-placeholder.png';
import { Link } from 'react-router-dom';
import { SearchInput } from '../atoms/SearchInput';

export function Header() {
  return (
    <div className="flex items-center justify-between px-12 h-[100px] bg-white border-b-2 border-gray1 z-50">
      <div className="max-w-[320px] flex-1">
        <SearchInput
          className="!border-none !bg-black !bg-opacity-5 !py-[8px]"
          onSearch={(searchKey) => console.log('search key', searchKey)}
          iconStyle="!w-[16px] !h-[16px]"
        />
      </div>
      <div className="flex gap-x-12 items-center">
        <LanguageDropdown />
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={36}
            height={36}
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </span>
        <Link to="/profile">
          <div className="w-[50px] h-[50px] bg-blue bg-opacity-10 rounded-full">
            <img src={UploadImage} alt="" className="w-full h-full" />
          </div>
        </Link>
      </div>
    </div>
  );
}
