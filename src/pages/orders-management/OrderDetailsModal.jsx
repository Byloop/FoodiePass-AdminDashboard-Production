import { useState, useMemo } from 'react';
import { ModalLayout } from '../../component/organisms/ModalLayout';
import { CancelCircleIcon } from '../../assets/globals/icons';
import { Button } from '../../component/atoms/Button';
import MenuItemList from './MenuItemsList';
import StatusDropdown from '../../component/organisms/StatusDropdown';
import AssignStaffForm from './AssignStaffForm';
import AddMenuForm from './AddMenuForm';
import { useTranslation } from 'react-i18next';

const status = [
  {
    id: 1,
    key: 'pending',
    value: 'pending',
  },
  {
    id: 2,
    key: 'completed',
    value: 'completed',
  },
  {
    id: 3,
    key: 'cancelled',
    value: 'cancelled',
  },
];

function OrderDetailsModal({ showModal, order, onClickCancel }) {
  // const { menuItems, freeMenuItems, hasOffer, offer } = order;
  const [assignStaff, setAssignStaff] = useState(false);
  const [showMenuForm, setShowMenuForm] = useState(false);
  const { t } = useTranslation();

  const selectedStatus = useMemo(() => {
    if (order.status) {
      const foundStatus = status.find((item) => item.value === order.status);
      if (foundStatus) {
        return foundStatus;
      }
      return null;
    }
  }, [order.status]);

  return (
    <>
      <ModalLayout
        showModal={{ showModal }}
        modalStyle="w-[600px] xl:w-[700px] h-[500px] overflow-y-scroll px-3  
      overflow-hidden hide-scrollbar !rounded-xl pb-10"
      >
        {showMenuForm ? (
          <AddMenuForm onClickCancel={() => setShowMenuForm(false)} />
        ) : (
          <>
            <div className="py-5 flex items-center justify-between">
              <h6 className="text-blue font-medium">
                {t('orderManagement.orderDetails')}
              </h6>
              <span className="cursor-pointer" onClick={() => onClickCancel()}>
                <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
              </span>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <div>
                <small className="font-base block font-medium">
                  {order.user.fullName}
                </small>
                <small className="font-base block mt-1 font-normal text-black text-opacity-80">
                  {order.user.phoneNumber}
                </small>
                <small className="font-base font-normal mt-[2px] text-black text-opacity-80">
                  {order.user.email}
                </small>
              </div>
              <StatusDropdown selectedStatus={selectedStatus} status={status} />
            </div>

            <div className="flex mt-8 items-center justify-between">
              <div className="flex items-center gap-x-2">
                <small className="text-black text-opacity-70">
                  {t('orderManagement.staffAssigned')}
                </small>
                <h6 className="">Peter</h6>
              </div>
              <Button
                text={t('edit')}
                onSubmit={() => setAssignStaff(true)}
                color="lightBlue"
                size="small"
                className="px-6 py-2"
              />
            </div>
            {assignStaff && (
              <AssignStaffForm onCancel={() => setAssignStaff(false)} />
            )}

            <MenuItemList onClickEdit={() => setShowMenuForm(true)} />
            <div className="w-full mx-auto h-[1px] bg-opacity-20 bg-black my-4" />
            <table className="">
              <tbody>
                <tr className="text-center">
                  <td
                    className="font-DMSans py-1  w-[220px]
                  font-medium"
                  >
                    {t('amount')}
                  </td>
                  <td className="font-DMSans font-semibold">1000</td>
                </tr>
                <tr className="text-center">
                  <td className="font-DMSans py-1 font-semibold">
                    {t('couponManagement.discount')}
                  </td>
                  <td className="font-DMSans font-semibold">-10</td>
                </tr>
                <tr className="text-center">
                  <td className="font-DMSans text-blue py-2 font-semibold">
                    {t('total')}
                  </td>
                  <td className="font-DMSans font-semibold">
                    <div
                      className="bg-lightBlue text-blue rounded-full 
                    py-[4px] px-4"
                    >
                      <small>600</small>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-full h-[1px] bg-opacity-20 bg-black my-4" />
            <h6 className="text-black font-medium">
              {t('orderManagement.customerNotes')}
            </h6>
            <small className="text-black text-opacity-80">
              Delightful Dinner.
            </small>
          </>
        )}
      </ModalLayout>
    </>
  );
}

export default OrderDetailsModal;
