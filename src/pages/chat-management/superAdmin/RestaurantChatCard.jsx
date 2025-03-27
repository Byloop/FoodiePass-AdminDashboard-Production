import { useMemo } from 'react';
import { MessageTicks } from '../../../assets/chat-management/icons';

export function RestaurantChatCard({ selected, chat, onClick }) {
  const { restaurant, chatMessages } = chat;

  const lastMessage = useMemo(
    () => (chatMessages.length ? chatMessages[chatMessages.length - 1] : null),
    [chatMessages]
  );

  return (
    <span
      onClick={() => onClick(chat)}
      className={`flex items-center border cursor-pointer ${
        selected?.id === chat.id
          ? 'border-blue'
          : ' border-black border-opacity-10'
      } 
   rounded-md gap-x-4 px-3 py-2 `}
    >
      <img
        src=""
        alt=""
        className="w-[60px] h-[60px] rounded-full border 
              border-black border-opacity-10"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <small>{restaurant.name}</small>
          <small className="text-black text-opacity-50 text-[13px]">
            {lastMessage?.time}
          </small>
        </div>
        <div className="flex mt-[6px] items-center justify-between">
          <small className="text-sm text-black text-opacity-80">
            {lastMessage?.message}
          </small>
          <MessageTicks className="w-[20px] h-[20px] fill-gray-400" />
        </div>
      </div>
    </span>
  );
}
