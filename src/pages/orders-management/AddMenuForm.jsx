import { useMemo, useState } from 'react';
import { CancelCircleIcon } from '../../assets/globals/icons';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { Categories as categoryData } from '../../assets/globals/data/Categories';
import { MenuItems as menuItemData } from '../../assets/globals/data/MenuItems';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import { Switch } from '../../component/atoms/Switch';
import { CategorySelection } from '../../component/organisms/CategorySelection';
import { useTranslation } from 'react-i18next';

function AddMenuForm({ onClickCancel }) {
  const [data, setData] = useState({
    menuItem: null,
    quantity: null,
    isDelivered: false,
  });
  const [selectedCategoryType, setSelectedCategoryType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { t } = useTranslation();

  const categories = useMemo(
    () =>
      selectedCategoryType
        ? categoryData.filter(
            (category) => category.type === selectedCategoryType
          )
        : [],
    [selectedCategoryType]
  );

  const menuItems = useMemo(
    () =>
      selectedCategory.length
        ? menuItemData.filter(
            (menuItem) => menuItem.categoryId === selectedCategory[0].id
          )
        : [],
    [selectedCategory]
  );

  return (
    <>
      <div className="py-5 flex items-center justify-between">
        <h6 className="text-blue font-medium">
          {t('menuManagement.addMenuItem')}
        </h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <small className="font-semibold text-sm">
        {t('orderManagement.selectCategoryType')}
      </small>
      <div className="flex mt-2 items-center gap-x-6">
        <Button
          color={selectedCategoryType === 'food' ? 'blue' : 'transparent'}
          className="px-4"
          text={t('menuManagement.food')}
          onSubmit={() => setSelectedCategoryType('food')}
          size="small"
        />
        <Button
          color={selectedCategoryType === 'drinks' ? 'blue' : 'transparent'}
          className="px-4"
          text={t('menuManagement.drinks')}
          size="small"
          onSubmit={() => setSelectedCategoryType('drinks')}
        />
        <Button
          color={selectedCategoryType === 'desserts' ? 'blue' : 'transparent'}
          className="px-4"
          text={t('menuManagement.desserts')}
          size="small"
          onSubmit={() => setSelectedCategoryType('desserts')}
        />
      </div>

      {selectedCategoryType && (
        <div className="mt-6">
          <small className="font-semibold text-sm">
            {t('orderManagement.selectCategory')}
          </small>
          <CategorySelection
            className="mt-2"
            selectedCategories={selectedCategory}
            onSelectCategory={(newSelectedCategory) =>
              setSelectedCategory(newSelectedCategory)
            }
            categories={categories}
          />
        </div>
      )}

      <div>
        <DropDownInput
          className="mt-8"
          label={t('orderManagement.selectMenuItem')}
          dropdownStyle="top-[80px]"
          options={menuItems}
          selectedItem={data.menuItem}
          onSelectItem={(item) => setData({ ...data, menuItem: item })}
          isDisabled={menuItems.length === 0}
          placeholder={t('orderManagement.selectMenuItem')}
        />
        <Input
          isDisabled={data.menuItem == null}
          className="mt-5"
          label={t('orderManagement.quantity')}
          value={data.quantity}
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
          placeholder={t('orderManagement.enterQuantity')}
        />
      </div>
      <div className="mt-6">
        <small className="mt-6 font-semibold text-sm">{t('delivered')}</small>
        <Switch
          onToggle={(isActive) => setData({ ...data, isDelivered: isActive })}
          isActive={data.isDelivered}
          className="mt-2"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button className="w-[220px] px-4" text={t('add')} size="small" />
      </div>
    </>
  );
}

export default AddMenuForm;
