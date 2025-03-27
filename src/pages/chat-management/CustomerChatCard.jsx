import { Button } from '../../component/atoms/Button';
import ProfileImage from '../../assets/globals/profile-image-placeholder.png';
import { OrderInfo } from './OrderInfo';

export function CustomerChatCard({ chat, onClick, selected }) {
  const { user, date, startTime, price, table, pax } = chat;
  return (
    <span
      onClick={() => onClick(chat)}
      className={`flex items-center border cursor-pointer ${
        selected?.id === chat.id
          ? 'border-blue'
          : ' border-black border-opacity-10'
      } 
        rounded-md justify-between px-3 py-2 `}
    >
      <img
        src={ProfileImage}
        alt=""
        className="w-[60px] h-[60px] rounded-full border 
      border-black border-opacity-10"
      />
      <div
        className="border-r-[1px] flex flex-col gap-y-1 
      border-opacity-20 border-black pr-4"
      >
        <small className="">{user.fullName}</small>
        <OrderInfo
          date={date}
          time={startTime}
          pax={pax}
          price={price}
          table={table}
        />
      </div>
      <div className=" flex flex-col items-center gap-y-1">
        <small className="text-sm block">Order</small>
        <small className="text-sm">12345</small>
        <Button className="px-3 !py-[5px] text-sm" size="small" text="View" />
      </div>
    </span>
  );
}
