import { useMemo, useState } from 'react';
import ReviewCard from './ReviewCard';
import { reviews as reviewsData } from '../../assets/globals/data/reviews';
import { RestaurantReviewsHeader } from './RestaurantReviewsHeader';

function TakeAwayReviews() {
  const [reviewType, setReviewType] = useState('total');

  const restaurant = useMemo(() => reviewsData[0], []);

  const reviews = useMemo(() => {
    switch (reviewType) {
      case 'reported':
        return restaurant.reviews.filter(
          (review) => review.service === 'take-away' && review.isReported
        );
      default:
        return restaurant.reviews;
    }
  }, [restaurant.reviews, reviewType]);

  return (
    <>
      <RestaurantReviewsHeader
        totalReviews={restaurant.total}
        averageRatings={restaurant.averageRating}
        reportedReviews={restaurant.reportedReviews}
        reviewType={reviewType}
        onSelectReviewType={(selectedReviewType) =>
          setReviewType(selectedReviewType)
        }
      />

      <div
        className="mt-6 px-4 py-6 max-h-[500px] gap-y-6 
      overflow-y-auto flex gap-x-[4%] flex-wrap bg-white border border-black border-opacity-10 rounded-md"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}

export default TakeAwayReviews;
