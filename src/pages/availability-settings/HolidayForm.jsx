import { useState } from 'react';
import { Switch } from '../../component/atoms/Switch';
import TimeInput from './TimeInput';
import DateInput from './DateInput';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

function HolidayForm() {
  const [holiday, setHoliday] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    allDayClose: false,
  });
  const { t } = useTranslation();

  return (
    <div className="pt-6 px-4 xlg:px-6">
      <div className="bg-white mt-6 rounded-md px-6 py-10">
        <p>{t('availabilityManagement.holidayPageHeading')}</p>
        <div className="flex mt-6 items-center gap-x-12">
          <DateInput title={t('dateFrom')} />
          <DateInput title={t('dateTo')} />
        </div>
        <div className="flex items-center gap-x-3 mt-6">
          <p>{t('availabilityManagement.closeForAllDay')}</p>
          <Switch
            isActive={holiday.allDayClose}
            onToggle={(isActive) =>
              setHoliday({
                ...holiday,
                allDayClose: isActive,
              })
            }
          />
        </div>
        <div className="flex mt-6 items-center gap-x-12">
          <TimeInput
            title={t('startTime')}
            selectedTime={holiday.startTime}
            onSelectTime={(newTime) =>
              setHoliday({
                ...holiday,
                startTime: newTime,
              })
            }
          />
          <TimeInput
            title={t('endTime')}
            selectedTime={holiday.endTime}
            onSelectTime={(newTime) =>
              setHoliday({
                ...holiday,
                endTime: newTime,
              })
            }
          />
        </div>
        <div className="mt-6">
          <label className="block font-base">
            {t('availabilityManagement.holidayNoteLabel')}
          </label>
          <textarea
            rows="5"
            placeholder={t('writeMessage')}
            className="border rounded-md focus:border-blue focus:outline-none px-1 py-1 w-[500px] border-black border-opacity-30"
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

export default HolidayForm;
