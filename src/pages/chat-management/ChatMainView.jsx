import { AddIcon, SendIcon } from '../../assets/globals/icons';

export function ChatMainView({ headerComp }) {
  const HeaderComponent = headerComp;
  return (
    <div
      className="w-full h-[calc(100vh-150px)] max-h-[650px] bg-white rounded-md 
    border border-black border-opacity-10 flex flex-col"
    >
      {<HeaderComponent />}
      <div className="flex-1"></div>
      <div
        className="py-2 bg-black bg-opacity-5
      flex items-center mx-4 rounded-full mb-2 px-4"
      >
        <button
          className="bg-[linear-gradient(322.03deg,_#004D9B_15.33%,_#0581FF_107.96%)]
        rounded-full p-3"
        >
          <AddIcon className="w-[20px] h-[20px] fill-white" />
        </button>
        <input
          placeholder="Type a message here"
          className="px-4 border-none font-DMSans text-base h-full bg-transparent flex-1 hover:outline-none focus-border-none focus:outline-none"
        />
        <div>
          <button
            className="bg-[linear-gradient(322.03deg,_#004D9B_15.33%,_#0581FF_107.96%)]
          rounded-full p-3"
          >
            <SendIcon className="w-[20px] h-[20px] fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
