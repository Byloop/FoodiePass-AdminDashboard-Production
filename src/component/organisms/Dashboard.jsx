import { useState } from 'react';
import { RestaurantSidebar } from './RestaurantSidebar';
import { AdminSidebar } from './AdminSidebar';
import { Header } from './Header';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[url('assets/main/background.png')] bg-cover bg-no-repeat">
      <div
        className={`${toggle ? 'w-[6%]' : 'w-[10%] lg:w-[6%] xl:w-[19%] xlg:w-[22%] 2xl:w-[20%]'} transition-all duration-200 ease-linear h-screen sidebar 
        overflow-y-auto border-r border-gray1 shadow-[0.5px_0px_17px_0px_#e7e3e3] bg-white fixed top-0`}
      >
        <AdminSidebar />
      </div>
      <section
        className={`${
          toggle
            ? 'w-[94%] ml-[6%]'
            : 'w-[90%] lg:w-[94%] xl:w-[81%] xlg:w-[78%] 2xl:w-[80%] ml-[10%] lg:ml-[6%] xl:ml-[19%] xlg:ml-[22%] 2xl:ml-[20%]'
        } 
        transition-all duration-200 ease-linear`}
      >
        <div
          className={`${toggle ? 'w-[94%]' : 'w-[90%] lg:w-[94%] xl:w-[81%] xlg:w-[78%] 2xl:w-[80%]'} fixed top-0 z-50`}
        >
          <Header />
        </div>
        <div className="mt-[100px] pb-10">
          {location.pathname === '/' ? (
            <Navigate to="/dashboard" />
          ) : (
            <Outlet />
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
