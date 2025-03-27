import { SearchInput } from '../../../component/atoms/SearchInput';
import { CustomTable } from '../../../component/organisms';
import StatusDropdown from '../../../component/organisms/StatusDropdown';
import { PaymentDropdown } from '../PaymentDropdown';
import { subscriptionPayments } from '../../../assets/globals/data/payments';

const status = [
  { id: 1, key: 'Completed', value: 'completed' },
  { id: 2, key: 'Pending', value: 'pending' },
  { id: 3, key: 'Failed', value: 'failed' },
];

function FoodiePassPayment() {
  const columns = [
    {
      header: 'Restaurant Name',
      cell: ({ row }) => {
        return row.original.restaurant.name;
      },
    },
    { header: 'Transaction ID', accessorKey: 'transactionId' },
    {
      header: 'Date',
      cell: ({ row }) => {
        const { date, time } = row.original;
        return (
          <span>
            <small className="block">{date}</small>
            <small className="text-black text-opacity-60">{time}</small>
          </span>
        );
      },
    },
    {
      header: 'Status',
      cell: ({ row }) => {
        const { status } = row.original;
        return (
          <div
            className={`${status === 'pending' ? 'bg-yellow' : status === 'completed' ? 'bg-green' : 'bg-red'} rounded-full px-3 py-2`}
          >
            <p
              className={`font-DMSans text-[13px] ${
                status === 'failed' ? 'text-white' : 'text-black'
              }`}
            >
              {status}
            </p>
          </div>
        );
      },
    },
    {
      header: 'Amount',
      cell: ({ row }) => `$${row.original.amount}`,
    },
    {
      header: 'Payment',
      accessorKey: 'paymentMethod',
    },
  ];
  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <h5 className="font-medium text-blue">Payment Management</h5>

      <div className="flex my-6 items-center justify-between">
        <SearchInput className="py-[8px] bg-white w-[60%] !rounded-full" />
        <div className="flex items-center gap-x-4">
          <PaymentDropdown />
          <StatusDropdown status={status} />
        </div>
      </div>
      <CustomTable columns={columns} data={subscriptionPayments} />
    </div>
  );
}

export default FoodiePassPayment;
