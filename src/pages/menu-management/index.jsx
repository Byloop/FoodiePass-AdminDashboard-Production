import { Link } from '../../component/atoms/Link';
import {
  DessertIcon,
  DrinkIcon,
  FoodIcon,
} from '../../assets/globals/icons/Sidebar';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const icon = {
  foodIcon: FoodIcon,
  dessertIcon: DessertIcon,
  drinkIcon: DrinkIcon,
};

function MenuManagement() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div
        className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 
      rounded-full"
      >
        <div className="flex items-center justify-between px-4 w-[560px] lg:w-[650px] xl:w-[700px]">
          <Link
            text={t('menuManagement.food')}
            icon={icon.foodIcon}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="food"
            className="px-6 !py-[7px]"
          />
          <Link
            text={t('menuManagement.drinks')}
            icon={icon.drinkIcon}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="drinks"
            className="px-6 !py-[7px]"
          />
          <Link
            text={t('menuManagement.desserts')}
            icon={icon.dessertIcon}
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="desserts"
            className="px-6 !py-[7px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/menu-management' ? (
          <Navigate to="food" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default MenuManagement;
