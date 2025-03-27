import { useRef } from 'react';
import { ChevronSharpIcon } from '../../assets/globals/icons';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function YearlyRevenueComparison() {
  const chartRef = useRef();

  const data = {
    labels: ['2023', '2024', '2025'],
    datasets: [
      {
        label: 'Revenue',
        data: [50000, 65000, 70000], // Yearly revenue
        fill: true,
        borderColor: '#004D9B',
        backgroundColor: (context) => {
          const { chart } = context;
          if (!chart.chartArea) return '#004D9B';

          const { ctx, chartArea } = chart;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0.43, 'rgba(0, 77, 155, 0.1)');
          gradient.addColorStop(0.97, 'rgba(0, 77, 155, 0)');
          return gradient;
        },
        tension: 0.4, // Smooth curve
        pointRadius: 3, // Adjust or remove points
        pointBackgroundColor: '#fff',
      },
    ],
  };

  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Revenue Comparison</h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Yearly</small>
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
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
    filler: {
      propagate: false,
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
        borderDash: [5, 5], // Dashed grid lines
        color: 'rgba(0,0,0,0.1)', // Custom grid color
        lineWidth: 1.2,
        tickLength: 10,
      },
    },
    y: {
      border: {
        display: true,
        width: 0,
        dash: [4, 4],
        color: '#ececec',
      },
      grid: {
        borderDash: [5, 5], // Dashed grid lines
        color: 'rgba(0,0,0,0.1)', // Custom grid color
        lineWidth: 1.2,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 12,
      },
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`, // Format Y-axis as currency
      },
    },
  },
};
