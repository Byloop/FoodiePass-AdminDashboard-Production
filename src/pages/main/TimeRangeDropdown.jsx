import { useState } from 'react';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';

const options = [
  { id: 1, key: 'daily', value: 'Daily' },
  { id: 2, key: 'weekly', value: 'Weekly' },
  { id: 3, key: 'monthly', value: 'Monthly' },
  { id: 4, key: 'yearly', value: 'Yearly' },
];

export function TimeRangeDropdown({ selectedRange, onSelectRange }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <PopoverRoot
      positioning={{ sameWidth: true }}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <PopoverTrigger asChild>
        <span
          className="bg-blue cursor-pointer w-[105px] bg-opacity-10 rounded-full flex items-center justify-center 
      gap-x-[6px] px-3 py-2"
        >
          <p className="text-blue font-semibold font-DMSans text-[12px] xl:text-sm">
            {t(selectedRange ? selectedRange.key : options[0].key)}
          </p>
          <ChevronDownIcon
            className={`${open ? 'rotate-180' : 'rotate-0'} transition-all duration-150 ease-linear fill-blue w-[13px] h-[12px] `}
          />
        </span>
      </PopoverTrigger>
      <PopoverContent width="auto" className="bg-white rounded-md">
        <PopoverBody className="bg-white rounded-md">
          <ul className="list-none flex flex-col gap-y-2">
            {options.map((item) => (
              <li
                key={item.id}
                className={`${
                  selectedRange?.id === item.id || options[0].id === item.id
                    ? 'bg-blue text-white'
                    : 'hover:text-blue'
                }  rounded-sm py-[3px] 
              font-DMSans text-[12px] xl:text-sm cursor-pointer 
              text-center font-medium`}
              >
                <span onClick={() => onSelectRange(item)}>{t(item.key)}</span>
              </li>
            ))}
          </ul>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
