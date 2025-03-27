import { TimeRangeDropdown } from '../../main/TimeRangeDropdown';
import { restaurantsPerformance } from '../../../assets/globals/data/restaurants';

export function RestaurantPerformance() {
  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Restaurant Performance</h5>

        <TimeRangeDropdown />
      </div>
      <table className="w-full mt-6">
        <thead>
          <tr>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10 
                  text-black py-2"
            >
              Restaurant Name
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
                  text-black py-2"
            >
              Booking
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
                  text-black py-2"
            >
              Booking %
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
                  text-black py-2"
            >
              Earning
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurantsPerformance.map((restaurant) => (
            <tr key={restaurant.id}>
              <td className="text-center w-[150px] py-2 border-b border-black border-opacity-10">
                {restaurant.name}
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
                    border-opacity-10 py-2 text-center"
              >
                {restaurant.totalBooking}
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
                    border-opacity-10 py-2 text-center"
              >
                {restaurant.bookingPercentage}
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
                    border-opacity-10 py-2 text-center"
              >
                {restaurant.earning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
