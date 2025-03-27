import { useMemo } from 'react';
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

export function WeeklySignupComparison() {
  const data = useMemo(
    () => ({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [150, 300, 230, 400, 350, 240, 100], // y-axis data for first line
          borderColor: '#004D9B', // Blue line color
          backgroundColor: 'transparent',
          tension: 0, // Curved line
          pointHoverRadius: 0,
          pointRadius: 0,
          borderWidth: 5, // Thicker line
        },
        {
          label: 'Dataset 2',
          data: [240, 230, 140, 50, 90, 340, 560], // y-axis data for second line
          borderColor: '#FFCA40', // Yellow line color
          backgroundColor: 'transparent',
          tension: 0,
          pointHoverRadius: 0,
          pointRadius: 0,
          borderWidth: 5,
        },
      ],
    }),
    []
  );
  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Sign-ups</h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Weekly</small>
        </div>
      </div>
      <div className="mt-2 flex w-auto">
        <div className="flex items-center py-1 bg-yellow px-4">
          <small>Current Week $25000</small>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="w-full 2xl:w-full">
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
        stepSize: 100, // Defines the interval between ticks
        callback: function (value) {
          return value.toLocaleString(); // Format numbers (e.g., 1,000 instead of 1000)
        },
        font: {
          family: 'DM Sans',
          size: 14,
        },
        color: '#000',
        padding: 0,
      },
      position: 'right',
      min: 0,
      max: 1500,
    },
  },
};
