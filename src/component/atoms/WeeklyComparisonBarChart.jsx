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

export function WeeklyComparisonBarChart({
  currentWeekData,
  previousWeekData,
}) {
  const data = useMemo(
    () => ({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Current Month',
          data: currentWeekData, // Current Week Revenue
          backgroundColor: '#004D9B', // Blue Color
          borderRadius: 2, // Rounded bars
          categoryPercentage: 0.7, // Adjust spacing between bars
          barPercentage: 0.8,
        },
        {
          label: 'Previous Month',
          data: previousWeekData, // Previous Week Revenue
          backgroundColor: '#FFCA40', // Yellow Color
          borderRadius: 2, // Rounded bars

          categoryPercentage: 0.7, // Adjust spacing between bars
          barPercentage: 0.8,
        },
      ],
    }),
    []
  );
  return <Bar data={data} options={options} />;
}

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows height control
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          size: 15,
        },
        color: '#333',
        usePointStyle: true,
        pointStyle: 'circle', // Ensures the shape remains a circle
        boxWidth: 6, // Reduces the size of the color box (legend circle)
        boxHeight: 6,
      },
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      color: '#000',
      font: {
        weight: 'bold',
      },
      formatter: (value) => `$${value}`, // Format label
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
      beginAtZero: true,
      grid: {
        borderDash: [5, 5], // Dashed grid lines
        color: 'rgba(0,0,0,0.1)', // Custom grid color
        lineWidth: 1.2,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 12,
      },
      ticks: {
        stepSize: 20, // Adjust vertical space between ticks
      },
    },
  },
};
