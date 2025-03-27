import { useState } from 'react';
import { Button } from '../../component/atoms/Button';
import { AddIcon } from '../../assets/globals/icons';
import { AdsCard } from './AdsCard';
import { ads } from '../../assets/globals/data/Ads';
import { AddAdsFormModal } from './AddAdsFormModal';

const icons = {
  addIcon: AddIcon,
};

function PromotionAds() {
  const [showModal, setShowModal] = useState(false);

  const onClickAdd = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <AddAdsFormModal
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      )}
      <div className="flex items-center justify-between mt-6">
        <h5 className="font-medium text-blue">
          Promotions View Ads Management
        </h5>
        <Button
          className="px-4 font-semibold py-[10px]"
          text="Add New Ads"
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={onClickAdd}
        />
      </div>
      <div
        className="mt-6 px-4 py-6 h-[calc(100vh-150px)]
      overflow-y-auto bg-white border 
      border-black border-opacity-10 rounded-md"
      >
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
          {ads.map((data) => (
            <AdsCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PromotionAds;
