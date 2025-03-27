import { Button } from '../../../component/atoms/Button';
import { Input } from '../../../component/atoms/Input';
import { useTranslation } from 'react-i18next';

export function Form({
  newCategory,
  setNewCategory,
  onClickLeftButton,
  onClickRightButton,
  leftButtonText,
  rightButtonText,
  disableLeftButton,
  disableRightButton,
  editCategory,
}) {
  const { t } = useTranslation();

  return (
    <div className="">
      <Input
        value={newCategory.name ?? editCategory?.name}
        label={t('menuManagement.categoryName')}
        placeholder={t('menuManagement.categoryName')}
        className=""
        inputStyle="border-black border-opacity-20 !py-[7px]"
        onChange={(e) =>
          setNewCategory({ ...newCategory, name: e.target.value })
        }
      />
      <div
        className="flex lg:w-[70%] lg:mx-auto flex-row items-center 
        gap-x-4 xl:gap-x-8 2xl:gap-x-12 mt-10 xl:mt-12"
      >
        <Button
          type="button"
          size="base"
          text={leftButtonText}
          className="w-full"
          isDisabled={disableLeftButton}
          onSubmit={onClickLeftButton}
        />
        <Button
          type="button"
          size="base"
          color="yellow"
          text={rightButtonText}
          className="w-full"
          isDisabled={disableRightButton}
          onSubmit={onClickRightButton}
        />
      </div>
    </div>
  );
}
