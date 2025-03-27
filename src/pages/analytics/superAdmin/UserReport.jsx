import { FullRoundedPieChart } from '../../../component/atoms/FullRoundedPieChart';
import { ChevronSharpIcon } from '../../../assets/globals/icons';

export function UserReport() {
  return (
    <div
      className="w-full border border-black border-opacity-10 
bg-white rounded-3xl  px-6 py-4"
    >
      <h5 className="text-blue font-semibold">User Report</h5>

      <span className="flex items-center">
        <ChevronSharpIcon className="w-[12px] fill-green h-[12px]" />
        <p className="font-DMSans text-base text-green">15%+</p>
      </span>
      <div className="flex items-center mt-3 xl:mt-0 justify-center h-full">
        <div
          className="w-[60%] lg:w-[46%] xl:w-full h-[280px] 
        relative"
        >
          <FullRoundedPieChart
            labels={['New Users', 'Repeated Users']}
            segmentData={[60, 40]}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <h5 className="text-blue font-semibold">270000</h5>
            <p className="text-blue mt-2 text-base font-DMSans font-medium">
              Total Users
            </p>
          </div>
          <div
            className="absolute  top-0 -xl:top-4 
          -right-[8%] xlg:right-0 w-[100px]"
          >
            <h5
              className="font-semibold lg:text-lg xl:text-xl leading-5 
            xlg:leading-7 text-center text-blue"
            >
              60%
            </h5>
            <p className="font-semibold text-sm xlg:text-base text-center text-blue">
              New Users
            </p>
          </div>
          <div
            className="absolute w-[100px] bottom-10 xl:bottom-12 
          xlg:bottom-10 -left-[2%] xl:left-0 xlg:left-[3%]"
          >
            <h5
              className="font-semibold lg:text-lg xl:text-xl leading-5 
            xlg:leading-7 text-blue"
            >
              40%
            </h5>
            <small className="font-semibold text-sm xlg:text-base text-blue 2xl:text-lg">
              Repeated Users
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
