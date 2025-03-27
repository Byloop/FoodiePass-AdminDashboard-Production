import { ChatIcon, RatingIcon } from '../../assets/globals/icons';

function ReviewCard({ review }) {
  const { user, stars, date, message } = review;

  return (
    <div className="bg-lightBlue max-w-[48%] py-4 px-4 border border-blue rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src=""
            className="w-[50px] border border-black h-[50px] rounded-full"
          />
          <div>
            <small>{user.fullName}</small>
            <div className="flex items-center gap-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingIcon
                  key={index}
                  className={`w-[20px] h-[20px] 
                    ${index + 1 <= stars ? 'fill-yellow' : 'fill-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="">
          <ChatIcon className="w-[20px] h-[20px] fill-blue" />
        </span>
      </div>
      <small className="mt-3 block">{message}</small>
      <p className="text-black font-DMSans font-medium mt-4 text-opacity-50 text-right">
        {date}
      </p>
    </div>
  );
}

export default ReviewCard;
