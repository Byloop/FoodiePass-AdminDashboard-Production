import { useState, useMemo } from 'react';
import { CustomTable } from '../../component/organisms/CustomTable';
import { orders } from '../../assets/globals/data/Orders';
import { Button } from '../../component/atoms/Button';
import { StatusBadge } from './StatusBadge';
import { ViewIcon } from '../../assets/globals/icons';
import OrderDetailsModal from './OrderDetailsModal';
import { DateTimeQueryModal } from '../../component/organisms/DateTimeQueryModal';
import { useTranslation } from 'react-i18next';

function AllOrders() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedRange, setSelectedRange] = useState({
    startTime: '',
    endTime: '',
    stateDate: '',
    endDate: '',
    showModal: false,
  });
  const { t } = useTranslation();

  const isTodaySelected = useMemo(
    () =>
      selectedRange.startDate?.toDateString?.() === new Date().toDateString(),
    [selectedRange.startDate]
  );

  const tomorrowDate = useMemo(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }, []);

  const isTomorrowSelected = useMemo(
    () =>
      selectedRange.startDate?.toDateString?.() === tomorrowDate.toDateString(),
    [selectedRange.startDate, tomorrowDate]
  );

  const columns = [
    {
      header: t('orderManagement.ID'),
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
    {
      header: '',
      id: 'action',
      cell: ({ row }) => {
        return (
          <span
            onClick={() => {
              setSelectedOrder(row.original);
              setShowModal(true);
            }}
            className="flex w-full justify-center cursor-pointer"
          >
            <ViewIcon className="w-[20px] h-[20px] fill-blue" />
          </span>
        );
      },
    },
  ];
  return (
    <>
      {showModal && (
        <OrderDetailsModal
          order={selectedOrder}
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      )}
      {selectedRange.showModal && (
        <DateTimeQueryModal
          showModal={selectedRange.showModal}
          onClickCancel={() =>
            setSelectedRange({
              ...selectedRange,
              showModal: false,
            })
          }
        />
      )}
      <div
        className="flex flex-col lg:flex-row lg:items-center my-6 gap-y-6 
      lg:justify-between"
      >
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">
            {t('orderManagement.totalOrders')}
          </h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">
            {orders.length}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4 font-semibold py-[10px] min-w-[100px]"
            text={t('today')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            onSubmit={() => {
              isTodaySelected
                ? setSelectedRange({
                    ...selectedRange,
                    startDate: '',
                  })
                : setSelectedRange({
                    ...selectedRange,
                    startDate: new Date(),
                  });
            }}
            color={isTodaySelected ? 'yellow' : 'grey'}
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('tomorrow')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            onSubmit={() => {
              if (isTomorrowSelected) {
                setSelectedRange({
                  ...selectedRange,
                  startDate: '',
                });
              } else {
                setSelectedRange({
                  ...selectedRange,
                  startDate: tomorrowDate,
                });
              }
            }}
            color={isTomorrowSelected ? 'yellow' : 'grey'}
          />
          <Button
            className="px-4 font-semibold py-[10px] min-w-[100px]"
            text={t('7Days')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color="grey"
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('selectPeriod')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color={selectedRange.showModal ? 'yellow' : 'grey'}
            onSubmit={() =>
              setSelectedRange({
                ...selectedRange,
                startDate: '',
                showModal: true,
              })
            }
          />
        </div>
      </div>

      <CustomTable columns={columns} data={orders} />
    </>
  );
}

export default AllOrders;
