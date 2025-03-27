import { Line } from 'react-chartjs-2';
import { TimeRangeDropdown } from './TimeRangeDropdown';
import { useState, useMemo } from 'react';
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
import { useTranslation } from 'react-i18next';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function RevenueChart() {
  const [selectedRange, setSelectedRange] = useState({
    id: 1,
    key: 'daily',
    name: 'Daily',
  });
  const { t } = useTranslation();

  const data = useMemo(
    () => ({
      labels: [
        t('months.short.jan'),
        t('months.short.feb'),
        t('months.short.mar'),
        t('months.short.apr'),
        t('months.short.may'),
        t('months.short.jun'),
        t('months.short.jul'),
        t('months.short.aug'),
        t('months.short.sep'),
        t('months.short.oct'),
        t('months.short.nov'),
        t('months.short.dec'),
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
    <div className="w-full border border-black border-opacity-10 bg-white rounded-3xl px-4 2xl:px-6 py-4">
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">{t('home.totalRevenue')}</h5>

        <TimeRangeDropdown
          selectedRange={selectedRange}
          onSelectRange={setSelectedRange}
        />
      </div>
      <div className="flex items-center mt-6 justify-center h-full">
        <div className="w-full 2xl:w-full 2xl:h-full">
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
