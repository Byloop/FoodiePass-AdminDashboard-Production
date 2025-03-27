import { useState } from 'react';
import { CustomTable } from '../../component/organisms/CustomTable';
import { activeCoupons } from '../../assets/globals/data/Coupons';
import ActionDropdown from '../../component/organisms/ActionDropdown';
import CouponDetailsModal from './CouponDetailSModal';
import { PermissionModal } from '../../component/organisms/PermissionModal';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ActiveCoupons() {
  const [showModal, setShowModal] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    {
      header: t('couponManagement.couponCode'),
      accessorKey: 'couponCode',
    },
    {
      header: t('couponManagement.discount'),
      accessorKey: 'discountPercentage',
    },
    {
      header: t('couponManagement.special'),
      cell: ({ row }) => {
        const subType = row.original.subType;
        if (subType) {
          const formattedSubType = subType
            .split('-')
            .map((string, index) => {
              if (index > 0) {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }
              return string;
            })
            .join('');

          return t(`couponManagement.${formattedSubType}`);
        }
        return subType;
      },
    },
    {
      header: t('dateFrom'),
      accessorKey: 'startDate',
    },
    {
      header: t('dateTo'),
      accessorKey: 'endDate',
    },
    {
      header: t('time'),
      cell: ({ row }) => {
        const { startTime, endTime } = row.original;
        return `${startTime} - ${endTime}`;
      },
    },
    {
      header: t('actions'),
      cell: ({ row }) => {
        return (
          <ActionDropdown
            showOptions={['edit', 'view', 'delete']}
            onDelete={() => {
              setSelectedCoupon(row.original);
              setShowPermissionModal(true);
            }}
            onView={() => {
              setSelectedCoupon(row.original);
              setShowModal(true);
            }}
            onEdit={() => {
              navigate('/coupon-management/edit-coupon', {
                state: { editCoupon: row.original },
              });
            }}
          />
        );
      },
    },
  ];
  return (
    <>
      {showModal && (
        <CouponDetailsModal
          onClickCancel={() => setShowModal(false)}
          coupon={selectedCoupon}
          showModal={showModal}
        />
      )}
      {showPermissionModal && (
        <PermissionModal
          title={t('areYouSure')}
          subtitle={t('couponManagement.deleteCouponSubtitle')}
          onClickCancel={() => setShowPermissionModal(false)}
          onClickConfirm={() => setShowPermissionModal(false)}
          showModal={showPermissionModal}
          confirmButtonText={t('yesRemoveThis')}
        />
      )}
      <CustomTable columns={columns} data={activeCoupons} />
    </>
  );
}

export default ActiveCoupons;
