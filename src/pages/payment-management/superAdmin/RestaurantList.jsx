import { RestaurantPlanList } from '../../../component/organisms/RestaurantPlanList';

function RestaurantList() {
  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <h5 className="font-medium text-blue">Payment Management</h5>

      <RestaurantPlanList />
    </div>
  );
}

export default RestaurantList;
