import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';

function DateInput({ title, containerStyle, buttonStyle }) {
  const { i18n } = useTranslation();

  return (
    <PopoverRoot>
      <PopoverTrigger className={`${containerStyle}`}>
        <div className={`relative`}>
          <p className="font-DMSans text-left font-medium">{title}</p>
          <button
            className={`${'text-gray-600 border-gray-300'}
          border rounded-md 
        font-base py-2 w-[200px] ${buttonStyle}`}
          >
            {title}
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-white !rounded-[10px]">
        <PopoverBody className="!p-[2px] bg-white !rounded-[10px]">
          <Calendar locale={i18n.language} titleClassName="text-blue" />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}

export default DateInput;
