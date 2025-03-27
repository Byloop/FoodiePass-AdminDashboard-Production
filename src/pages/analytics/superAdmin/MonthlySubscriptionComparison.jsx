import { ChevronSharpIcon } from '../../../assets/globals/icons';
import { StackedBarChart } from '../../../component/atoms/StackedBarChart';

export function MonthlySubscriptionComparison() {
  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4 h-full mt-6"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Subscription Comparison</h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Monthly</small>
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
      <div className="flex items-center mt-6 justify-center h-full">
        <div className="w-full flex justify-center max-h-[450px]">
          <StackedBarChart
            labels={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]}
            currentDataset={{
              label: 'Current Month',
              data: [100, 60, 130, 70, 90, 110, 150, 120, 240, 356, 423, 560],
              backgroundColor: '#004D9B',
            }}
            previousDataset={{
              label: 'Previous Month',
              data: [100, 60, 110, 75, 85, 105, 150, 230, 434, 340, 120, 450],
              backgroundColor: '#004e9b1a',
            }}
          />
        </div>
      </div>
    </div>
  );
}
