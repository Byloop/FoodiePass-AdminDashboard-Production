import { timeSections } from '../../assets/globals/data/Staff';

function TimelineBand({ heading }) {
  return (
    <div className="flex items-stretch">
      <div
        className="flex flex-1 relative items-center 
        justify-between time-strip pr-10"
      >
        <div className="w-[130px] px-2 h-[50px] flex items-center text-black">
          {heading}
        </div>
        {timeSections.map((time, index) => {
          const isLastElement = index === timeSections.length - 1;
          if (!isLastElement) {
            return (
              <div key={time.value} className="w-[120px] h-[30px] relative">
                <div
                  className={`h-full w-full bg-lightBlue 
                    ${index === timeSections.length - 2 && 'border-r-2 border-blue'}
                    border-l-2 border-blue`}
                />
                <p className="font-base absolute -left-3">{time.label}</p>
              </div>
            );
          }
          return (
            <p className="absolute right-6 -bottom-[14px]" key={time}>
              12PM
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineBand;
