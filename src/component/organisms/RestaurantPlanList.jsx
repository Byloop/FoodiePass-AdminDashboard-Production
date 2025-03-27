import { useState } from 'react';
import { SearchInput } from '../atoms/SearchInput';
import StatusDropdown from './StatusDropdown';
import { CustomTable } from './CustomTable';
import { SubscriptionDropdown } from '../../pages/restaurant-management/SubscriptionDropdown';
import ActionDropdown from './ActionDropdown';
import { PermissionModal } from './PermissionModal';
import PremiumIcon from '../../assets/plan-management/icons/premium.svg';
import BasicIcon from '../../assets/plan-management/icons/basic.svg';
import AdvanceIcon from '../../assets/plan-management/icons/advance.svg';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../../assets/globals/data/restaurants';
import { useTranslation } from 'react-i18next';

const icons = {
  'Premium Plan': PremiumIcon,
  'Advance Plan': AdvanceIcon,
  'Basic Plan': BasicIcon,
};

const status = [
  { id: 1, key: 'active', value: 'active' },
  { id: 2, key: 'Inactive', value: 'inactive' },
];

export function RestaurantPlanList() {
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    {
      header: t('profile.restaurantName'),
      accessorKey: 'name',
    },
    {
      header: t('profile.email'),
      accessorKey: 'email',
    },
    {
      header: t('profile.phoneNumber'),
      accessorKey: 'phoneNumber',
    },
    {
      header: t('restaurantManagement.subscription'),
      cell: ({ row }) => {
        const subscription = row.original.plan.planType;

        return (
          <div className="flex items-center gap-x-1">
            <img
              className="w-[32px] h-[32px]"
              src={icons[subscription]}
              alt={subscription}
            />
            <small>{subscription}</small>
          </div>
        );
      },
    },
    {
      header: t('restaurantManagement.billingType'),
      cell: ({ row }) => {
        return row.original.plan.billingType;
      },
    },
    {
      header: t('restaurantManagement.nextBilling'),
      cell: ({ row }) => {
        return row.original.status === 'inactive' ? (
          <small className="text-red">Due</small>
        ) : (
          row.original.plan.nextBillingDate
        );
      },
    },
    {
      header: t('restaurantManagement.autoRenewable'),
      cell: ({ row }) => {
        return row.original.plan.autoRenewable ? 'Enabled' : 'Disabled';
      },
    },
    {
      header: t('status'),
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <div
            className={`rounded-full px-4 py-2 ${
              status === 'active' ? 'bg-lightGreen' : 'bg-lightRed'
            }`}
          >
            <small
              className={`${status === 'active' ? 'text-green' : 'text-red'}`}
            >
              {t(row.original.status)}
            </small>
          </div>
        );
      },
    },
    {
      header: t('actions'),
      cell: ({ row }) => {
        const name = row.original.name;
        return (
          <ActionDropdown
            showOptions={['view', 'delete']}
            onDelete={() => {
              setSelectedRestaurant(row.original);
              setShowPermissionModal(true);
            }}
            onView={() => {
              navigate(`${name}/details`, {
                state: { restaurantId: row.original.id },
              });
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      {showPermissionModal && (
        <PermissionModal
          title={t('areYouSure')}
          subtitle={t('restaurantManagement.deleteRestaurantSubtitle')}
          onClickCancel={() => setShowPermissionModal(false)}
          onClickConfirm={() => setShowPermissionModal(false)}
          showModal={showPermissionModal}
          confirmButtonText={t('yesRemoveThis')}
        />
      )}
      <div className="flex my-6 items-center justify-between">
        <SearchInput className="py-[8px] bg-white w-[60%] !rounded-full" />
        <div className="flex items-center gap-x-4">
          <SubscriptionDropdown />
          <StatusDropdown status={status} />
        </div>
      </div>
      <CustomTable columns={columns} data={restaurants} />
    </>
  );
}
