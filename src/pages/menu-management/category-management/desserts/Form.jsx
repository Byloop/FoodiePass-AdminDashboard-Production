import { useState, useMemo } from 'react';
import { Form } from '../Form';
import { LayoutWithImageUpload } from '../../../../component/organisms/LayoutWithImageUpload';
import { SearchCategory } from '../SearchCategory';
import { useLocation } from 'react-router-dom';
import { Categories } from '../../../../assets/globals/data/Categories';
import { useTranslation } from 'react-i18next';

const drinkCategories = Categories.filter(
  (category) => category.type === 'desserts'
);

export function DessertCategoryForm() {
  const [newCategory, setNewCategory] = useState({ name: null, image: null });
  const [selectedCategory, setSelectedCategory] = useState([]);
  const location = useLocation();
  const { t } = useTranslation();

  const editCategory = useMemo(() => {
    if (location?.state?.category) {
      return location.state.category;
    }
    return null;
  }, [location]);

  const onSelectExistingCategory = () => {
    console.log('select existing category', selectedCategory);
  };

  const onCreateNewCategory = () => {
    console.log('create a new category', newCategory);
  };

  const onEditCategory = () => {
    console.log('edited a category', newCategory);
  };

  const onDiscardChanges = () => {
    setNewCategory({ name: null, image: null });
  };

  return (
    <LayoutWithImageUpload
      selectedImage={
        newCategory.image
          ? URL.createObjectURL(newCategory.image)
          : editCategory?.image
      }
      onSelectImage={(file) => setNewCategory({ ...newCategory, image: file })}
      heading={t('menuManagement.categories')}
      leftContainerStyle="w-[60%] lg:w-[72%] xlg:w-[75%]"
      rightContainerStyle="w-[39%] lg:w-[27%] xlg:w-[24%]"
    >
      {!editCategory && (
        <SearchCategory
          onSearch={(searchKey) => console.log('search key', searchKey)}
          selectedCategories={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchedCategories={drinkCategories}
        />
      )}
      <div className={`${editCategory ? 'mt-0' : 'mt-6'}`}>
        <Form
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          onClickLeftButton={() =>
            editCategory ? onDiscardChanges() : onSelectExistingCategory()
          }
          onClickRightButton={() =>
            editCategory ? onEditCategory() : onCreateNewCategory()
          }
          leftButtonText={editCategory ? t('discardChanges') : t('confirm')}
          rightButtonText={
            editCategory ? t('saveChanges') : t('menuManagement.createNew')
          }
          disableLeftButton={!editCategory && selectedCategory.length === 0}
          disableRightButton={
            !editCategory && (!newCategory.name || !newCategory.image)
          }
          editCategory={editCategory}
        />
      </div>
    </LayoutWithImageUpload>
  );
}
