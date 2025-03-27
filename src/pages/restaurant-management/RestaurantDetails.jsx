import { Button } from '../../component/atoms/Button';
import { DeleteIcon } from '../../assets/globals/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useMemo } from 'react';
import {
  restaurants,
  restaurantCategory,
} from '../../assets/globals/data/restaurants';
import { RestaurantAnalytics } from './RestaurantAnalytics';
import { useTranslation } from 'react-i18next';

const restaurantDetails = [
  { id: 1, key: 'name', label: 'profile.restaurantName' },
  { id: 2, key: 'email', label: 'profile.email' },
  { id: 3, key: 'phoneNumber', label: 'profile.phoneNumber' },
  { id: 4, key: 'customerId', label: 'restaurantManagement.customerId' },
];
const planDetails = [
  { id: 1, key: 'planType', label: 'restaurantManagement.subscriptionPlan' },
  { id: 2, key: 'billingType', label: 'restaurantManagement.billingType' },
  { id: 3, key: 'price', label: 'price' },
  {
    id: 4,
    key: 'autoRenewable',
    label: 'restaurantManagement.autoRenewableMembershipPlan',
  },
];
const planBillingDates = [
  { id: 1, key: 'billDate', label: 'restaurantManagement.billDate' },
  { id: 2, key: 'dueDate', label: 'restaurantManagement.dueDate' },
  {
    id: 3,
    key: 'nextBillingDate',
    label: 'restaurantManagement.nextBillingDate',
  },
];
const categoryDetails = [
  { id: 1, key: 'food', label: 'restaurantManagement.foodCategories' },
  { id: 2, key: 'desserts', label: 'restaurantManagement.dessertsCategories' },
  {
    id: 3,
    key: 'drinks',
    label: 'restaurantManagement.drinksCategories',
  },
];

function RestaurantDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const restaurantId = useMemo(() => {
    if (location.state && location.state?.restaurantId) {
      return location.state.restaurantId;
    }
    return null;
  }, [location.state]);

  const restaurant = useMemo(() => {
    if (restaurantId) {
      return restaurants.find((restaurant) => restaurant.id === restaurantId);
    }
    return null;
  }, [restaurantId]);

  const restaurantCategories = useMemo(() => {
    if (restaurantId) {
      return restaurantCategory.find(
        (category) => category.restaurantId === restaurantId
      );
    }
    return null;
  }, [restaurantId]);

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="flex items-center gap-x-4 justify-between">
        <div className="bg-transparent px-1 flex items-center gap-x-4 w-full">
          <span
            onClick={() => navigate(-1)}
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
          >
            <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
          </span>
          <h5 className="font-medium text-blue">
            {t('restaurantManagement.restaurantDetails')}
          </h5>
        </div>
        <Button
          size="small"
          text={t('restaurantManagement.planInvoice')}
          className="px-4 min-w-[160px]"
        />
      </div>
      <div
        className="bg-white 
          border border-black border-opacity-10 rounded-3xl  mt-6 px-6 py-10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <img
              src=""
              alt=""
              className="w-[50px] h-[50px] border border-opacity-10 border-black rounded-full"
            />
            <h6 className="font-medium text-blue">The Italian Job</h6>
          </div>

          <span className="flex items-center cursor-pointer">
            <DeleteIcon className="w-[20px] h-[20px] fill-red" />
            <small className="text-red">{t('remove')}</small>
          </span>
        </div>
        <div className="flex mt-6 items-stretch gap-x-6">
          <div
            className="bg-lightBlue w-[33%] px-5 py-6 rounded-lg 
          flex flex-col gap-y-3"
          >
            {restaurantDetails.map((detail) => (
              <div key={detail.id} className="flex flex-col gap-y-[2px]">
                <small className="text-blue block">{t(detail.label)}</small>
                <small className="font-semibold text-lg">
                  {restaurant?.[detail.key]}
                </small>
              </div>
            ))}
          </div>
          <div
            className="bg-lightBlue w-[33%]  px-5 py-6 rounded-lg
            flex flex-col gap-y-3"
          >
            {planDetails.map((detail) => (
              <div key={detail.id} className="flex flex-col gap-y-[2px]">
                <small className="text-blue block">{t(detail.label)}</small>
                <small className="font-semibold text-lg">
                  {detail.key !== 'autoRenewable'
                    ? restaurant.plan?.[detail.key]
                    : restaurant.plan?.[detail.key]
                      ? t('enabled')
                      : t('disabled')}
                </small>
              </div>
            ))}
          </div>
          <div
            className="bg-lightBlue w-[33%] px-5 py-6 rounded-lg
            flex flex-col gap-y-3"
          >
            {planBillingDates.map((detail) => (
              <div key={detail.key} className="flex flex-col gap-y-[2px]">
                <small className="text-blue block">{t(detail.label)}</small>
                <small className="font-semibold text-lg">
                  {restaurant.plan[detail.key]}
                </small>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 bg-lightBlue rounded-lg py-4 px-5">
          <small className="text-blue">
            {`${t('levelManagement.location')} -`}{' '}
            <small className="text-black text-lg font-semibold">
              {restaurant.location}
            </small>
          </small>
        </div>
        <h6 className="mt-6 text-blue font-semibold">Restaurant Categories</h6>
        <div
          className="bg-lightBlue w-[33%] px-5 py-6 rounded-lg
            flex flex-col gap-y-3 mt-2"
        >
          {categoryDetails.map((detail) => (
            <div key={detail.key} className="flex flex-col gap-y-[2px]">
              <small className="text-blue block">{t(detail.label)}</small>
              <small className="font-semibold text-lg">
                {`${restaurantCategories[detail.key]} Categories`}
              </small>
            </div>
          ))}
        </div>
      </div>
      <RestaurantAnalytics />
    </div>
  );
}

export default RestaurantDetails;
