import { useMemo, useState } from 'react';
import { challenges } from '../../assets/globals/data/challenges';
import ActionDropdown from '../../component/organisms/ActionDropdown';
import { Button } from '../../component/atoms/Button';
import { AddIcon } from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { PermissionModal } from '../../component/organisms/PermissionModal';
import { ChallengeDetailsModal } from './ChallengeDetailsModal';

const icons = {
  addIcon: AddIcon,
};

const Card = ({ challenge }) => {
  const navigate = useNavigate();
  const { name, description, rewardPoints, startDate, endDate, moneySpent } =
    challenge;
  const [showModal, setShowModal] = useState({
    confirmationModal: false,
  });
  const numberOfDays = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff;
  }, [endDate, startDate]);

  console.log(numberOfDays);

  return (
    <>
      {showModal.detailsModal && (
        <ChallengeDetailsModal
          challenge={challenge}
          showModal={showModal.detailsModal}
          onClickCancel={() =>
            setShowModal({ ...showModal, detailsModal: false })
          }
        />
      )}
      {showModal.confirmationModal && (
        <PermissionModal
          title="Are you sure?"
          subtitle="You want to delete this challenge"
          showModal={showModal.confirmationModal}
          confirmButtonText="Yes, Remove it"
          onClickCancel={() =>
            setShowModal({ ...showModal, confirmationModal: false })
          }
        />
      )}
      <div className="bg-lightBlue border border-blue rounded-lg py-4 px-4">
        <div className="flex items-center justify-between">
          <h6>{name}</h6>
          <div>
            <ActionDropdown
              onEdit={() => navigate('edit-challenge')}
              onView={() => setShowModal({ ...showModal, detailsModal: true })}
              onDelete={() =>
                setShowModal({ ...showModal, confirmationModal: true })
              }
              showOptions={['edit', 'view', 'delete']}
            />
          </div>
        </div>
        <small className="text-blue mt-2 block font-medium">{`Reward - ${rewardPoints} Points`}</small>
        <small className="block mt-2">{description}</small>
        <div className="w-full bg-blue h-[0.6px] mt-3" />
        <div className="flex items-center justify-between mt-2">
          <small className="text-blue">{moneySpent}</small>
          <small className="text-blue">{`${numberOfDays} Days`}</small>
        </div>
        <div className="flex items-center justify-between">
          <small>Money Spent:</small>
          <small>Time Period:</small>
        </div>
      </div>
    </>
  );
};

function ChallengeList() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-blue">Challenge Management</h5>
        <Button
          className="px-4 font-semibold py-[10px]"
          text="Add New Challenge"
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={() => navigate('add-challenge')}
        />
      </div>
      <div
        className="mt-6 px-4 py-6 h-[calc(100vh-150px)]
            overflow-y-auto bg-white border 
            border-black border-opacity-10 rounded-md"
      >
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
          {challenges.map((challenge) => (
            <Card challenge={challenge} key={challenge.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChallengeList;
