import { useMemo, useState } from 'react';
import { orders, status } from '../../../assets/globals/data/Orders';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantOrderAnalytics } from './RestarauantOrderAnalytics';
import { CustomTable } from '../../../component/organisms/CustomTable';
import { StatusBadge } from '../StatusBadge';
import { Button } from '../../../component/atoms/Button';
import { SearchInput } from '../../../component/atoms/SearchInput';
import StatusDropdown from '../../../component/organisms/StatusDropdown';
import { DateTimeQueryModal } from '../../../component/organisms/DateTimeQueryModal';
import { ChevronDownIcon } from '../../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

function RestaurantOrder() {
  const { restaurantName, serviceType } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: t('orderManagement.customers'),
      cell: ({ row }) => {
        return row.original.user.fullName;
      },
    },
    {
      header: t('orderManagement.contactNo'),
      cell: ({ row }) => {
        return row.original.user.phoneNumber;
      },
    },
    {
      header: t('date'),
      accessorKey: 'date',
    },
    {
      header: t('time'),
      cell: ({ row }) => {
        const { startTime, endTime } = row.original;
        if (endTime) {
          return `${startTime} - ${endTime}`;
        }
        return startTime;
      },
    },
    {
      header: t('orderManagement.table'),
      cell: ({ row }) => {
        if (row.original.table) {
          return row.original.table.name;
        }
        return null;
      },
    },
    {
      header: t('tableManagement.area'),
      cell: ({ row }) => {
        if (row.original.level) {
          return row.original.level.name;
        }
        return null;
      },
    },
    {
      header: t('orderManagement.pax'),
      accessorKey: 'pax',
    },
    {
      header: t('price'),
      accessorKey: 'price',
    },
    {
      header: t('takeAway'),
      cell: ({ row }) => {
        if (row.original.service === 'take-away') {
          return t('yes');
        }
        return null;
      },
    },
    {
      header: t('status'),
      cell: ({ row }) => {
        return <StatusBadge status={row.original.status} />;
      },
    },
  ];

  const filteredOrders = useMemo(() => {
    switch (serviceType) {
      case 'table-booking-orders':
        return orders.filter(
          (order) =>
            order.service === 'reservation' &&
            order.restaurant.name === restaurantName
        );
      case 'take-away-orders':
        return orders.filter(
          (order) =>
            order.service === 'take-away' &&
            order.restaurant.name === restaurantName
        );
      default:
        return orders.filter(
          (order) => order.restaurant.name === restaurantName
        );
    }
  }, [restaurantName, serviceType]);

  return (
    <>
      {showModal && (
        <DateTimeQueryModal
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      )}
      <div className="bg-transparent mt-6 px-1 flex items-center gap-x-4 w-full">
        <span
          onClick={() => navigate('/order-management/all-restaurants')}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">
          {t('orderManagement.orderManagement')}
        </h5>
      </div>
      <RestaurantOrderAnalytics restaurantName={restaurantName} />
      <div className="flex my-6 items-center justify-between">
        <SearchInput className="py-[8px] bg-white w-[60%] !rounded-full" />
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4 bg-lightBlue"
            size="small"
            text={t('selectPeriod')}
            color="outline"
            onSubmit={() => setShowModal(true)}
          />
          <StatusDropdown status={status} />
        </div>
      </div>
      <CustomTable columns={columns} data={filteredOrders} />
    </>
  );
}

export default RestaurantOrder;
