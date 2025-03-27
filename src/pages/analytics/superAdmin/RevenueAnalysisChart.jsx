import { TimeRangeDropdown } from '../../main/TimeRangeDropdown';
import { SegmentedPieChart } from '../../../component/atoms/SegmentedPieChart';

export function RevenueAnalysisChart() {
  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Revenue Analysis</h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="w-[60%] lg:w-full h-[280px] relative">
          <SegmentedPieChart
            segmentData={[50000, 20000, 10000]}
            labels={['Restaurant', 'Foodie Pass', 'Tax']}
            backgroundColors={['#0E5FD9', '#FFCA40', '#F2740C']}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <h5 className="text-[#1E265E] font-semibold">50K</h5>
            <p
              className="text-[#1E265E] text-base font-DMSans 
            font-medium"
            >
              Total
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b border-black border-opacity-10 pb-1 items-center justify-between">
          <span className="flex items-center gap-x-1">
            <span className="w-[10px] h-[10px] bg-[#0E5FD9] rounded-full mt-[1px]" />
            <small>Restaurant</small>
          </span>
          <h6 className="font-medium">89%</h6>
        </div>
        <div
          className="flex mt-[10px] border-b border-black 
        border-opacity-10 pb-1 items-center justify-between"
        >
          <span className="flex items-center gap-x-1">
            <span className="w-[10px] h-[10px] bg-[#FFCA40] rounded-full mt-[1px]" />
            <small>Foodie Pass</small>
          </span>
          <h6 className="font-medium">33%</h6>
        </div>
        <div className="flex mt-[10px] pb-1 items-center justify-between">
          <span className="flex items-center gap-x-1">
            <span className="w-[10px] h-[10px] bg-[#F2740C] rounded-full mt-[1px]" />
            <small>Tax</small>
          </span>
          <h6 className="font-medium">5%</h6>
        </div>
      </div>
    </div>
  );
}
