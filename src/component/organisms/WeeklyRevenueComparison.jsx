import { ChevronSharpIcon } from '../../assets/globals/icons';
import { WeeklyComparisonBarChart } from '../atoms/WeeklyComparisonBarChart';

export function WeeklyRevenueComparison() {
  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Revenue Comparison</h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Weekly</small>
        </div>
      </div>
      <div className="flex w-auto items-center mt-2 gap-x-2">
        <div className="flex items-center bg-yellow px-4 py-1">
          <small>Current Month $25000</small>
          <span className="flex gap-x-[1px] ml-[10px] items-center">
            <ChevronSharpIcon className="fill-blue w-[12px] h-[12px]" />
            <p className="font-DMSans text-base text-blue">15%+</p>
          </span>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="w-full h-[350px]">
          <WeeklyComparisonBarChart
            currentWeekData={[50, 80, 60, 70, 120, 90, 75]}
            previousWeekData={[65, 60, 75, 90, 100, 85, 95]}
          />
        </div>
      </div>
    </div>
  );
}
