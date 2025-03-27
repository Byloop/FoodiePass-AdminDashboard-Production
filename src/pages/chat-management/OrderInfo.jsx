import Table from '../../assets/chat-management/icons/table.svg';
import Watch from '../../assets/chat-management/icons/watch.svg';
import Calender from '../../assets/chat-management/icons/calender.svg';
import Price from '../../assets/chat-management/icons/price.svg';
import Diners from '../../assets/chat-management/icons/diners.svg';

export function OrderInfo({ date, time, pax, price, table }) {
  return (
    <>
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-1">
          <img src={Calender} alt="" />
          <small className="text-black text-opacity-50 text-[14px]">
            {date}
          </small>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={Watch} alt="" />
          <small className="text-black text-opacity-50 text-sm">{time}</small>
        </div>
      </div>
      <div
        className={`flex items-center ${table ? 'justify-between' : 'gap-x-3'}`}
      >
        {table && (
          <div className="flex items-center gap-x-1">
            <img src={Table} />
            <small className="text-sm text-black text-opacity-50 ">
              {table.name}
            </small>
          </div>
        )}
        <div className="flex items-center gap-x-1">
          <img src={Diners} />
          <small className="text-sm text-black text-opacity-50 ">{pax}</small>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={Price} alt="" />
          <small className="text-sm text-black text-opacity-50 ">{`$${price}`}</small>
        </div>
      </div>
    </>
  );
}
