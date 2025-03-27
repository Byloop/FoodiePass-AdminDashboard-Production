import { useTranslation } from 'react-i18next';
import { StackedBarChart } from '../../component/atoms/StackedBarChart';

export function BookingChart() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-[#294293] font-semibold">
          {t('home.totalBookings')}
        </h5>

        <div className="bg-lightBlue rounded-full px-4 py-1">
          <small className="text-blue">Weekly</small>
        </div>
      </div>
      <div className="h-[1px] mt-4 w-[80%] bg-[#ececec]" />

      <div className="flex items-center mt-6 justify-center h-full">
        <div className="w-full h-full">
          <StackedBarChart
            labels={[
              t('days.short.mon'),
              t('days.short.tue'),
              t('days.short.wed'),
              t('days.short.thu'),
              t('days.short.fri'),
              t('days.short.sat'),
              t('days.short.sun'),
            ]}
            currentDataset={{
              label: 'Completed Bookings',
              data: [100, 60, 130, 70, 90, 110, 150],
              backgroundColor: '#294293',
            }}
            previousDataset={{
              label: 'Pending Bookings',
              data: [100, 60, 110, 75, 85, 105, 150],
              backgroundColor: '#FFCA40',
            }}
          />
        </div>
      </div>
    </div>
  );
}
