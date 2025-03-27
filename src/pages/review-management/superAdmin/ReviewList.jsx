import { CustomTable } from '../../../component/organisms/CustomTable';
import { SearchInput } from '../../../component/atoms/SearchInput';
import StatusDropdown from '../../../component/organisms/StatusDropdown';
import { reviews } from '../../../assets/globals/data/reviews';
import { InfoIcon, ViewIcon } from '../../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const status = [
  { id: 1, key: 'active', value: 'active' },
  { id: 2, key: 'inactive', value: 'inactive' },
];

function ReviewList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    {
      header: t('reviewsManagement.restaurant'),
      cell: ({ row }) => {
        return row.original.restaurant.name;
      },
    },
    {
      header: t('total'),
      accessorKey: 'total',
    },
    {
      header: t('reviewsManagement.good'),
      accessorKey: 'good',
    },
    {
      header: t('reviewsManagement.average'),
      accessorKey: 'average',
    },
    {
      header: t('reviewsManagement.bad'),
      accessorKey: 'bad',
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
        return (
          <span
            className="flex items-center justify-center"
            onClick={() =>
              navigate(
                `/reviews-management/${row.original.restaurant.name}/reviews`,
                {
                  state: { reviewId: row.original.id },
                }
              )
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
      <div className="flex items-center gap-x-4">
        <h5 className="font-medium text-blue">
          {t('reviewsManagement.reviewsManagement')}
        </h5>
      </div>
      <div className="flex mt-6 items-center justify-between">
        <SearchInput
          placeholder="Search Restaurants"
          className="bg-white !rounded-full w-[60%] py-[8px]"
        />
        <StatusDropdown status={status} />
      </div>
      <div>
        {reviews.length === 0 ? (
          <div
            className="w-full border
           mt-6 border-black border-opacity-10 rounded-md  flex-col gap-y-3 
           min-h-[300px] bg-white flex items-center justify-center"
          >
            <span className="bg-blue flex items-center justify-center w-[80px] h-[80px] rounded-full">
              <InfoIcon className="w-[38px] h-[38px] fill-white" />
            </span>
            <h5 className="font-medium">No info in this section</h5>
          </div>
        ) : (
          <div className="mt-6">
            <CustomTable data={reviews} columns={columns} />
          </div>
        )}
      </div>
    </>
  );
}

export default ReviewList;
