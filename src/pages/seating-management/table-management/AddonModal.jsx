import { AddOnIcon } from '../../../assets/globals/icons/TableManagement';
import { CancelCircleIcon } from '../../../assets/globals/icons';
import { addons } from '../../../assets/globals/data/tableData';
import { Button } from '../../../component/atoms/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const waterFeaturesAddons = addons.filter(
  (addon) => addon.type === 'waterFeatures'
);
const naturalElementsAddons = addons.filter(
  (addon) => addon.type === 'naturalElements'
);
const urbanViewsAddons = addons.filter((addon) => addon.type === 'urbanViews');
const navigationPointsAddons = addons.filter(
  (addon) => addon.type === 'navigationPoints'
);

export function AddonModal({ onCancel }) {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex px-6 py-2 items-center justify-between bg-blue bg-opacity-10 rounded-xl">
        <div className="flex items-center gap-x-2">
          <span>
            <AddOnIcon className="w-[26px] h-[26px] fill-blue" />
          </span>
          <h4 className="text-blue text-[28px] xl:text-3xl font-medium">
            {t('tableManagement.addOn').toUpperCase()}
          </h4>
        </div>
        <span className="cursor-pointer" onClick={() => onCancel()}>
          <CancelCircleIcon className="w-[32px] h-[32px] fill-black" />
        </span>
      </div>
      <div className="overflow-y-auto h-full pb-12">
        <div className="mt-6 flex flex-col xl:flex-row justify-between px-6 gap-y-10">
          <div className="flex flex-col gap-y-4">
            <span className="block text-xl xl:text-[22px] max-w-[250px] bg-blue text-white rounded-full text-center py-1 px-8">
              Water Features
            </span>
            <div className="flex mt-2 flex-row flex-wrap xl:flex-col gap-y-4 gap-x-4">
              {waterFeaturesAddons.map((addon) => (
                <AddonButton
                  key={addon.id}
                  addon={addon}
                  isActive={selectedAddons.includes(addon.name)}
                  onSelect={() => {
                    if (selectedAddons.includes(addon.name)) {
                      setSelectedAddons(
                        selectedAddons.filter((name) => name !== addon.name)
                      );
                    } else {
                      setSelectedAddons([...selectedAddons, addon.name]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="block text-xl xl:text-[22px] max-w-[250px]  bg-blue text-white rounded-full text-center py-1 px-8">
              Natural Elements
            </span>
            <div className="flex mt-2 flex-row flex-wrap xl:flex-col gap-y-4 gap-x-4">
              {naturalElementsAddons.map((addon) => (
                <AddonButton
                  key={addon.id}
                  addon={addon}
                  isActive={selectedAddons.includes(addon.name)}
                  onSelect={() => {
                    if (selectedAddons.includes(addon.name)) {
                      setSelectedAddons(
                        selectedAddons.filter((name) => name !== addon.name)
                      );
                    } else {
                      setSelectedAddons([...selectedAddons, addon.name]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="block text-xl xl:text-[22px] max-w-[250px]  bg-blue text-white rounded-full text-center py-1 px-8">
              Urban Views
            </span>
            <div className="flex mt-2 flex-row flex-wrap xl:flex-col gap-y-4 gap-x-4">
              {urbanViewsAddons.map((addon) => (
                <AddonButton
                  key={addon.id}
                  addon={addon}
                  isActive={selectedAddons.includes(addon.name)}
                  onSelect={() => {
                    if (selectedAddons.includes(addon.name)) {
                      setSelectedAddons(
                        selectedAddons.filter((name) => name !== addon.name)
                      );
                    } else {
                      setSelectedAddons([...selectedAddons, addon.name]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="block text-xl xl:text-[22px] max-w-[250px] bg-blue text-white rounded-full text-center py-1 px-8">
              Navigation Points
            </span>
            <div className="flex mt-2 flex-row flex-wrap xl:flex-col gap-y-4 gap-x-4">
              {navigationPointsAddons.map((addon) => (
                <span
                  className={`border px-6 py-[6px] border-blue gap-x-2 rounded-full flex items-center justify-center 
                ${selectedAddons.includes(addon.name) ? 'bg-blue text-white' : 'bg-transparent text-blue'}`}
                  key={addon.id}
                  onClick={() => {
                    if (selectedAddons.includes(addon.name)) {
                      setSelectedAddons(
                        selectedAddons.filter((name) => name !== addon.name)
                      );
                    } else {
                      setSelectedAddons([...selectedAddons, addon.name]);
                    }
                  }}
                >
                  <addon.image
                    className={`w-[30px] h-[30px] ${selectedAddons.includes(addon.name) ? 'fill-white' : 'fill-blue'}`}
                  />
                  <p className="text-lg font-medium font-DMSans">
                    {addon.name}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mt-12 w-[480px] mx-auto items-center gap-x-4 pb-12">
          <Button text={t('cancel')} color="yellow" className="w-full" />
          <Button text={t('save')} className="w-full" />
        </div>
      </div>
    </>
  );
}

const AddonButton = ({ onSelect, isActive, addon }) => {
  return (
    <span
      onClick={onSelect}
      className={`border px-6 border-blue gap-x-2 rounded-full flex items-center justify-center 
        ${isActive ? 'bg-blue text-white' : 'bg-transparent text-blue'}`}
    >
      <img className="w-[42px] h-[42px]" src={addon.image} />
      <p className="text-lg font-medium font-DMSans">{addon.name}</p>
    </span>
  );
};
