import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { Link } from '../../component/atoms/Link';

function ChatManagement() {
  const location = useLocation();
  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-white w-full flex items-center justify-center h-[60px] border border-black border-opacity-10 rounded-full">
        <div className="flex items-center gap-x-20 px-4">
          <Link
            text="Foodie Pass"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="foodie-pass-chats"
            className="!py-[7px] min-w-[160px]"
          />
          <Link
            text="Customers"
            iconStyle="!w-[20px] !h-[20px] fill-blue"
            color="lightBlue"
            activeState="blue"
            size="base"
            navigateTo="customers-chats"
            className="!py-[7px] min-w-[160px]"
          />
        </div>
      </div>
      <div className="">
        {location.pathname === '/chat-management' ? (
          <Navigate to="foodie-pass-chats" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default ChatManagement;
