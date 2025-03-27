import { ChevronDownIcon } from '../../assets/globals/icons';

export function CategoryCard({ item }) {
  const { name, image } = item;

  return (
    <div
      className="rounded-3xl group hover:bg-yellow hover:border-none flex flex-col items-center py-6 px-[22px]
      xl:px-6 2xl:px-7 bg-white/20 
    backdrop-blur-[42px] border border-black border-opacity-10"
    >
      <div className="w-[50px] xl:w-[60px]">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <h6 className="mt-6 text-lg xlg:text-xl font-medium group-hover:text-white">
        {name}
      </h6>

      <span className="bg-yellow group-hover:bg-white mt-6 cursor-pointer p-[6px] flex items-center justify-center rounded-full">
        <ChevronDownIcon className="w-[12px] ml-[2px] group-hover:fill-yellow -rotate-90 h-[12px] fill-black" />
      </span>
    </div>
  );
}
