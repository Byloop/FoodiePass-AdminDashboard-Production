import { SearchInput } from '../../../component/atoms/SearchInput';
import { CategorySelection } from '../../../component/organisms/CategorySelection';

export function SearchCategory({
  onSearch,
  className,
  searchedCategories,
  selectedCategories,
  onSelectCategory,
}) {
  return (
    <div className={`${className}`}>
      <SearchInput
        className="!py-[6px] hover:border-blue"
        focusStyle="!border-blue !border-opacity-100"
        onSearch={onSearch}
        iconStyle="!w-[16px] !h-[16px]"
      />
      <div className="mt-4">
        <CategorySelection
          categories={searchedCategories}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
          multiple={false}
        />
      </div>
    </div>
  );
}
