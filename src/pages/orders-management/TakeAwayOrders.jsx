import { useState, useMemo } from 'react';
import { CustomTable } from '../../component/organisms/CustomTable';
import { orders } from '../../assets/globals/data/Orders';
import { Button } from '../../component/atoms/Button';
import { StatusBadge } from './StatusBadge';
import { ViewIcon } from '../../assets/globals/icons';
import OrderDetailsModal from './OrderDetailsModal';
import { DateTimeQueryModal } from '../../component/organisms/DateTimeQueryModal';
import { useTranslation } from 'react-i18next';

const filteredOrders = orders.filter((order) => order.service === 'take-away');

function TakeAwayOrders() {
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
        return row.original.startTime;
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
        console.log(row.original.status);
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
      <div className="flex items-center my-6 justify-between">
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">
            {t('orderManagement.totalOrders')}
          </h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">
            {filteredOrders.length}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4 font-semibold py-[10px] min-w-[100px]"
            text={t('today')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color={isTodaySelected ? 'yellow' : 'grey'}
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
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('tomorrow')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color={isTomorrowSelected ? 'yellow' : 'grey'}
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
            onSubmit={() =>
              setSelectedRange({
                ...selectedRange,
                startDate: '',
                showModal: true,
              })
            }
            color={selectedRange.showModal ? 'yellow' : 'grey'}
          />
        </div>
      </div>

      <CustomTable columns={columns} data={filteredOrders} />
    </>
  );
}

export default TakeAwayOrders;
