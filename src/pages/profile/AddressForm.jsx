import { Input } from '../../component/atoms/Input';

export function AddressForm({ address, setAddress, errors }) {
  return (
    <div className="mt-4">
      <Input
        name="streetAddress"
        value={address.streetAddress}
        type="text"
        placeholder="Street Address"
        label="Street Address"
        className="w-full"
        inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
        error={errors?.streetAddress}
        onChange={setAddress}
      />
      <Input
        name="apartment"
        value={address.apartment}
        type="text"
        placeholder="Apartment, Suite"
        label="Apartment, Suite, etc"
        error={errors?.apartment}
        className="w-full mt-4"
        inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
        onChange={setAddress}
      />
      <Input
        name="country"
        value={address.country}
        type="text"
        placeholder="Country"
        label="Country"
        className="w-full mt-4"
        inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
        error={errors?.country}
        onChange={setAddress}
      />
      <div className="flex flex-col lg:flex-row items-start gap-y-4 gap-x-4 xl:gap-x-8 2xl:gap-x-12 mt-4">
        <Input
          name="city"
          value={address.city}
          type="text"
          placeholder="City"
          label="City"
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.city}
          onChange={setAddress}
        />
        <Input
          name="postalCode"
          value={address.postalCode}
          type="text"
          placeholder="Postal Code"
          label="Postal Code"
          className="w-full"
          inputStyle="border-black border-opacity-20 bg-transparent !py-[6px]"
          error={errors?.postalCode}
          onChange={setAddress}
        />
      </div>
    </div>
  );
}
