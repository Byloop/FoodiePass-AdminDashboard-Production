import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export function SegmentedPieChart({ labels, segmentData, backgroundColors }) {
  const data = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          data: segmentData, // Revenue breakdown
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
          hoverBorderWidth: 0,
          borderRadius: 10,
          borderWidth: 0,
          offset: 20, // Creates gaps between sections
          cutout: '60%', // Makes it a doughnut
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
  plugins: {
    legend: {
      display: false,
    },
  },
};
