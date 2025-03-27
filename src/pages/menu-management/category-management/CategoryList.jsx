import { useState } from 'react';
import { Button } from '../../../component/atoms/Button';
import {
  OptionsIcon,
  EditIcon,
  CancelCircleIcon,
  DeleteIcon,
  DisableIcon,
  AddIcon,
} from '../../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { EmptyContainer } from '../../../component/organisms/EmptyContainer';
import { useTranslation } from 'react-i18next';

const icons = {
  editIcon: EditIcon,
  deleteIcon: DeleteIcon,
  disableIcon: DisableIcon,
  addIcon: AddIcon,
};

export function CategoryList({ categories, type, onClickCard }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const editCategory = (category) => {
    navigate('edit-category', {
      state: { category },
    });
  };

  const deleteCategory = (categoryId) => {
    console.log('delete category', categoryId);
  };

  const disableCategory = (categoryId) => {
    console.log('disable category', categoryId);
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-blue">
          {t('menuManagement.categories')}
        </h5>
        <Button
          className="px-4 font-semibold py-[10px]"
          text={t('menuManagement.addNewCategory')}
          icon={icons.addIcon}
          iconStyle="!w-[20px] !h-[20px]"
          size="base"
          color="yellow"
          onSubmit={() => navigate('add-category')}
        />
      </div>
      {categories.length === 0 ? (
        <div
          className="bg-white flex flex-col items-center justify-center mt-6 rounded-2xl  
        border border-black border-opacity-10 w-full"
        >
          <EmptyContainer className="h-[300px]" buttonText="Add New Category" />
        </div>
      ) : (
        <div className="flex mt-6 gap-x-4 gap-y-4 flex-row flex-wrap">
          {categories.map((category) => (
            <Card
              onEdit={editCategory}
              onDelete={deleteCategory}
              onDisable={disableCategory}
              key={category.id}
              category={category}
              categoryType={type}
              onClick={onClickCard}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({
  category,
  categoryType,
  onEdit,
  onDelete,
  onDisable,
  onClick,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const { name, image, id } = category;
  const { t } = useTranslation();

  return (
    <span
      className="flex cursor-pointer flex-col items-center"
      key={category.id}
      onClick={() => onClick(category)}
    >
      <div
        className={`w-[209px] lg:w-[220px] xlg:w-[240px] h-[200px] lg:h-[200px] xlg:h-[210px] flex items-center justify-center 
          rounded-[26px] group border border-black border-opacity-10 relative transition-all duration-300 
          ease-linear bg-blue bg-opacity-10
            ${
              showOptions
                ? 'shadow-[9px_9px_15px_0px_#37363624]'
                : 'hover:bg-white hover:shadow-[9px_9px_15px_0px_#37363624] hover:bg-opacity-100'
            }`}
      >
        <div
          className={`bg-white transition-all duration-300 ease-linear flex items-center justify-center rounded-full 
            w-[145px] h-[145px] lg:w-[150px] lg:h-[150px] xlg:w-[160px] xlg:h-[160px] 
            ${
              showOptions
                ? ''
                : `group-hover:w-[158px] group-hover:h-[158px] lg:group-hover:w-[160px] lg:group-hover:h-[160px] 
                xlg:group-hover:w-[185px] xlg:group-hover:h-[185px] 
                group-hover:bg-blue group-hover:bg-opacity-10`
            }`}
        >
          <img
            className={`bg-cover ${categoryType === 'drinks' ? 'w-auto h-[75%] xlg:h-[85%]' : 'w-[70%] h-auto'} 
                  ${showOptions ? '-translate-y-[30%]' : 'translate-y-0'} transition-all duration-300 ease-linear`}
            src={image}
            alt={name}
          />
        </div>
        <div className="">
          <div
            className={`w-full bg-white/20 shadow-[2px_-8px_7px_0px_#7f7b7b33]
                backdrop-blur-[4px] h-[65%] rounded-[26px] absolute bottom-0 left-0 
                ${
                  showOptions
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none translate-y-[20%]'
                } delay-100 
                transition-all duration-200 ease-linear`}
          >
            <div className="flex gap-y-2 flex-col h-full justify-end pb-4 px-4 relative">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOptions(false);
                }}
                className="absolute cursor-pointer top-3 right-2"
              >
                <CancelCircleIcon className="w-[28px] h-[28px] fill-[#00000080]" />
              </span>
              <Button
                text={t('disable')}
                color="blue"
                size="small"
                icon={icons.disableIcon}
                iconStyle="!w-[18px] !h-[18px]"
                className="px-4 w-fit !py-2 text-sm"
                onSubmit={(e) => {
                  e.stopPropagation();
                  onDisable(id);
                }}
              />
              <div className="flex mt-1 gap-x-2 items-center">
                <Button
                  text={t('delete')}
                  color="blue"
                  icon={icons.deleteIcon}
                  iconStyle="w-[16px] h-[16px] !xlg:w-[18px] !xlg:h-[18px]"
                  size="small"
                  className="px-3 xlg:px-4 !py-2 text-sm"
                  onSubmit={(e) => {
                    e.stopPropagation();
                    onDelete(id);
                  }}
                />
                <Button
                  text={t('edit')}
                  icon={icons.editIcon}
                  iconStyle="w-[12px] h-[12px] !xlg:w-[15px] !xlg:h-[15px]"
                  color="blue"
                  size="small"
                  className="px-3 xlg:px-4 !py-2 text-sm"
                  onSubmit={(e) => {
                    e.stopPropagation();
                    onEdit(category);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowOptions(true);
          }}
          className="absolute cursor-pointer z-10 top-3 right-2"
        >
          <OptionsIcon className="w-[19px] h-[19px] fill-[#00000099]" />
        </span>
      </div>
      <h5 className="font-semibold mt-4">{name}</h5>
    </span>
  );
}
