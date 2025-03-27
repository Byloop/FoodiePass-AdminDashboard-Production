import { useEffect, useState } from 'react';
import { times } from '../../constants';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';

const convertTo24Hour = (time, meridian) => {
  let [hours, minutes] = time.split(':').map(Number);

  if (meridian === 'PM' && hours !== 12) {
    hours += 12; // Convert PM hours (except 12 PM)
  } else if (meridian === 'AM' && hours === 12) {
    hours = 0; // Convert 12 AM to 00
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const convertTo12Hour = (time) => {
  let [hours, minutes] = time.split(':').map(Number);
  let meridian = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert 0 to 12 AM, 13 to 1 PM

  return {
    time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    meridian: meridian,
  };
};

function TimeInput({
  title,
  selectedTime,
  onSelectTime,
  containerStyle,
  buttonStyle,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [time, setTime] = useState({ time: '', meridian: 'AM' });

  const timeChangeHandler = (selectedTime) => {
    const timeIn24HoursFormat = convertTo24Hour(selectedTime, time.meridian);
    onSelectTime(timeIn24HoursFormat);
  };

  useEffect(() => {
    if (selectedTime && selectedTime !== '') {
      setTime(convertTo12Hour(selectedTime));
    }
  }, [selectedTime]);

  const meridianChangeHandler = (selectedMeridian) => {
    const timeIn24HoursFormat = convertTo24Hour(time.time, selectedMeridian);
    onSelectTime(timeIn24HoursFormat);
  };

  return (
    <PopoverRoot positioning={{ sameWidth: true }}>
      <PopoverTrigger className={`${containerStyle}`}>
        <p className="font-DMSans text-left font-medium">{title}</p>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={`${
            time.time !== ''
              ? 'border-blue text-blue'
              : 'text-gray-600 border-black border-opacity-20'
          }
          border rounded-md 
        font-base py-2 w-[200px] ${buttonStyle}`}
        >
          {time.time !== '' ? `${time.time} ${time.meridian}` : title}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto h-[160px] overflow-hidden bg-white">
        <PopoverBody className="py-0 relative px-0 bg-white">
          <div className="flex overflow-y-auto hide-scrollbar h-[160px] relative flex-col gap-y-2 py-4">
            {times.map((item) => (
              <span
                onClick={() => timeChangeHandler(item)}
                key={item}
                className={`text-center text-base cursor-pointer block
        ${time.time === item ? 'text-blue' : 'text-black'}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="absolute flex flex-col gap-y-2 top-[40%] right-[20px]">
            <span
              onClick={() => meridianChangeHandler('AM')}
              className={`font-DMSans ${time.meridian === 'AM' ? 'text-blue' : 'text-black'} cursor-pointer text-base`}
            >
              AM
            </span>
            <span
              onClick={() => meridianChangeHandler('PM')}
              className={`font-DMSans ${time.meridian === 'PM' ? 'text-blue' : 'text-black'} cursor-pointer text-base`}
            >
              PM
            </span>
          </div>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}

export default TimeInput;
