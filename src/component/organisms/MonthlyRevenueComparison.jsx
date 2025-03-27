import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { ChevronSharpIcon } from '../../assets/globals/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function MonthlyRevenueComparison({ showStats }) {
  const data = useMemo(
    () => ({
      labels: [
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
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 30, 20, 40, 60, 90, 100, 120, 110, 105, 200, 140], // y-axis data for first line
          borderColor: '#004D9B', // Blue line color
          backgroundColor: 'transparent',
          tension: 0.4, // Curved line
          pointHoverRadius: 0,
          pointRadius: 0,
          borderCapStyle: 'round', // Rounded line ends
          borderJoinStyle: 'round', // Rounded corners where lines meet
          borderWidth: 5, // Thicker line
        },
        {
          label: 'Dataset 2',
          data: [15, 20, 28, 32, 45, 34, 56, 70, 68, 55, 45, 70], // y-axis data for second line
          borderColor: '#FFCA40', // Yellow line color
          backgroundColor: 'transparent',
          tension: 0.4,
          pointHoverRadius: 0,
          pointRadius: 0,
          borderCapStyle: 'round', // Rounded line ends
          borderJoinStyle: 'round', // Rounded corners where lines meet
          borderWidth: 5,
        },
      ],
    }),
    []
  );

  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-4 2xl:px-6 py-4 mt-6"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Revenue Comparison</h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Monthly</small>
        </div>
      </div>
      {showStats && (
        <div className="flex flex-row items-center mt-2  justify-between">
          <div className="flex items-center py-1 bg-yellow px-4">
            <small>Current Month $25000</small>
            <span className="flex gap-x-[1px] ml-[10px] items-center">
              <ChevronSharpIcon className="fill-blue w-[12px] h-[12px]" />
              <p className="font-DMSans text-base text-blue">15%+</p>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <span className="w-[10px]  h-[10px] rounded-full bg-blue block" />
              <small>Current Month</small>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="w-[10px]  h-[10px] rounded-full bg-yellow block" />
              <small>Previous Month</small>
            </div>
          </div>
          <small className="text-blue">Average Spend Per Customer - $143</small>
        </div>
      )}

      {/* Tablet View  */}
      <div
        className={`${showStats ? 'flex lg:hidden' : 'flex'} mt-3 justify-center items-center gap-x-4`}
      >
        <div className="flex items-center gap-x-2">
          <span className="w-[10px]  h-[10px] rounded-full bg-blue block" />
          <small>Current Month</small>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="w-[10px]  h-[10px] rounded-full bg-yellow block" />
          <small>Previous Month</small>
        </div>
      </div>
      {/* Table View end */}
      <div className="flex items-center mt-6 justify-center">
        <div className="w-full flex justify-center  2xl:w-full max-h-[450px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

const options = {
  responsive: true,
  layout: {
    padding: 8,
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      border: {
        display: true,
        width: 0,
        dash: [4, 4],
        color: '#ececec',
      },
      grid: {
        display: true,
        color: '#ececec', // Custom grid color for X-axis
        lineWidth: 1.2,
        tickLength: 10,
      },
      ticks: {
        font: {
          size: 12,
          family: 'DM Sans',
        },
        color: '#808080',
        padding: -1,
      },
    },
    y: {
      beginAtZero: false,
      border: {
        display: true,
        width: 0,
        dash: [4, 4],
        color: '#ececec',
      },
      grid: {
        display: true, // Show horizontal gridlines
        color: '#ececec', // Custom grid color for X-axis
        lineWidth: 1.2,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 12,
      },
      ticks: {
        font: {
          family: 'DM Sans',
          size: 14,
        },
        color: '#000',
        padding: 0,
        stepSize: 20,
      },
      position: 'right',
    },
  },
};
