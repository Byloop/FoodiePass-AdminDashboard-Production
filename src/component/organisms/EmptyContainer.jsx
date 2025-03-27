import { InfoIcon, AddIcon } from '../../assets/globals/icons';

export function EmptyContainer({ className, buttonText }) {
  return (
    <div
      className={`bg-white flex flex-col items-center justify-center
         w-full ${className}`}
    >
      <span className="bg-blue flex items-center justify-center w-[80px] h-[80px] rounded-full">
        <InfoIcon className="w-[38px] h-[38px] fill-white" />
      </span>
      <h5 className="font-medium mt-3">
        No info in this section yet, please do click on
        <span className="flex items-center justify-center gap-x-2 mt-2">
          <span
            className="flex items-center gap-x-1 text-sm py-[6px] font-DMSans font-semibold 
              bg-yellow w-fit rounded-full px-3"
          >
            <AddIcon className="w-[14px] h-[14px] fill-black" />
            {buttonText}
          </span>
          for begin
        </span>
      </h5>
    </div>
  );
}
