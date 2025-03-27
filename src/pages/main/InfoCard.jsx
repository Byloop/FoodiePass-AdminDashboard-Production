import { Link } from 'react-router-dom';
import { ChevronSharpIcon } from '../../assets/globals/icons';
import { TimeRangeDropdown } from './TimeRangeDropdown';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function InfoCard({ item }) {
  const [selectedRange, setSelectedRange] = useState({
    id: 1,
    key: 'daily',
    value: 'Daily',
  });
  const { title, image, number, percentage, cardBg } = item;
  const { t } = useTranslation();

  return (
    <div
      className="flex relative
    px-6 py-6 rounded-xl justify-between bg-transparent"
    >
      <div className="w-full h-full absolute top-0 left-0">
        <img src={cardBg} alt="" className="w-full h-full" />
      </div>
      <div className="z-10">
        <h6 className="text-blue font-semibold text-base xl:text-xl">
          {t(title)}
        </h6>

        <div className="mt-4">
          <h5 className="font-semibold">{number}</h5>
          <span className="flex mt-1 gap-x-1 items-center">
            <ChevronSharpIcon className="fill-blue w-[12px] h-[12px]" />
            <p className="font-DMSans text-base text-blue">{percentage}</p>
          </span>
        </div>

        <Link
          to="#"
          className="mt-3 text-sm underline block font-DMSans font-medium"
        >
          {t('home.viewEntireList')}
        </Link>
      </div>
      <div className="flex z-10 flex-col gap-y-3 justify-between items-center">
        <TimeRangeDropdown
          selectedRange={selectedRange}
          onSelectRange={setSelectedRange}
        />
        <div className="w-[80px] xl:w-[96px] mt-2">
          <img src={image} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
