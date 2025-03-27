import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function FullRoundedPieChart({ labels, segmentData }) {
  const data = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          data: segmentData,
          backgroundColor: ['#3A5AFE', '#E9EDF0'],
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

  return <Doughnut data={data} options={options} />;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -90, // Start from top
  circumference: 360, // Show only half circle
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
  },
};
