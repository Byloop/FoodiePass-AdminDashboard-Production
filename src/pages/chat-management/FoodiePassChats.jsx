import { ChatMainView } from './ChatMainView';
import LogoIcon from '../../assets/globals/logo-icon.png';

const Header = () => {
  return (
    <div className="bg-lightBlue flex items-center gap-x-4 py-4 px-4">
      <div
        className="w-[50px] flex items-center justify-center 
      h-[50px] rounded-full border border-black border-opacity-10"
      >
        <img src={LogoIcon} alt="" className="w-[80%] h-[80%] object-contain" />
      </div>
      <h6>Foodie Pass</h6>
    </div>
  );
};

function FoodiePassChats() {
  return (
    <div className="mt-6">
      <ChatMainView headerComp={() => <Header />} />
    </div>
  );
}

export default FoodiePassChats;
