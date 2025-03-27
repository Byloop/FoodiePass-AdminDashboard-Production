import { TimeRangeDropdown } from '../main/TimeRangeDropdown';
import { ChevronSharpIcon } from '../../assets/globals/icons';
import { SegmentedPieChart } from '../../component/atoms/SegmentedPieChart';

export function SpecialOfferPerformance() {
  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-6 py-4 h-full max-h-[460px]"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Special Offers Performance</h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="w-[60%] lg:w-full h-[280px] relative">
          <SegmentedPieChart
            segmentData={[5000, 2000, 1000, 3000]}
            labels={['3X1', '2X1', 'Extra Points', 'Bonus Plate']}
            backgroundColors={['#0E5FD9', '#FFCA40', '#F2740C', '#82B941']}
          />
        </div>
      </div>
      <div className="flex items-center mt-2 justify-between gap-x-[10%]">
        <div className="w-[45%] flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="w-[10px] h-[10px] mt-[1%] bg-[#0E5FD9] rounded-full block" />
            <p className="font-DMSans font-semibold text-base">3X1</p>
          </div>
          <small className="flex gap-x-2">
            5000
            <span className="flex items-center">
              <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
              <p className="font-DMSans text-base text-green">15%+</p>
            </span>
          </small>
        </div>
        <div className="w-[45%] flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="w-[10px] h-[10px] mt-[1%] bg-[#FFCA40] rounded-full block" />
            <p className="font-DMSans font-semibold text-base">2X1</p>
          </div>
          <small className="flex gap-x-2">
            2000
            <span className="flex items-center">
              <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
              <p className="font-DMSans text-base text-green">15%+</p>
            </span>
          </small>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-[10%]">
        <div className="w-[45%] gap-x-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="w-[10px] h-[10px] mt-[1%] bg-[#F2740C] rounded-full block" />
            <p className="font-DMSans font-semibold text-base">Extra Points</p>
          </div>
          <small className="flex gap-x-2">
            1000
            <span className="flex items-center">
              <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
              <p className="font-DMSans text-base text-green">15%+</p>
            </span>
          </small>
        </div>
        <div className="w-[45%] gap-x-4 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="w-[10px] h-[10px] mt-[1%] bg-[#82B941] rounded-full block" />
            <p className="font-DMSans font-semibold text-base">Bonus Plate</p>
          </div>
          <small className="flex gap-x-2">
            3000
            <span className="flex items-center">
              <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
              <p className="font-DMSans text-base text-green">15%+</p>
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}
