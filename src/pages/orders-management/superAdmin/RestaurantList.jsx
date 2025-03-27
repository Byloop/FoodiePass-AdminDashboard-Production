import { SearchInput } from '../../../component/atoms/SearchInput';
import StatusDropdown from '../../../component/organisms/StatusDropdown';
import { restaurantOrders } from '../../../assets/globals/data/Orders';
import { CustomTable } from '../../../component/organisms/CustomTable';
import { ViewIcon } from '../../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const status = [
  { id: 1, key: 'inactive', value: 'inactive' },
  { id: 2, key: 'active', value: 'active' },
];

function RestaurantList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    { header: t('menuManagement.name'), accessorKey: 'name' },
    { header: t('orderManagement.totalOrders'), accessorKey: 'totalOrders' },
    { header: t('completed'), accessorKey: 'completedOrders' },
    { header: t('pending'), accessorKey: 'pendingOrders' },
    { header: t('completed'), accessorKey: 'cancelledOrders' },
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
      header: t('action'),
      cell: ({ row }) => {
        const restaurantName = row.original.name;
        return (
          <span
            className="flex w-full justify-center cursor-pointer"
            onClick={() =>
              navigate(`/order-management/${restaurantName}/all-orders`)
            }
          >
            <ViewIcon className="w-[20px] h-[20px] fill-blue" />
          </span>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex items-center gap-x-4 mt-6">
        <h5 className="font-medium text-blue">
          {t('orderManagement.totalRestaurants')}
        </h5>
        <div className="px-6 py-2 bg-blue text-white rounded-full">3400</div>
      </div>
      <div className="flex my-6 items-center justify-between">
        <SearchInput className="py-[8px] bg-white w-[60%] !rounded-full" />

        <StatusDropdown status={status} />
      </div>
      <CustomTable columns={columns} data={restaurantOrders} />
    </>
  );
}

export default RestaurantList;
