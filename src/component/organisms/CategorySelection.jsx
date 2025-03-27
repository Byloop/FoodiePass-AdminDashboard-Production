export function CategorySelection({
  categories,
  selectedCategories,
  onSelectCategory,
  multiple,
  className,
}) {
  return (
    <div
      className={`flex flex-row flex-wrap items-center gap-x-3 gap-y-3 ${className}`}
    >
      {categories.map((category) => {
        const isSelected = selectedCategories.some(
          (selectedCategory) => selectedCategory.id === category.id
        );

        return (
          <button
            key={category.id}
            className={`${isSelected ? 'bg-blue text-white border border-blue' : 'border-blue bg-transparent text-blue'} 
            px-3 lg:px-4 rounded-full text-[14px] lg:text-base 
            xl:text-lg py-[6px] lg:py-2 font-DMSans font-medium border
            transition-all duration-100 ease-in-out`}
            onClick={() => {
              if (multiple) {
                if (isSelected) {
                  const filteredCategories = selectedCategories.filter(
                    (selectedCategory) => selectedCategory.id !== category.id
                  );
                  onSelectCategory(filteredCategories);
                } else {
                  onSelectCategory([...selectedCategories, category]);
                }
              } else {
                if (isSelected) {
                  onSelectCategory([]);
                } else {
                  onSelectCategory([category]);
                }
              }
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
