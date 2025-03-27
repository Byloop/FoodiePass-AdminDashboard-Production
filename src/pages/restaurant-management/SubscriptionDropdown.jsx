import { useState } from 'react';
import { ChevronDownIcon } from '../../assets/globals/icons';
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  PopoverBody,
} from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';

const subscriptions = [
  { id: 1, key: 'basicPlan', value: 'basic-plan' },
  { id: 2, key: 'premiumPlan', value: 'premium-plan' },
  { id: 3, key: 'advancePlan', value: 'advanced-plan' },
];

export function SubscriptionDropdown({
  selectedSubscription,
  onSelectSubscription,
}) {
  const [open, setOpen] = useState();
  const { t } = useTranslation();

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
          className="border-blue border flex items-center gap-x-2 
          bg-lightBlue rounded-full px-4 py-2"
        >
          {`${
            selectedSubscription && selectedSubscription?.key
              ? selectedSubscription.key
              : t('restaurantManagement.subscription')
          }`}
          <ChevronDownIcon
            className={`w-[10px] mt-1 h-[10px] fill-blue trasition-all 
                duration-200 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white rounded-md">
        <PopoverBody className="py-2 px-2 bg-white rounded-md">
          <div className="bg-white z-10">
            <ul className="flex list-none flex-col gap-y-2">
              {subscriptions.map((item) => (
                <li className="" key={item.id}>
                  <span
                    className={`flex rounded-[3px] py-1 px-2
                    cursor-pointer items-center gap-x-2 
                  ${selectedSubscription?.key === item.key ? 'bg-blue bg-opacity-10' : ''}`}
                    onClick={() => onSelectSubscription(item)}
                  >
                    <p className="font-DMSans font-normal">
                      {t(`restaurantManagement.${item.key}`)}
                    </p>
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
