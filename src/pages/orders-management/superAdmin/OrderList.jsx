import { useState } from 'react';
import { Button } from '../../../component/atoms/Button';
import { SearchInput } from '../../../component/atoms/SearchInput';
import StatusDropdown from '../../../component/organisms/StatusDropdown';
import { DateTimeQueryModal } from '../../../component/organisms/DateTimeQueryModal';
import { CustomTable } from '../../../component/organisms/CustomTable';
import { StatusBadge } from '../StatusBadge';
import { orders, status } from '../../../assets/globals/data/Orders';
import { useTranslation } from 'react-i18next';

function OrderList() {
  const [showModal, setShowModal] = useState(false);
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
          return 'Yes';
        }
        return null;
      },
    },
    {
      header: t('profile.restaurantName'),
      cell: ({ row }) => {
        return row.original.restaurant.name;
      },
    },
    {
      header: t('status'),
      cell: ({ row }) => {
        return <StatusBadge status={row.original.status} />;
      },
    },
  ];

  return (
    <>
      {showModal && (
        <DateTimeQueryModal
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      )}
      <div className="flex items-center gap-x-4 mt-6">
        <h5 className="font-medium text-blue">
          {t('orderManagement.totalOrders')}
        </h5>
        <div className="px-6 py-2 bg-blue text-white rounded-full">3400</div>
      </div>
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
      <CustomTable columns={columns} data={orders} />
    </>
  );
}

export default OrderList;
