import { ElaborationIcon } from '../../assets/globals/icons';
import { Switch } from '../../component/atoms/Switch';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

const menuItems = [
  {
    id: 1,
    name: 'Pizza Margherita #1',
    price: 30,
    quantity: 1,
    isDelivered: false,
  },
  {
    id: 2,
    name: 'Pasta With Extra Sauce #1',
    price: 50,
    quantity: 1,
    isDelivered: false,
  },
  { id: 3, name: 'Salad #1', price: 20, quantity: 1, isDelivered: false },
  { id: 4, name: 'Cup Cake #1', price: 8, quantity: 2, isDelivered: false },
  { id: 5, name: 'Wine #1', price: 10, quantity: 3, isDelivered: false },
];

function MenuItemList({ menuItem, offer, onClickEdit }) {
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <table className="w-full">
        <thead className="">
          <tr>
            <th className="max-w-[120px]">
              <div className="flex justify-center items-center gap-x-4">
                <small className="text-black text-opacity-60">
                  {t('orderManagement.menuItems')}
                </small>
                <Button
                  className="px-4"
                  text={t('edit')}
                  onSubmit={onClickEdit}
                  size="small"
                  color="lightBlue"
                />
              </div>
            </th>

            <th className="font-DMSans font-medium text-black text-opacity-60">
              {t('price')}
            </th>

            <th className="font-DMSans font-medium text-black text-opacity-60">
              {t('couponManagement.specialOffer')}
            </th>

            <th className="font-DMSans font-medium text-black text-opacity-60">
              {t('orderManagement.elaboration')}
            </th>

            <th className="font-DMSans font-medium text-black text-opacity-60">
              {t('delivered')}
            </th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr className="text-center py-2" key={item.id}>
              <td className="font-DMSans py-2 font-medium">
                <div className="flex gap-x-4 items-center justify-center">
                  <small className="w-[120px]">{item.name}</small>
                  <div className="bg-lightBlue px-4 rounded-full">
                    <small className="text-blue">{item.quantity}</small>
                  </div>
                </div>
              </td>
              <td className="font-DMSans font-medium">{item.price}</td>
              <td className="font-DMSans font-medium">-</td>
              <td className="">
                <div className="flex justify-center">
                  <ElaborationIcon className={`w-[20px] h-[20px] fill-green`} />
                </div>
              </td>
              <td className="">
                <div className="flex justify-center">
                  <Switch className="!w-[60px] !h-[30px]" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuItemList;
