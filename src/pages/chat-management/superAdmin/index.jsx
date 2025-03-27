import { useState } from 'react';
import { ChatMainView } from '../ChatMainView';
import { SearchInput } from '../../../component/atoms/SearchInput';
import { ExclamationIcon } from '../../../assets/globals/icons';
import { RestaurantChatCard } from './RestaurantChatCard';

const chats = [
  {
    id: 1,
    restaurant: {
      name: 'The Italian Job',
      phoneNumber: '+34 612 345 678',
      email: 'theitalianjob188@mail.com',
    },
    chatMessages: [
      { id: 1, message: 'Hello', time: '' },
      {
        id: 2,
        message: 'Is there anything I can help? Just',
        time: '10-07-24',
      },
    ],
  },
  {
    id: 2,
    restaurant: {
      name: 'Orange Restaurent',
      phoneNumber: '+34 612 345 678',
      email: 'orangeRestaurants@mail.com',
    },
    chatMessages: [
      { id: 1, message: 'Hello', time: '' },
      { id: 2, message: 'Thank you very much. I’m glad.', time: '11-12-24' },
    ],
  },
  {
    id: 3,
    restaurant: {
      name: 'Food & Drink Pub',
      phoneNumber: '+34 612 345 678',
      email: 'food&drinkpub@mail.com',
    },
    chatMessages: [
      { id: 1, message: 'Hello', time: '' },
      { id: 2, message: 'Sure! let me teach you about', time: '12-12-24' },
    ],
  },
];

const Header = ({ selectedChat }) => {
  const { restaurant } = selectedChat;
  return (
    <div
      className="bg-lightBlue flex items-center justify-between 
            gap-x-4 py-4 px-4"
    >
      <div className="flex items-center gap-x-4">
        <img
          src=""
          alt=""
          className="w-[50px] h-[50px] 
              rounded-full border border-black border-opacity-10"
        />
        <div className="flex flex-col gap-y-1">
          <small className="">{restaurant.name}</small>
          <div className="flex items-center gap-x-4">
            <small className="text-sm">{restaurant.phoneNumber}</small>
            <div className="w-[1px] h-[20px] bg-black bg-opacity-30" />
            <small className="text-sm">{restaurant.email}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

function ChatManagement() {
  const [selectedChat, setSelectedChat] = useState();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="flex items-center gap-x-4">
        <h5 className="font-medium text-blue">Total Chats</h5>
        <div className="px-6 py-2 bg-blue text-white rounded-full">123</div>
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
            {chats.map((chat) => {
              return (
                <RestaurantChatCard
                  onClick={(selectedChat) => setSelectedChat(selectedChat)}
                  chat={chat}
                  selected={selectedChat}
                  key={chat.key}
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
    </div>
  );
}

export default ChatManagement;
