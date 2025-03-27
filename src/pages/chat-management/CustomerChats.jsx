import { useState, useMemo } from 'react';
import { ChatMainView } from './ChatMainView';
import { SearchInput } from '../../component/atoms/SearchInput';
import { CustomerChatCard } from './CustomerChatCard';
import { orders } from '../../assets/globals/data/Orders';
import { OrderInfo } from './OrderInfo';
import { ExclamationIcon } from '../../assets/globals/icons';
import ProfileImage from '../../assets/globals/profile-image-placeholder.png';
import { Button } from '../../component/atoms/Button';
import { ServiceDropdown } from './ServiceDropdown';

const Header = ({ selectedChat }) => {
  const { user, date, startTime, table, price, pax } = selectedChat;
  return (
    <div
      className="bg-lightBlue flex items-center justify-between 
    gap-x-4 py-4 px-4"
    >
      <div className="flex items-center gap-x-4">
        <img
          src={ProfileImage}
          alt=""
          className="w-[50px] h-[50px] 
      rounded-full border border-black border-opacity-10"
        />
        <div className="flex flex-col gap-y-1">
          <small className="">{user.fullName}</small>
          <OrderInfo
            date={date}
            time={startTime}
            table={table}
            price={price}
            pax={pax}
          />
        </div>
      </div>
      <Button className="px-4" size="small" text="Report" color="transparent" />
    </div>
  );
};

function CustomerChats() {
  const [selectedChat, setSelectedChat] = useState();
  const [filters, setFilters] = useState({
    date: null,
    service: { id: 1, key: 'View All', value: 'view-all' },
  });

  const isTodaySelected = useMemo(
    () => filters.date?.toDateString?.() === new Date().toDateString(),
    [filters.date]
  );

  const tomorrowDate = useMemo(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }, []);

  const isTomorrowSelected = useMemo(
    () => filters.date?.toDateString?.() === tomorrowDate.toDateString(),
    [filters.date, tomorrowDate]
  );

  return (
    <>
      <div
        className="flex flex-col lg:flex-row lg:items-center my-6 gap-y-6 
      lg:justify-between"
      >
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">Total Chats</h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">
            {orders.length}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4"
            size="small"
            text="Today"
            onSubmit={() => {
              setFilters({
                ...filters,
                date: isTodaySelected ? '' : new Date(),
              });
            }}
            color={isTodaySelected ? 'yellow' : 'grey'}
          />
          <Button
            className="px-4"
            size="small"
            color={isTomorrowSelected ? 'yellow' : 'grey'}
            text="Tomorrow"
            onSubmit={() =>
              setFilters({
                ...filters,
                date: isTomorrowSelected ? '' : tomorrowDate,
              })
            }
          />
          <ServiceDropdown
            onSelectService={(selected) =>
              setFilters({
                ...filters,
                service: selected,
              })
            }
            selectedService={filters.service}
          />
        </div>
      </div>
      <div className="flex gap-x-5 mt-6 items-stretch">
        <div
          className="w-[52%] border border-black border-opacity-10 
      bg-white rounded-md pt-4 px-2"
        >
          <SearchInput className="py-2" />
          <div
            className="mt-6 h-[calc(100vh-200px)] max-h-[600px]
        overflow-y-auto hide-scrollbar flex flex-col gap-y-5 pb-4"
          >
            {orders.map((order) => {
              return (
                <CustomerChatCard
                  onClick={(selectedOrder) => setSelectedChat(selectedOrder)}
                  chat={order}
                  selected={selectedChat}
                  key={order.key}
                />
              );
            })}
          </div>
        </div>

        {selectedChat ? (
          <div className="w-[86%]">
            <ChatMainView
              headerComp={() => <Header selectedChat={selectedChat} />}
            />
          </div>
        ) : (
          <div
            className="bg-white border border-black border-opacity-10 
          rounded-md w-[86%] 
        flex flex-col gap-y-2 items-center justify-center"
          >
            <ExclamationIcon className="w-[100px] h-[100px] fill-blue" />
            <small className="block">No info in this section</small>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomerChats;
