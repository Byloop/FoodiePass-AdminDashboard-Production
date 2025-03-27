import { Sidebar } from './Sidebar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6 gap-x-[2%] flex bg-transparent">
      <div
        className="w-[35%] lg:w-[34%] xl:w-[29%] xlg:w-[27%] pt-10 border border-black border-opacity-10 bg-white rounded-2xl
      min-h-[550px]"
      >
        <Sidebar />
      </div>
      <div
        className="w-[63%] lg:w-[64%] xl:w-[69%] xlg:w-[71%] py-10 px-4 lg:px-8 rounded-2xl border border-black border-opacity-10 
       bg-white bg-[url('assets/profile/background.png')] bg-cover bg-no-repeat"
      >
        {location.pathname === '/profile' ? (
          <Navigate to="personal-information" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
export default Profile;
