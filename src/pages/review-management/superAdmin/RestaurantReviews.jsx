import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '../../../assets/globals/icons';
import { reviews as reviewsData } from '../../../assets/globals/data/reviews';
import { RestaurantReviewsHeader } from '../RestaurantReviewsHeader';
import ReviewCard from '../ReviewCard';

function RestaurantReviews() {
  const location = useLocation();
  const navigate = useNavigate();
  const [reviewType, setReviewType] = useState('total');

  const restaurant = useMemo(() => {
    if (location.state) {
      const item = reviewsData.find(
        (review) => review.id === location.state.reviewId
      );
      return item;
    }
    return null;
  }, [location.state]);

  const reviews = useMemo(() => {
    if (reviewType === 'reported') {
      return restaurant.reviews.filter((review) => review.isReported);
    }
    return restaurant.reviews;
  }, [restaurant.reviews, reviewType]);

  return (
    <>
      <div className="flex items-center gap-x-4">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h6 className="text-blue">{restaurant.restaurant.name}</h6>
      </div>
      <RestaurantReviewsHeader
        totalReviews={restaurant.total}
        averageRatings={restaurant.average}
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

export default RestaurantReviews;
