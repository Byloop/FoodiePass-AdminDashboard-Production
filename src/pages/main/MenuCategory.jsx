import VeggieIcon from '../../assets/main/categories-section/veggies-icon.png';
import PizzaIcon from '../../assets/main/categories-section/pizza-icon.png';
import FruitIcon from '../../assets/main/categories-section/fruits-icon.png';
import SnackIcon from '../../assets/main/categories-section/snacks-icon.png';
import HotdogIcon from '../../assets/main/categories-section/hotdog-icon.png';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { CategoryCard } from './CategoryCard';
import { useTranslation } from 'react-i18next';

const categories = [
  { id: 1, name: 'Pizza', image: PizzaIcon },
  { id: 2, name: 'Fruits', image: FruitIcon },
  { id: 3, name: 'Snacks', image: SnackIcon },
  { id: 4, name: 'Veggies', image: VeggieIcon },
  { id: 5, name: 'Hotdog', image: HotdogIcon },
];

export function MenuCategory() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-between">
        <h5 className="font-semibold">{t('home.menuCategory')}</h5>

        <span className="font-DMSans cursor-pointer hover:text-blue gap-x-2 flex items-center font-semibold text-base">
          {t('viewAll')}
          <span className="bg-yellow p-[6px] flex items-center justify-center rounded-full">
            <ChevronDownIcon className="w-[12px] -rotate-90 h-[12px] fill-black" />
          </span>
        </span>
      </div>

      <div className="flex flex-row justify-between mt-6 gap-x-2 2xl:gap-x-3 gap-y-2 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} item={category} />
        ))}
      </div>
    </>
  );
}
