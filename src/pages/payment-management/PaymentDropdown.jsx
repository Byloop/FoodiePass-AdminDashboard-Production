import { useState } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon } from '../../assets/globals/icons';

const paymentMethods = [
  { id: 1, key: 'Google Pay', value: 'google-pay' },
  { id: 1, key: 'Debit Card', value: 'debit-card' },
  {
    id: 3,
    key: 'Credit Card',
    value: 'credit-card',
  },
];

export function PaymentDropdown({
  selectedPaymentMethod,
  onSelectPaymentMethod,
}) {
  const [open, setOpen] = useState(false);

  return (
    <PopoverRoot
      positioning={{ sameWidth: true }}
      open={open}
      p={0}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <PopoverTrigger>
        <button
          onClick={() => setOpen(!open)}
          className="border-blue border flex items-center gap-x-2 bg-lightBlue rounded-full px-4 py-2"
        >
          {`${selectedPaymentMethod && selectedPaymentMethod?.key ? selectedPaymentMethod.key : 'Payment Method'}`}
          <ChevronDownIcon
            className={`w-[10px] mt-1 h-[10px] fill-blue trasition-all duration-200 ease-in-out 
                    ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex list-none flex-col gap-y-2">
              {paymentMethods.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2
                    cursor-pointer items-center gap-x-2 
                  ${selectedPaymentMethod?.key === item.key ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSelectPaymentMethod(item)}
                  >
                    <p className="font-DMSans font-normal">{item.key}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
