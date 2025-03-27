import { useState, useMemo, useEffect } from 'react';
import { Button } from '../../component/atoms/Button';
import { Categories } from '../../assets/globals/data/Categories';
import { MenuItems } from '../../assets/globals/data/MenuItems';
import { CheckIcon } from '../../assets/globals/icons';
import { SearchInput } from '../../component/atoms/SearchInput';
import { useTranslation } from 'react-i18next';

const MenuItemList = ({ categoryId, onSelectMenuItem, selectedMenuItem }) => {
  const menuItems = useMemo(() => {
    return MenuItems.filter((menuItem) => menuItem.categoryId === categoryId);
  }, [categoryId]);

  return (
    <div className="flex mt-6 gap-x-4 gap-y-6 flex-row flex-wrap">
      {menuItems.map((item) => (
        <div
          className="w-[180px] cursor-pointer xl:w-[230px] h-[280px] xl:h-[340px] rounded-lg relative"
          key={item.id}
        >
          <span onClick={() => onSelectMenuItem(item.id)}>
            <div className="h-[86%] cursor-pointer">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
          </span>
          <h5 className="text-blue text-center font-medium mt-2 text-xl xl:text-2xl">
            {item.name}
          </h5>
          <div className="absolute flex flex-col gap-y-2 bg-transparent top-2 right-1 xl:right-2">
            <span
              className={`cursor-pointer flex items-center justify-center 
                rounded-full 
                    w-[30px] xl:w-[35px] h-[30px] xl:h-[35px] 
                    ${
                      selectedMenuItem === item.id
                        ? 'bg-green'
                        : 'bg-black bg-opacity-50'
                    }`}
            >
              <CheckIcon className="w-[15px] xl:w-[18px] h-[15px] xl:h-[18px]" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

function MenuItemSelection({ title, onSelectMenuItem, selectedMenuItem }) {
  const [selectedCategoryType, setSelectedCategoryType] = useState('food');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t } = useTranslation();

  const categories = useMemo(
    () =>
      Categories.filter((category) => category.type === selectedCategoryType),
    [selectedCategoryType]
  );

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  return (
    <div className="mt-6">
      <small>{title}</small>
      <div className="border border-blue rounded-md">
        <div
          className="bg-lightBlue py-4 flex items-center 
        justify-center gap-x-10"
        >
          <Button
            color={`${selectedCategoryType === 'food' ? 'blue' : 'transparent'}`}
            className="w-[100px] !py-[6px]"
            text={t('menuManagement.food')}
            onSubmit={() => setSelectedCategoryType('food')}
            size="small"
          />
          <Button
            color={`${selectedCategoryType === 'drinks' ? 'blue' : 'transparent'}`}
            className="w-[100px] !py-[6px]"
            text={t('menuManagement.drinks')}
            onSubmit={() => setSelectedCategoryType('drinks')}
            size="small"
          />
          <Button
            color={selectedCategoryType === 'desserts' ? 'blue' : 'transparent'}
            className="w-[100px] !py-[6px]"
            onSubmit={() => setSelectedCategoryType('desserts')}
            text={t('menuManagement.desserts')}
            size="small"
          />
        </div>
        <div className="flex max-h-[700px]">
          <div className="w-[20%] overflow-y-scroll px-4 py-4 border-r border-black border-opacity-10 ">
            <h6 className="text-blue">{t('profile.foodCategory')}</h6>
            <div className="flex mt-2 flex-col gap-y-2">
              {categories.map((category) => (
                <small
                  className={`w-fit cursor-pointer ${
                    selectedCategory === category.id
                      ? 'text-blue'
                      : 'text-black'
                  }`}
                  key={category.id}
                >
                  <span
                    className=""
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </span>
                  {selectedCategory === category.id && (
                    <span className="h-[1.4px] mt-[2px] block w-full bg-blue" />
                  )}
                </small>
              ))}
            </div>
          </div>
          <div className="w-[80%] overflow-y-scroll py-4 px-4">
            <SearchInput className="py-2" />
            <MenuItemList
              onSelectMenuItem={onSelectMenuItem}
              selectedMenuItem={selectedMenuItem}
              categoryId={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemSelection;
