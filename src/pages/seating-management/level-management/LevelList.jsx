import { Button } from '../../../component/atoms/Button';
import { AddIcon } from '../../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { Levels } from '../../../assets/globals/data/levelData';
import { EmptyContainer } from '../../../component/organisms/EmptyContainer';
import { Switch } from '../../../component/atoms/Switch';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

export function LevelList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onEditLevel = (level) => {
    console.log('edit level', level);
    navigate('edit-level', {
      state: { level },
    });
  };

  const onDeleteLevel = (levelId) => {
    console.log('delete level', levelId);
  };

  const onDisableLevel = (levelId, isActive) => {
    console.log('disable level', { id: levelId, isActive });
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-blue">{t('levelManagement.levels')}</h5>
        <Button
          className="px-4 font-semibold py-[10px]"
          text={t('levelManagement.addNewLevel')}
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={() => navigate('add-level')}
        />
      </div>
      {Levels.length === 0 ? (
        <div
          className="bg-white flex flex-col items-center justify-center mt-6 rounded-2xl  
      border border-black border-opacity-10 w-full"
        >
          <EmptyContainer className="h-[300px]" buttonText="Add New Category" />
        </div>
      ) : (
        <div className="flex mt-6 gap-x-4 gap-y-4 flex-row flex-wrap">
          {Levels.map((level) => (
            <Card
              onEdit={onEditLevel}
              onDelete={onDeleteLevel}
              onDisable={onDisableLevel}
              key={level.id}
              level={level}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Card = ({ onEdit, onDelete, onDisable, level }) => {
  const { name, image, numberOfTable, isActive, id } = level;
  const { t } = useTranslation();

  return (
    <div className="w-[86%] lg:w-[455px] xl:w-[480px] xlg:w-[520px] h-[220px] bg-white border rounded-xl py-4 px-4 flex gap-x-6">
      <div className="w-[340px] rounded-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h6 className="font-medium text-xl text-blue">
              {t('levelManagement.location')}
            </h6>
            <p className="font-DMSans font-medium text-lg">{name}</p>
          </div>

          <Switch
            isActive={isActive}
            className="!w-[54px] !h-[26px]"
            toggleStyle="!w-[19px] !h-[19px]"
            onToggle={() => onDisable(id, !isActive)}
          />
        </div>

        <div>
          <h6 className="font-medium text-xl text-blue">
            {t('levelManagement.numberOfTables')}
          </h6>
          <p className="font-DMSans font-medium text-lg">{numberOfTable}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            text={t('edit')}
            size="small"
            className="w-full !py-[6px]"
            onSubmit={() => onEdit(level)}
          />
          <Button
            text={t('delete')}
            size="small"
            color="lightBlue"
            onSubmit={() => onDelete(id)}
            className="w-full !py-[6px]"
          />
        </div>
      </div>
    </div>
  );
};
