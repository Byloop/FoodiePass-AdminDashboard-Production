import { Button } from '../../component/atoms/Button';

export function Banner() {
  return (
    <div className="h-[240px] lg:h-[260px] xl:h-[300px] w-full lg:bg-left bg-cover bg-no-repeat bg-[url('assets/main/banner-img.png')] rounded-3xl">
      <div className="flex py-8 lg:py-5 xl:py-10 h-full flex-col px-10 lg:px-12 xl:px-16 justify-between">
        <div>
          <h5 className="text-blue font-semibold">Join in the offer</h5>
          <small className="text-gray4 block mt-1 xl:mt-2">
            No fees for your customers
          </small>
        </div>
        <div>
          <h2 className="text-black font-semibold">Hey, Ruben</h2>
          <Button
            className="px-4 mt-3 font-medium"
            text="Check Menu"
            color="yellow"
            size="base"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
