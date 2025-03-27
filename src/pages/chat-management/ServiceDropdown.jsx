import { useState } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon } from '../../assets/globals/icons';

const services = [
  { id: 1, key: 'View All', value: 'view-all' },
  { id: 2, key: 'Take Away', value: 'take-away' },
  { id: 3, key: 'Table Booking', value: 'table-booking' },
];

export function ServiceDropdown({ selectedService, onSelectService }) {
  const [open, setOpen] = useState(false);

  return (
    <PopoverRoot
      positioning={{ placement: 'bottom-end' }}
      open={open}
      p={0}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <PopoverTrigger className="">
        <button
          onClick={() => setOpen(!open)}
          className="border-none bg-yellow text-black 
          flex items-center gap-x-2 rounded-full px-4 py-2"
        >
          {`${selectedService && selectedService?.key ? selectedService.key : 'Status'}`}
          <ChevronDownIcon
            className={`w-[10px] mt-1 h-[10px] fill-black trasition-all duration-200 ease-in-out 
            ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[150px] bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex list-none flex-col gap-y-2">
              {services.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2
                    cursor-pointer items-center gap-x-2 
                  ${selectedService?.key === item.key ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSelectService(item)}
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
