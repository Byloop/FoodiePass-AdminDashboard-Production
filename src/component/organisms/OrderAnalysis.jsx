import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TimeRangeDropdown } from '../../pages/main/TimeRangeDropdown';
import { ChevronSharpIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

// Register the elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export function OrderAnalysis({ totalOrder, completedOrder, cancelledOrder }) {
  const chartRef = useRef();
  const [selectedRange, setSelectedRange] = useState({
    id: 1,
    key: 'Daily',
    name: 'Daily',
  });

  const remainingOrder = useMemo(
    () => totalOrder - (completedOrder + cancelledOrder),
    [totalOrder, completedOrder, cancelledOrder]
  );
  const { t } = useTranslation();

  chartData.datasets[0].data = [completedOrder, cancelledOrder, remainingOrder];
  chartData.datasets[0].applyCustomStyle = true;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = chartRef.current;
      const ctx = chartInstance.ctx;
      const chartArea = chartInstance.chartArea;

      // Create gradient for 'Completed' section
      const gradientCompleted = ctx.createLinearGradient(
        chartArea.top,
        0,
        0,
        400
      );

      gradientCompleted.addColorStop(0, '#004D9B');
      gradientCompleted.addColorStop(0.4, '#1484F4');
      gradientCompleted.addColorStop(0.8, '#004D9B');
      // Create gradient for 'Cancelled' section
      const gradientCancelled = ctx.createLinearGradient(
        chartArea.top,
        0,
        chartArea.bottom,
        400
      );
      gradientCancelled.addColorStop(0, '#FFCA40');
      gradientCancelled.addColorStop(0.3, '#FFCA40');
      gradientCancelled.addColorStop(0.6, '#FFD572');
      gradientCancelled.addColorStop(1, '#FFD572');

      // Update chart colors with gradients
      chartInstance.data.datasets[0].backgroundColor = [
        gradientCompleted, // Completed gradient
        gradientCancelled, // Cancelled gradient
        '#004d9b1a', // Grey for remaining
      ];

      chartInstance.update();
    }

    ChartJS.register(outerThicknessPlugin);
  }, []);

  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-6 py-4 h-full max-h-[460px]"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Order Analysis</h5>

        <TimeRangeDropdown
          selectedRange={selectedRange}
          onSelectRange={setSelectedRange}
        />
      </div>
      <span className="flex items-center">
        <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
        <p className="font-DMSans text-base text-green">15%+</p>
      </span>
      <div className="flex items-center mt-3 xl:mt-0 justify-center">
        <div className="w-[60%] lg:w-full h-[280px] relative">
          <Doughnut
            ref={chartRef}
            className=""
            data={chartData}
            options={options}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <h5 className="text-[#1E265E] font-semibold">
              {totalOrder.toLocaleString()}
            </h5>
            <p className="text-[#1E265E] mt-2 text-base font-DMSans font-medium">
              {t('total')}
            </p>
          </div>
          <div
            className="absolute top-0 xl:top-4 -right-[2%] xlg:right-0 
          2xl:right-[2%]"
          >
            <h5 className="font-semibold lg:text-lg xl:text-xl leading-5 xlg:leading-7">{`${(completedOrder / totalOrder) * 100}%`}</h5>
            <small className="font-semibold text-sm xlg:text-base 2xl:text-lg">
              {t('completed')}
            </small>
          </div>

          <div className="absolute bottom-4 xl:bottom-8 xlg:bottom-10 -left-[1%] xl:left-[2%] xlg:left-[3%]">
            <h5 className="font-semibold lg:text-lg xl:text-xl leading-5 xlg:leading-7">{`${(cancelledOrder / totalOrder) * 100}%`}</h5>
            <small className="font-semibold text-base xlg:text-base 2xl:text-lg">
              {t('cancelled')}
            </small>
          </div>

          <div className="absolute top-1 xl:top-5 -left-[1%] xl:left-[1%] xlg:left-[3%]">
            <h5
              className="font-semibold lg:text-lg xl:text-xl leading-5 
            xlg:leading-7"
            >{`${(remainingOrder / totalOrder) * 100}%`}</h5>
            <small className="font-semibold text-base xlg:text-base 2xl:text-lg">
              No Show
            </small>
          </div>
        </div>
      </div>

      <div className="flex mt-4 items-center gap-x-6 justify-center">
        <div className="flex items-start gap-x-2">
          <span className="w-[10px] h-[10px] mt-[6%] bg-blue rounded-full block" />
          <div className="">
            <p className="font-DMSans font-semibold text-base">
              {t('completed')}
            </p>
            <p className="font-DMSans font-medium text-base">
              {completedOrder.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex gap-x-2">
          <span className="w-[10px] mt-[6%] h-[10px] rounded-full bg-yellow block" />
          <div className="">
            <p className="font-DMSans font-semibold text-base">
              {t('cancelled')}
            </p>
            <p className="font-DMSans font-medium text-base">
              {cancelledOrder.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <span className="w-[10px] mt-[6%] h-[10px] rounded-full bg-lightBlue block" />
          <div className="">
            <p className="font-DMSans font-semibold text-base">No Show</p>
            <p className="font-DMSans font-medium text-base">
              {remainingOrder.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const outerThicknessPlugin = {
  id: 'outerThicknessPlugin',
  afterDatasetDraw(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);

    if (!dataset.applyCustomStyle) return;

    // Loop through each segment in the doughnut chart
    meta.data.forEach((element, index) => {
      const { outerRadius, innerRadius, startAngle, endAngle } = element;
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;

      // Apply custom thickness only for the "Completed" section (index 0)
      if (index === 0 || index === 1) {
        const extraThickness = index === 0 ? 15 : 8; // Increase outer radius for "Completed" section
        const borderRadius = 5; // Optional: Add some rounded effect

        ctx.save();
        ctx.beginPath();

        // Move to start of arc with the larger radius
        ctx.arc(
          centerX,
          centerY,
          outerRadius + extraThickness,
          startAngle,
          endAngle
        );

        // Move back along the inner radius
        ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);

        ctx.closePath();
        ctx.fillStyle = dataset.backgroundColor[index]; // Use default color
        ctx.fill();

        // Add optional rounded borders at the start and end
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = borderRadius;
        ctx.strokeStyle = dataset.backgroundColor[index]; // Match fill color
        ctx.stroke();

        ctx.restore();
      }
    });
  },
};

const chartData = {
  labels: ['Completed', 'Cancelled', 'Empty'],
  datasets: [
    {
      backgroundColor: ['#004D9B', '#FFCA40', '#004d9b1a'], // Colors for the segments
      hoverBackgroundColor: ['#004D9B', '#FFCA40', '#004d9b1a'], // Hover colors
      hoverBorderWidth: 0,
      borderWidth: 0,
      cutout: '70%', // Adjust cutout size to create a semi-doughnut style
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 30,
  },
  plugins: {
    legend: {
      display: false, // Hide the legend since you're manually adding labels outside the chart
    },
    tooltip: {
      enabled: false,
    },
  },
  rotation: 0,
  circumference: 360,
};
