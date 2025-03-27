import { useState } from 'react';
import ActionDropdown from '../../component/organisms/ActionDropdown';
import { AdsDetailsModal } from './AdsDetailsModal';
import { PermissionModal } from '../../component/organisms/PermissionModal';
import { EditAdsFormModal } from './EditAdsFormModal';

export function AdsCard({ data }) {
  const [showModal, setShowModal] = useState({
    detailsModal: false,
    confirmationModal: false,
    editFormModals: false,
  });

  const onClickView = () => {
    setShowModal({ ...showModal, detailsModal: true });
  };

  const onClickEdit = () => {
    setShowModal({ ...showModal, editFormModals: true });
  };

  const onClickDelete = () => {
    setShowModal({ ...showModal, confirmationModal: true });
  };

  return (
    <div className="h-fit">
      {showModal.confirmationModal && (
        <PermissionModal
          title="Are you sure?"
          confirmButtonText="Yes, delete it"
          subtitle="You want to delete this ad."
          showModal={showModal.confirmationModal}
          onClickCancel={() =>
            setShowModal({ ...showModal, confirmationModal: false })
          }
        />
      )}
      {showModal.detailsModal && (
        <AdsDetailsModal
          showModal={showModal.detailsModal}
          ads={data}
          onClickCancel={() =>
            setShowModal({ ...showModal, detailsModal: false })
          }
        />
      )}
      {showModal.editFormModals && (
        <EditAdsFormModal
          showModal={showModal.editFormModals}
          onClickCancel={() => setShowModal(showModal.editFormModals)}
          editData={data}
        />
      )}
      <div className="flex items-center justify-between">
        <h6>{data.name}</h6>
        <div>
          <ActionDropdown
            onView={onClickView}
            onDelete={onClickDelete}
            onEdit={onClickEdit}
            showOptions={['edit', 'delete', 'view']}
          />
        </div>
      </div>

      <img
        src={data.image}
        className="h-[130px] lg:h-[200px] xl:h-[120px] xlg:h-[150px] 2xl:h-[200px] mt-4 w-full"
      />
    </div>
  );
}
