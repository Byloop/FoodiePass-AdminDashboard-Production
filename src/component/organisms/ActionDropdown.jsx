import { useState } from 'react';
import {
  OptionsIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon,
} from '../../assets/globals/icons';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';

function ActionDropdown({ onEdit, onView, onDelete, showOptions = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-center"
        >
          <OptionsIcon className="w-[18px] h-[18px] fill-black" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[110px] z-10 p-0 bg-white rounded-md">
        <PopoverBody className="p-2 bg-white rounded-md">
          <div className="flex-col items-center px-2 flex gap-y-1">
            {showOptions.includes('view') && (
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  onView();
                }}
                className="w-[100px] py-1 hover:bg-lightBlue flex 
            justify-center rounded-sm items-center gap-x-1 text-sm text-blue"
              >
                <ViewIcon className="w-[15px] h-[15px] fill-blue" />
                {t('view')}
              </button>
            )}
            {showOptions.includes('edit') && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onEdit();
                }}
                className="
            w-[100px] py-1 hover:bg-lightBlue flex 
            justify-center rounded-sm items-center gap-x-1 text-sm text-blue"
              >
                <EditIcon className="w-[13px] h-[13px] fill-blue" />
                {t('edit')}
              </button>
            )}

            {showOptions.includes('delete') && (
              <button
                onClick={() => {
                  onDelete();
                  setIsOpen(false);
                }}
                className="
             w-[100px] py-1 hover:bg-lightBlue flex 
            justify-center rounded-sm items-center gap-x-1 text-sm text-blue"
              >
                <DeleteIcon className="w-[13px] h-[13px] fill-blue" />
                {t('delete')}
              </button>
            )}
          </div>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}

export default ActionDropdown;
