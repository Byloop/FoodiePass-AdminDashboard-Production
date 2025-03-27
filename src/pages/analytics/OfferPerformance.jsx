import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TimeRangeDropdown } from '../main/TimeRangeDropdown';
import { ChevronSharpIcon } from '../../assets/globals/icons';

ChartJS.register(ArcElement, Tooltip, Legend);

export function OfferPerformance() {
  const data = useMemo(
    () => ({
      labels: ['Segment 1', 'Segment 2'],
      datasets: [
        {
          data: [70, 30], // Adjust percentage
          backgroundColor: ['#0B4F8A', '#FBC02D'],
          hoverBackgroundColor: ['#0B4F8A', '#FBC02D'],
          borderWidth: 5,
          hoverBorderWidth: 5,
          hoverBorderColor: 'white',
        },
      ],
    }),
    []
  );
  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-6 py-4 h-full max-h-[460px]"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Offers Performance</h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex items-center justify-between mt-2">
        <h6>Total Orders</h6>
        <div className="flex items-center gap-x-2">
          <small>7000</small>
          <span className="flex items-center">
            <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
            <p className="font-DMSans text-base text-green">15%+</p>
          </span>
        </div>
      </div>
      <div className="flex items-center mt-3 xl:mt-0 justify-center">
        <div className="w-[60%] lg:w-full h-[260px] relative">
          <Pie data={data} options={options} />
          <div className="absolute top-0 lg:top-6 -left-[1%] w-[50px] xlg:w-[60px]">
            <h5 className="font-semibold lg:text-lg xl:text-xl leading-5 xlg:leading-7">
              60%
            </h5>
            <small className="font-semibold text-sm xlg:text-base 2xl:text-lg">
              Special Offers
            </small>
          </div>
          <div
            className="absolute bottom-4 xl:bottom-8 xlg:bottom-10 -right-[2%] 
          2xl:right-[2%]"
          >
            <h5 className="font-semibold lg:text-lg xl:text-xl leading-5 xlg:leading-7">
              20%
            </h5>
            <small className="font-semibold text-sm xlg:text-base 2xl:text-lg">
              Discount
            </small>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2 justify-between">
        <div className="flex items-center gap-x-2">
          <span className="w-[10px] h-[10px] mt-[1%] bg-blue rounded-full block" />
          <p className="font-DMSans font-semibold text-base">Discount</p>
        </div>
        <small>2000</small>
      </div>
      <div className="flex items-center mt-1 justify-between">
        <div className="flex items-center gap-x-2">
          <span className="w-[10px] h-[10px] mt-[1%] bg-yellow rounded-full block" />
          <p className="font-DMSans  font-semibold text-base">Special Offers</p>
        </div>
        <small>5000</small>
      </div>
    </div>
  );
}

const options = {
  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};
