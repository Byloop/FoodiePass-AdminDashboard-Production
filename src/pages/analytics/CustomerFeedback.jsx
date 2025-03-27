import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TimeRangeDropdown } from '../main/TimeRangeDropdown';
import { useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function CustomerFeedback() {
  const data = useMemo(
    () => ({
      labels: ['High Rating', 'Average Rating', 'Low Rating'],
      datasets: [
        {
          data: [700, 500, 30],
          backgroundColor: ['#0E5FD9', '#FEBD30', '#F2740C'],
          hoverBackgroundColor: ['#3A5AFE', '#E9EDF0'],
          hoverBorderWidth: 0, // Blue and Light Blue
          borderWidth: 0, // Remove default borders
          borderRadius: [10, 0], // Fully rounded segments
          cutout: '78%',
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
        <h5 className="text-blue font-semibold">Customer Feedback</h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="w-[60%] lg:w-full h-[240px] relative">
          <Doughnut options={options} data={data} />
        </div>
      </div>
      <div className="flex mt-2 items-center justify-between">
        <span className="flex items-center gap-x-1">
          <span className="w-[10px] h-[10px] bg-[#0E5FD9] rounded-full mt-[1px]" />
          <small>{`High Rating (5)`}</small>
        </span>
        <h6 className="font-medium">300</h6>
      </div>
      <div className="flex mt-1 items-center justify-between">
        <span className="flex items-center gap-x-1">
          <span className="w-[10px] h-[10px] bg-[#FEBD30] rounded-full mt-[1px]" />
          <small>{`Average Rating (3)`}</small>
        </span>
        <h6 className="font-medium">300</h6>
      </div>
      <div className="flex mt-1 items-center justify-between">
        <span className="flex items-center gap-x-1">
          <span className="w-[10px] h-[10px] bg-[#F2740C] rounded-full mt-[1px]" />
          <small>{`Low Rating (2)`}</small>
        </span>
        <h6 className="font-medium">300</h6>
      </div>
    </div>
  );
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -90, // Start from top
  circumference: 360, // Show only half circle
  plugins: {
    legend: {
      display: false,
    },
  },
};
