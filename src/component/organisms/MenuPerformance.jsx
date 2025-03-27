import { TimeRangeDropdown } from '../../pages/main/TimeRangeDropdown';
import { Button } from '../atoms/Button';
import { restaurantMenus } from '../../assets/globals/data/restaurants';

export function MenuPerformance() {
  return (
    <div
      className="w-full border border-black border-opacity-10 
    bg-white rounded-3xl  px-4 2xl:px-6 py-4 h-full"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-blue font-semibold">Menu Performance</h5>

        <TimeRangeDropdown />
      </div>
      <div className="flex items-center gap-x-6 mt-6">
        <Button size="small" className="px-4" color="lightBlue" text="Food" />
        <Button
          size="small"
          className="px-4"
          color="lightBlue"
          text="Desserts"
        />
        <Button size="small" className="px-4" color="lightBlue" text="Drinks" />
      </div>
      <table className="w-full mt-6">
        <thead>
          <tr>
            <th
              className="font-DMSans text-left font-semibold border-b border-black border-opacity-10 
            text-black py-2"
            >
              Food Items
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
            text-black py-2"
            >
              Sales
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
            text-black py-2"
            >
              Earning
            </th>
            <th
              className="font-DMSans text-center font-semibold border-b border-black border-opacity-10
            text-black py-2"
            >
              Performance
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurantMenus.map((menu) => (
            <tr key={menu.id}>
              <td className="text-center w-[150px] py-2 border-b border-black border-opacity-10">
                <div className="flex max-w-[150px] items-center gap-x-2 justify-start">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={menu.image}
                    alt=""
                  />
                  <small>{menu.name}</small>
                </div>
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
              border-opacity-10 py-2 text-center"
              >
                {menu.sales}
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
              border-opacity-10 py-2 text-center"
              >
                {menu.earning}
              </td>
              <td
                className="font-DMSans font-medium border-b border-black
              border-opacity-10 py-2 text-center"
              >
                <small
                  className={`px-4 py-1 rounded-full ${
                    menu.performance === 'high'
                      ? 'text-green bg-lightGreen'
                      : 'text-red bg-lightRed'
                  }`}
                >
                  {menu.performance === 'high' ? 'High' : 'Low'}
                </small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
