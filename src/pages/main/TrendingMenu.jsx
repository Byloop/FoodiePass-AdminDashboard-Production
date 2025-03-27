import { TrendingMenuCard } from './TrendingMenuCard';
import { Button } from '../../component/atoms/Button';
import PizzaImage from '../../assets/main/pizza.png';
import { useTranslation } from 'react-i18next';

const trendingMenus = [
  {
    id: 1,
    title: 'Mushroom Pizza',
    price: '7.45',
    quantity: 10,
    image: PizzaImage,
  },
  {
    id: 2,
    title: 'Italian Pizza',
    price: '8.2',
    quantity: 4,
    image: PizzaImage,
  },
  {
    id: 3,
    title: 'Sausage Pizza',
    price: '2.3',
    quantity: 5,
    image: PizzaImage,
  },
];

export function TrendingMenu() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full border border-black border-opacity-10 bg-white rounded-3xl px-3
    2xl:px-6 py-6"
    >
      <h5 className="font-medium">{t('home.dailyTrendingMenus')}</h5>
      <div className="w-full h-[1px] bg-[#E3E1E1] mt-4" />
      <div className="flex flex-col gap-y-4 mt-6">
        {trendingMenus.map((dish) => (
          <TrendingMenuCard key={dish.id} dish={dish} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="px-4 mt-8 font-medium"
          text={t('checkout')}
          color="yellow"
          size="large"
          type="button"
        />
      </div>
    </div>
  );
}
