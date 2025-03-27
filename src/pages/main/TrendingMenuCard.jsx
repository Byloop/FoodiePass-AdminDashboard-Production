import { DeleteIcon } from '../../assets/globals/icons';

export function TrendingMenuCard({ dish }) {
  const { title, image, quantity, price } = dish;

  return (
    <div className="flex relative items-center rounded-full bg-transparent">
      {/* Left section with image */}

      <div className="w-[90px] h-[82px] 2xl:w-[100px] 2xl:h-[92px] rounded-full shadow-lg z-10">
        <img
          src={image}
          alt="Mushroom Pizza"
          className="w-full h-full cover rounded-full shadow-[4px_0px_9px_0px_#ffa9019c]"
        />
      </div>

      <div className="flex w-full py-[11px] 2xl:py-[13px] shadow-lg bg-yellow bg-opacity-30 rounded-full -ml-12 flex-col">
        <div className="flex pr-8 pl-8 items-center ml-8 justify-between">
          <h6 className="text-base font-medium">{title}</h6>
          <button className="border-none bg-none">
            <DeleteIcon className="w-[20px] h-[20px] fill-blue" />
          </button>
        </div>

        <div className="flex pr-8 pl-8 mt-[4px] items-center ml-8 justify-between">
          <p className="text-sm font-DMSans font-normal">{`x${quantity}`}</p>
          <p className="text-sm font-normal font-DMSans">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
}
