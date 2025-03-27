import { useState } from 'react';
import useLanguage, { languages } from '../../hooks/Language';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';

export function LanguageDropdown({ className }) {
  const [open, setOpen] = useState(false);
  const { selectedLanguage, onSetLanguage } = useLanguage();

  return (
    <PopoverRoot
      positioning={{ sameWidth: true }}
      open={open}
      p={0}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <PopoverTrigger asChild>
        <span
          onClick={() => setOpen(!open)}
          className="flex gap-x-2 items-center cursor-pointer"
        >
          <img
            src={selectedLanguage.flagImage}
            className="w-[25px] h-[25px]"
            alt={selectedLanguage.name}
          />
          <span className="font-DMSans font-semibold text-xl">
            {selectedLanguage.name}
          </span>
          <span
            className={`transition-all mt-1 duration-200 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
          >
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex list-none flex-col gap-y-2">
              {languages.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2
                    cursor-pointer items-center gap-x-2 
                  ${selectedLanguage.name === item.name ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSetLanguage(item)}
                  >
                    <img
                      src={item.flagImage}
                      alt={item.name}
                      className="w-[25px] h-[25px]"
                    />
                    <p className="font-DMSans font-normal">{item.name}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
