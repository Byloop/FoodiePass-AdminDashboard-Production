import { TimeRangeDropdown } from '../../main/TimeRangeDropdown';
import { SegmentedPieChart } from '../../../component/atoms/SegmentedPieChart';
import { useTranslation } from 'react-i18next';

export function PlanAnalysis() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white 
    rounded-3xl px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">
          {t('planManagement.planAnalysis')}
        </h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex flex-col gap-y-6 lg:flex-row mt-4 items-stretch gap-x-10 justify-center">
        <div className="h-[280px] relative">
          <SegmentedPieChart
            segmentData={[50000, 20000, 10000]}
            labels={['Advance Plan', 'Premium Plan', 'Basic Plan']}
            backgroundColors={['#0E5FD9', '#FFCA40', '#F2740C']}
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
            <h5 className="text-[#1E265E] font-semibold">50K</h5>
            <p
              className="text-[#1E265E] text-base font-DMSans 
            font-medium"
            >
              {t('total')}
            </p>
          </div>
        </div>
        <div className="">
          <h5 className="text-green lg:min-w-[220px] text-center lg:text-left">
            {t('planManagement.totalPlanEarning')}
          </h5>
          <h5 className="text-green lg:w-[220px] text-center">$50K</h5>
          <div className="flex items-center justify-center lg:justify-start gap-x-10 mt-6">
            <span>
              <span className="flex items-center gap-x-1">
                <span className="w-[10px] h-[10px] bg-[#0E5FD9] rounded-full mt-[1px]" />
                <small>{t('restaurantManagement.advancePlan')}</small>
              </span>
              <h6 className="text-center">$1,132.50</h6>
            </span>
            <span>
              <span className="flex items-center gap-x-1">
                <span className="w-[10px] h-[10px] bg-[#FFCA40] rounded-full mt-[1px]" />
                <small>{t('restaurantManagement.premiumPlan')}</small>
              </span>
              <h6 className="text-center">$50</h6>
            </span>
            <span>
              <span className="flex items-center gap-x-1">
                <span className="w-[10px] h-[10px] bg-[#F2740C] rounded-full mt-[1px]" />
                <small>{t('restaurantManagement.basicPlan')}</small>
              </span>
              <h6 className="text-center">$1,2450</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
