import { Banner } from './Banner';
import { InfoCard } from './InfoCard';
import { OrderAnalysis } from '../../component/organisms';
import { TrendingMenu } from './TrendingMenu';
import { MenuCategory } from './MenuCategory';
import { MonthlyRevenueComparison } from '../../component/organisms';
import { BookingChart } from './BookingChart';

import OrderIcon from '../../assets/main/info-section/orders-icon.svg';
import BookingIcon from '../../assets/main/info-section/bookings-icon.svg';
import RevenueIcon from '../../assets/main/info-section/revenues-icon.svg';
import cardBg1 from '../../assets/main/info-section/card-bg-1.png';
import cardBg2 from '../../assets/main/info-section/card-bg-2.png';
import cardBg3 from '../../assets/main/info-section/card-bg-3.png';

function Main() {
  return (
    <div className="pt-6 px-4 overflow-y-auto dashboard-main-content">
      <Banner />

      {/* Desktop View Start */}
      <div className="hidden lg:grid lg:grid-cols-3 2xl:grid-cols-[380px_380px_380px] mt-6 gap-x-4">
        {info.map((item) => (
          <InfoCard key={item.id} item={item} />
        ))}
      </div>

      <div className="w-full hidden lg:flex gap-x-[2%] z-10 mt-8">
        <div className="w-[60%] xl:w-[59%] xlg:w-[58%] h-[600px]">
          <MenuCategory />
          <div className="mt-6">
            <MonthlyRevenueComparison />
          </div>
          <div className="mt-6">
            <BookingChart />
          </div>
        </div>
        <div className="w-[38%] xl:w-[39%] xlg:w-[40%]">
          <OrderAnalysis
            totalOrder={10000}
            cancelledOrder={2000}
            completedOrder={6000}
            newOrder={35}
          />
          <div className="mt-6">
            <TrendingMenu />
          </div>
        </div>
      </div>
      {/* Desktop View End */}

      {/* Tablet View Start */}
      <div className="flex lg:hidden gap-x-[2%] mt-6">
        <div className="w-[47%] grid gap-y-4">
          {info.map((item) => (
            <InfoCard key={item.id} item={item} />
          ))}
        </div>

        <div className="w-[51%]">
          <TrendingMenu />
        </div>
      </div>

      <div className="mt-8 lg:hidden">
        <MenuCategory />
        <div className="mt-8">
          <OrderAnalysis
            totalOrder={10000}
            cancelledOrder={2000}
            completedOrder={6000}
            newOrder={35}
          />
        </div>

        <div className="mt-6">
          <MonthlyRevenueComparison />
        </div>
        <div className="mt-6">
          <BookingChart />
        </div>
      </div>
      {/* Tablet View End */}
    </div>
  );
}

export default Main;

const info = [
  {
    id: 1,
    title: 'home.totalOrders',
    image: OrderIcon,
    number: '1,500',
    percentage: '15% +',
    cardBg: cardBg1,
  },
  {
    id: 2,
    title: 'home.totalBookings',
    image: BookingIcon,
    number: '1,000',
    percentage: '10% +',
    cardBg: cardBg2,
  },
  {
    id: 3,
    title: 'home.totalRevenue',
    image: RevenueIcon,
    number: '$30,000',
    percentage: '12% +',
    cardBg: cardBg3,
  },
];
