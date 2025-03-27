import { useState } from 'react';
import CouponForm from './CouponForm';

const initialData = {
  couponCode: '',
  type: null,
  subType: null,
  minimumCartAmount: null,
  usageUserLimit: null,
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  discountPercentage: null,
  rewardPoints: null,
  menuItemId: null,
  freeMenuItemId: null,
};

function AddCouponForm() {
  const [coupon, setCoupon] = useState(initialData);

  const onChange = (key, value) => {
    console.log(key, 'key');
    console.log(value, 'value');

    let newCoupon = { ...coupon };
    if (key === 'type') {
      if (value === 'discount') {
        newCoupon.subType = null;
        newCoupon.menuItemId = null;
        newCoupon.freeMenuItemId = null;
        newCoupon.rewardPoints = null;
      }
    } else if (key === 'subType') {
      if (value === '2x1' || value === '3x1') {
        newCoupon.discountPercentage = null;
        newCoupon.freeMenuItemId = null;
        newCoupon.rewardPoints = null;
      } else if (value === 'bonus-plate') {
        newCoupon.discountPercentage = null;
        newCoupon.rewardPoints = null;
      } else {
        newCoupon.discountPercentage = null;
        newCoupon.freeMenuItemId = null;
        newCoupon.menuItemId = null;
      }
    }
    setCoupon({
      ...newCoupon,
      [key]: value,
    });
  };

  return <CouponForm coupon={coupon} onChange={onChange} />;
}

export default AddCouponForm;
