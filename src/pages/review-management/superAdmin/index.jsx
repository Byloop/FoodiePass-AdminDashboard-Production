import { Outlet, Navigate, useLocation } from 'react-router-dom';

function ReviewManagement() {
  const location = useLocation();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="">
        {location.pathname === '/reviews-management' ? (
          <Navigate to="all" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default ReviewManagement;
