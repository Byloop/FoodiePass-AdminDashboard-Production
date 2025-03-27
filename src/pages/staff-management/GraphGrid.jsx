import { PopoverTrigger } from '@chakra-ui/react';
import { timeSections } from '../../assets/globals/data/Staff';

function GraphGrid({ shifting, currentIndex, shiftings }) {
  const { label, shifts } = shifting;

  const timeToPercentage = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / (24 * 60)) * 100;
  };

  return (
    <div key={label} className="flex items-center">
      <div
        className="w-[130px] h-[50px] flex items-center 
                    border-b border-blue bg-lightBlue"
      >
        <p className="text-base px-1 w-[130px] font-DMSans text-blue">
          {label}
        </p>
      </div>
      <div
        className="relative h-[50px] flex flex-grow 
                    items-center"
      >
        {timeSections.map((_, i) => {
          if (i < timeSections.length - 1) {
            return (
              <div
                key={i}
                className={`w-[120px] flex h-full border-t border-r 
                            border-opacity-15 border-black 
                            ${currentIndex === shiftings.length - 1 && 'border-b'}`}
              >
                <div className="flex-1 h-full border-opacity-15 border-r border-black" />
                <div className="flex-1 h-full border-opacity-15 border-r border-black" />
                <div className="flex-1 h-full" />
              </div>
            );
          }
          return null;
        })}
        {shifts.map((shift, index) => {
          const start = timeToPercentage(shift.startTime);
          const end = timeToPercentage(shift.endTime);
          return (
            <>
              <span
                key={index}
                onClick={() => console.log(null)}
                className="absolute p-[5px] h-[60%] rounded-[4px] text-black 
                            flex items-center justify-center"
                style={{
                  left: `${start}%`,
                  width: `${end - start}%`,
                  backgroundColor: shift.colorCode,
                }}
              >
                {shift.data[0]}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default GraphGrid;
