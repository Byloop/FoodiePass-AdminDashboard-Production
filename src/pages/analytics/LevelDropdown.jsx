import { useState } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { Levels } from '../../assets/globals/data/levelData';

export function LevelDropdown({ selectedLevel, onSelectLevel }) {
  const [open, setOpen] = useState(false);

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
          {`${selectedLevel && selectedLevel?.name ? selectedLevel.name : 'Level'}`}
          <ChevronDownIcon
            className={`w-[10px] mt-1 h-[10px] fill-blue trasition-all duration-200 ease-in-out 
                    ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto max-w-[200px] bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex list-none flex-col gap-y-2">
              {Levels.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2
                    cursor-pointer items-center gap-x-2 
                  ${selectedLevel?.name === item.name ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSelectLevel(item)}
                  >
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
