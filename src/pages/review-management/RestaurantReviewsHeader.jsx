import { useState, useMemo } from 'react';
import { SearchInput } from '../../component/atoms/SearchInput';
import { Button } from '../../component/atoms/Button';
import RatingDropdown from './RatingDropdown';
import { DateTimeQueryModal } from '../../component/organisms/DateTimeQueryModal';
import { RatingIcon } from '../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

const Card = ({
  heading,
  number,
  numberTextColor,
  showRatingIcons,
  onClickButton,
  isSelected,
}) => {
  const { t } = useTranslation();
  const rating = useMemo(() => {
    if (showRatingIcons) {
      return number.split('/')[0];
    }
    return 0;
  }, [number, showRatingIcons]);

  return (
    <div
      className={`border flex flex-col gap-y-4 items-center py-5
    rounded-[20px] ${isSelected ? 'border-blue' : 'border-opacity-10 border-black'} flex-1 
     bg-white`}
    >
      <h6>{t(heading)}</h6>
      <h5 className={`font-semibold ${numberTextColor}`}>{number}</h5>
      {showRatingIcons ? (
        <div className="flex items-center gap-x-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <RatingIcon
              key={index}
              className={`w-[20px] 
                ${index + 1 <= rating ? 'fill-yellow' : 'fill-gray-200'} 
                h-[20px]  `}
            />
          ))}
        </div>
      ) : (
        <Button
          onSubmit={onClickButton}
          text={t('view')}
          color={isSelected ? 'blue' : 'transparent'}
          className="px-4"
          size="small"
        />
      )}
    </div>
  );
};

export function RestaurantReviewsHeader({
  totalReviews,
  reportedReviews,
  averageRatings,
  reviewType,
  onSelectReviewType,
}) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {showModal && (
        <DateTimeQueryModal
          showModal={showModal}
          onClickCancel={() => setShowModal(false)}
        />
      )}
      <div className="flex mt-6 items-center justify-between">
        <SearchInput className="py-[8px] bg-white w-[60%] !rounded-full" />
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4 bg-lightBlue"
            size="small"
            text={t('selectPeriod')}
            color="outline"
            onSubmit={() => setShowModal(true)}
          />
          <RatingDropdown />
        </div>
      </div>
      <div className="flex items-stretch mt-6 gap-x-10">
        <Card
          numberTextColor="text-black"
          heading="reviewsManagement.totalReviews"
          number={totalReviews}
          onClickButton={() => onSelectReviewType('total')}
          isSelected={reviewType === 'total'}
        />
        <Card
          numberTextColor="text-red"
          heading={t('reviewsManagement.reportedReviews')}
          number={reportedReviews}
          isSelected={reviewType === 'reported'}
          onClickButton={() => onSelectReviewType('reported')}
        />
        <Card
          numberTextColor="text-green"
          number={`${averageRatings ? `${averageRatings}/5` : ''}`}
          heading={t('reviewsManagement.averageRating')}
          showRatingIcons={true}
        />
      </div>
    </>
  );
}
