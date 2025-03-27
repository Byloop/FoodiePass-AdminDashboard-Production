import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../component/atoms/Button';
import { AddIcon } from '../../assets/globals/icons';
import { CustomTable } from '../../component/organisms/CustomTable';
import { EmptyContainer } from '../../component/organisms/EmptyContainer';
import { staves } from '../../assets/globals/data/Staff';
import ActionDropdown from '../../component/organisms/ActionDropdown';
import { PermissionModal } from '../../component/organisms/PermissionModal';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

function StaffList() {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(null);
  const { t } = useTranslation();
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const columns = [
    {
      header: t('staffManagement.fullName'),
      accessorKey: 'fullName',
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
      header: t('staffManagement.role'),
      accessorKey: 'role',
    },
    {
      header: t('actions'),
      cell: ({ row }) => {
        return (
          <ActionDropdown
            showOptions={['edit', 'delete']}
            onDelete={() => {
              setSelectedStaff(row.original);
              setShowPermissionModal(true);
            }}
            onEdit={() => {
              navigate('/staff-management/edit-staff', {
                state: { editStaff: row.original },
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
          title="Are you sure?"
          subtitle="you want to delete this staff data."
          onClickCancel={() => setShowPermissionModal(false)}
          onClickConfirm={() => setShowPermissionModal(false)}
          showModal={showPermissionModal}
          confirmButtonText="Yes, Remove this"
        />
      )}
      <div className="flex items-center my-6 justify-between">
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">
            {t('staffManagement.totalStaff')}
          </h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">80</div>
        </div>
        <Button
          className="px-4 font-semibold py-[10px]"
          text={t('staffManagement.addNewStaff')}
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={() => navigate('/staff-management/add-staff')}
        />
      </div>
      {staves.length > 0 ? (
        <CustomTable columns={columns} data={staves} />
      ) : (
        <EmptyContainer className="!h-[300px]" buttonText="Add New Staff" />
      )}
    </>
  );
}

export default StaffList;
