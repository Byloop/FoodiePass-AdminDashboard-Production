import { useMemo, useState } from 'react';
import { daysOfWeek } from '../../constants';
import { Switch } from '../../component/atoms/Switch';
import { Button } from '../../component/atoms/Button';
import 'react-clock/dist/Clock.css';
import TimeInput from './TimeInput';
import { timeSections } from '../../assets/globals/data/Staff';
import { useTranslation } from 'react-i18next';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const convertTimeToValue = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours + minutes / 60; // Convert to decimal (e.g., 21:30 → 21.5)
};

const convertValueToTime = (value) => {
  let hours = Math.floor(value);
  let minutes = (value % 1) * 60;

  return `${String(hours).padStart(2, '0')}:${minutes === 0 ? '00' : '30'}`;
};

function AvailabilitySettings() {
  const [isResizing, setIsResizing] = useState(false);
  const [availability, setAvailability] = useState({
    day: null,
    startTime: null,
    endTime: null,
    allDayClose: false,
  });
  const { t } = useTranslation();

  const days = useMemo(() => {
    const dates = [];
    const currentDate = new Date();
    for (let i = 0; i < 7; ++i) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);

      dates.push({ day: daysOfWeek[nextDate.getDay()], date: nextDate });
    }
    return dates;
  }, []);

  const timeRange = useMemo(() => {
    if (availability.startTime && availability.endTime) {
      const startTime = convertTimeToValue(availability.startTime);
      const endTime = convertTimeToValue(availability.endTime);

      return [startTime, endTime];
    }
    return [];
  }, [availability.endTime, availability.startTime]);

  const handleDayClick = (day) => {
    setAvailability({
      ...availability,
      day: day,
    });
  };

  const onSelectRange = (selectedRange) => {
    const startTime = convertValueToTime(selectedRange[0]);
    const endTime = convertValueToTime(selectedRange[1]);

    setAvailability({
      ...availability,
      startTime: startTime,
      endTime: endTime,
    });
  };

  return (
    <div className="pt-6 px-4 xlg:px-6">
      <div className="bg-white mt-6 rounded-md px-6 py-10">
        <div className="flex items-center justify-between">
          {days.map((day) => (
            <button
              key={day.day}
              onClick={() => handleDayClick(day)}
              className={`${availability.day === day ? 'bg-blue text-white' : 'bg-transparent text-blue'} 
            px-3 lg:px-4 rounded-full text-[14px] lg:text-base xl:text-lg 
            py-[6px] lg:py-2 font-DMSans font-medium border border-blue transition-all 
            duration-100 ease-in-out min-w-[80px]`}
            >
              {t(`days.short.${day.day.toLowerCase()}`)}
            </button>
          ))}
        </div>
        <div className="flex items-end justify-end gap-x-3 mt-10">
          <p className="font-base">
            {t('availabilityManagement.adjustIndicatorWidth')}
          </p>
          <Switch
            isActive={isResizing}
            onToggle={(isActive) => setIsResizing(isActive)}
          />
        </div>
        <div
          className="flex mt-4 relative items-center justify-between 
        time-strip"
        >
          {timeSections.map((time, index) => {
            const isLastElement = index === timeSections.length - 1;
            if (!isLastElement) {
              return (
                <div key={time.value} className="w-[12.5%] relative h-[50px]">
                  <div
                    className={`h-[50px] w-full bg-lightBlue 
                        ${!isLastElement && index !== 0 && 'border-l-2 border-blue'}`}
                  />
                  <p className="font-base absolute -left-3">{time.label}</p>
                </div>
              );
            }
            return (
              <p className="absolute right-0 -bottom-[25px]" key={time}>
                12PM
              </p>
            );
          })}
          <RangeSlider
            min={0}
            max={24}
            className="absolute"
            step={0.5}
            value={timeRange}
            onInput={(e) => onSelectRange(e)}
          />
        </div>
        <div className="flex items-center gap-x-3 mt-10">
          <p>{t('availabilityManagement.closeForAllDay')}</p>
          <Switch
            isActive={availability.allDayClose}
            onToggle={(isActive) =>
              setAvailability({
                ...availability,
                allDayClose: isActive,
              })
            }
          />
        </div>
        <div className="flex mt-6 items-center gap-x-12">
          <TimeInput
            title={t('startTime')}
            selectedTime={availability.startTime}
            onSelectTime={(newTime) =>
              setAvailability({
                ...availability,
                startTime: newTime,
              })
            }
          />
          <TimeInput
            title={t('endTime')}
            selectedTime={availability.endTime}
            onSelectTime={(newTime) =>
              setAvailability({
                ...availability,
                endTime: newTime,
              })
            }
          />
        </div>

        <div className="flex items-center mt-10 justify-center">
          <Button
            text={t('save')}
            className="px-12 !py-[8px] w-[300px]"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default AvailabilitySettings;
