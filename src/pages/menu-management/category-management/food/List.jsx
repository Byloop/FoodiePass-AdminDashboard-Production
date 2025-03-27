import { CategoryList } from '../CategoryList';
import { ModalLayout } from '../../../../component/organisms/ModalLayout';
import { MenuItemList } from '../../MenuItemList';
import { useState } from 'react';
import { Categories } from '../../../../assets/globals/data/Categories';

const foodCategories = Categories.filter(
  (category) => category.type === 'food'
);

export function FoodCategoryList() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onOpenMenu = (category) => {
    setShowMenu(true);
    setSelectedCategory(category);
  };

  return (
    <div className="">
      <ModalLayout
        showModal={showMenu}
        className=""
        modalStyle="w-[610px] xl:!w-[758px] xlg:!w-[1020px] h-[70%] xl:h-[90%] xlg:h-[85%]
        overflow-hidden py-3 !rounded-xl"
      >
        <MenuItemList
          category={selectedCategory}
          onClickCancel={() => setShowMenu(false)}
        />
      </ModalLayout>

      <CategoryList
        onClickCard={onOpenMenu}
        categories={foodCategories}
        type="food"
      />
    </div>
  );
}
