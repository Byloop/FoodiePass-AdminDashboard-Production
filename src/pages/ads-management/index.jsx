import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { Link } from '../../component/atoms/Link';

function AdsManagement() {
  const location = useLocation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div
        className="bg-white w-full flex items-center justify-center h-[60px] border border-black 
              border-opacity-10 rounded-full"
      >
        <div className="flex items-center justify-between px-4 gap-x-20">
          <Link
            text="Home View Ads"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="home-view-ads"
            className="!py-[7px] min-w-[200px]"
          />
          <Link
            text="Promotions View Ads"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="promotions-view-ads"
            className="!py-[7px] min-w-[230px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/ads-management' ? (
          <Navigate to="home-view-ads" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default AdsManagement;
