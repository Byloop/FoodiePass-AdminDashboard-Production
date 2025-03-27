import { useState } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

const ratings = [
  { id: 1, key: '1' },
  { id: 2, key: '2' },
  { id: 3, key: '3' },
  { id: 4, key: '4' },
  { id: 5, key: '5' },
];

function RatingDropdown({ selectedItem, onSelectItem }) {
  const [open, setOpen] = useState();
  const { t } = useTranslation();

  return (
    <PopoverRoot
      positioning={{ sameWidth: true }}
      open={open}
      p={0}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <PopoverTrigger>
        <button
          onClick={() => setOpen(!open)}
          className="border-blue border flex items-center gap-x-2 bg-lightBlue rounded-full px-4 py-2"
        >
          {`${
            selectedItem && selectedItem?.key
              ? selectedItem.key
              : t('reviewsManagement.rating')
          }`}
          <ChevronDownIcon
            className={`w-[10px] mt-1 h-[10px] fill-blue trasition-all duration-200 ease-in-out 
                    ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex items-center list-none flex-col gap-y-2">
              {ratings.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2 
                    cursor-pointer gap-x-2 
                  ${selectedItem?.key === item.key ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSelectItem(item)}
                  >
                    <p className="font-DMSans font-normal">{item.key}</p>
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

export default RatingDropdown;
