import { useState } from 'react';
import { SelectDateDropdown } from './SelectDateDropdown';
import { employeeDayWiseShifting } from '../../assets/globals/data/Staff';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

function GlobalShifting() {
  const { t } = useTranslation();
  const [dates, setDates] = useState([
    { date: '20/11/2024', day: 'mon' },
    { date: '21/11/2024', day: 'tue' },
    { date: '22/11/2024', day: 'wed' },
    { date: '23/11/2024', day: 'thu' },
    { date: '24/11/2024', day: 'fri' },
    { date: '25/11/2024', day: 'sat' },
    { date: '26/11/2024', day: 'sun' },
  ]);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full mt-6 bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <h6 className="font-semibold">
          {`${dates[0].date} - ${dates[6].date}`}
        </h6>
        <SelectDateDropdown />
      </div>
      <div className="mt-6 overflow-x-auto">
        <div className="flex items-stretch">
          <div
            className="flex flex-1 relative items-center 
               time-strip pr-10"
          >
            <div className="w-[120px]  px-2 min-h-[50px] flex items-center text-black">
              {t('staffManagement.employeeName')}
            </div>
            {dates.map((item) => {
              return (
                <div
                  key={item.date}
                  className="w-[120px] flex items-center justify-center
               relative"
                >
                  <Button
                    color={
                      selectedDate?.date === item.date ? 'blue' : 'transparent'
                    }
                    onSubmit={() => setSelectedDate(item)}
                    size="small"
                    text={t(`days.short.${item.day}`)}
                    className="w-[80px]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-y-4">
          {employeeDayWiseShifting.map((employee) => {
            return (
              <div key={employee.label} className="flex items-center">
                <div className="w-[120px] h-[50px] flex items-center">
                  <p className="text-base px-1 w-[100px] font-DMSans">
                    {employee.label}
                  </p>
                </div>
                {dates.map((item, index) => {
                  const shifts = employee.shifts.filter(
                    (shift) => shift.date === selectedDate?.date
                  );

                  return (
                    <div key={index} className="w-[120px] h-[50px] relative">
                      <div
                        className={`h-full w-full bg-lightBlue 
                      border-r-2 absolute border-blue`}
                      />
                      {shifts?.[index] && (
                        <div
                          style={{ backgroundColor: shifts[index].colorCode }}
                          className="rounded-full py-2 mx-2 mt-1 justify-center flex items-center"
                        >
                          <small className="text-center">
                            {shifts[index].area}
                          </small>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GlobalShifting;
