import { useTranslation } from 'react-i18next';
import { RestaurantPlanList } from '../../../component/organisms/RestaurantPlanList';

function RestaurantList() {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="flex items-center gap-x-4">
        <h5 className="font-medium text-blue">
          {t('planManagement.planManagement')}
        </h5>
      </div>
      <RestaurantPlanList />
    </div>
  );
}

export default RestaurantList;
