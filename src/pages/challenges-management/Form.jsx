import { useState } from 'react';
import { Input } from '../../component/atoms/Input';
import { Button } from '../../component/atoms/Button';
import { DropDownInput } from '../../component/atoms/DropDownInput';
import DateInput from '../availability-settings/DateInput';
import TimeInput from '../availability-settings/TimeInput';
import { cuisines } from '../../assets/globals/data/Categories';
import { TextArea } from '../../component/atoms/Textarea';

const decisions = [
  { id: 1, key: 'Yes', label: 'yes' },
  { id: 2, key: 'No', label: 'no' },
];

const categories = [
  { id: 1, key: 'Food' },
  { id: 2, key: 'Drinks' },
  { id: 3, key: 'Desserts' },
];

export function Form() {
  return (
    <div
      className="bg-white px-4 py-6 border mt-6
            border-black border-opacity-10 rounded-md"
    >
      <Input
        label="Name"
        value=""
        onChange={(e) => null}
        placeholder="Name"
        inputStyle="border-black border-opacity-20 !py-[7px]"
        className="w-full"
      />
      <Input
        label="Location"
        value=""
        onChange={(e) => null}
        placeholder="Location"
        inputStyle="border-black border-opacity-20 !py-[7px]"
        className="mt-6"
      />
      <div className="flex mt-4 gap-x-6 items-center">
        <DropDownInput
          buttonStyle="!py-[7px]"
          placeholder="Select Cuisine"
          options={cuisines}
          label="Cuisine"
        />
        <DropDownInput
          buttonStyle="!py-[7px]"
          placeholder="Select Category Type"
          options={categories}
          label="Category Type"
        />
      </div>
      <div className="flex mt-4 gap-x-6 items-center">
        <Input
          label="Money Spent"
          value=""
          onChange={(e) => null}
          placeholder="$200"
          inputStyle="border-black border-opacity-20 !py-[7px]"
          className="flex-1"
        />
        <DropDownInput
          className="flex-1"
          buttonStyle="!py-[7px]"
          placeholder="Choose Yes or No"
          options={decisions}
          label="Use Offers/Discount"
        />
      </div>
      <div className="flex mt-4 gap-x-6 items-center">
        <div className="flex-1">
          <DateInput
            containerStyle="w-[100%] flex-1"
            buttonStyle="!w-full"
            title="Date From"
          />
        </div>
        <div className="flex-1">
          <DateInput
            containerStyle="w-[100%]"
            buttonStyle="!w-full"
            title="Date To"
          />
        </div>
      </div>
      <div className="flex mt-4 gap-x-6 items-center">
        <TimeInput
          containerStyle="flex-1"
          buttonStyle="w-full"
          selectedTime={null}
          title="Start Time"
          onSelectTime={(time) => null}
        />
        <TimeInput
          containerStyle="flex-1"
          buttonStyle="w-full"
          selectedTime={null}
          title="End Time"
          onSelectTime={(time) => null}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <Input
          label="Number of Order Repeat"
          value=""
          onChange={(e) => null}
          placeholder="4"
          inputStyle="border-black border-opacity-20 !py-[7px]"
          className="mt-6"
        />
      </div>
      <div className="mt-6">
        <TextArea label="Challenge Details" placeholder="Challenge Details" />
      </div>
      <div className="flex items-center mt-6 justify-center">
        <Button size="small" text="Submit" className="px-12" />
      </div>
    </div>
  );
}
