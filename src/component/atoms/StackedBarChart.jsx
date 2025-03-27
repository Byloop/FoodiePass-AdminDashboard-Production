import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function StackedBarChart({ labels, currentDataset, previousDataset }) {
  const data = useMemo(
    () => ({
      labels: labels, // X-axis labels (days)
      datasets: [
        {
          label: currentDataset.label,
          data: currentDataset.data, // Completed bookings data
          backgroundColor: currentDataset.backgroundColor, // Color for completed bookings (blue)
          borderRadius: 10, // Rounded bars
          barThickness: 15,
        },
        {
          label: previousDataset.label,
          data: previousDataset.data, // Canceled bookings data
          backgroundColor: previousDataset.backgroundColor, // Color for canceled bookings (yellow)
          borderRadius: 10, // Rounded bars
          barThickness: 15,
        },
      ],
    }),
    [
      currentDataset.backgroundColor,
      currentDataset.data,
      currentDataset.label,
      labels,
      previousDataset.backgroundColor,
      previousDataset.data,
      previousDataset.label,
    ]
  );
  console.log(currentDataset);
  return <Bar data={data} options={options} />;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      border: {
        width: 0,
      },
      stacked: true, // Stack bars on x-axis
      grid: {
        display: false, // Remove vertical grid lines
      },
      ticks: {
        font: {
          size: 16,
          family: 'DM Sans',
        },
        color: '#808080',
      },
    },
    y: {
      border: {
        display: true,
        width: 0,
        dash: [4, 4],
        color: '#ececec',
      },
      stacked: true, // Stack bars on y-axis
      grid: {
        display: true,
        color: '#ececec', // Custom grid color for X-axis
        lineWidth: 1.2,
        tickLength: 10,
      },
      ticks: {
        stepSize: 50,
        font: {
          size: 14,
          family: 'DM sans',
        },
        color: '#000',
      },
      beginAtZero: true,
    },
  },
};
