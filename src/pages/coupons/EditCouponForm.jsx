import { useState, useMemo, useEffect } from 'react';
import CouponForm from './CouponForm';
import { useLocation } from 'react-router-dom';

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

function EditCouponForm() {
  const [coupon, setCoupon] = useState(initialData);

  const location = useLocation();

  const editCoupon = useMemo(() => {
    if (location?.state?.editCoupon) {
      return location.state.editCoupon;
    }
    return null;
  }, [location.state.editCoupon]);

  useEffect(() => {
    setCoupon(editCoupon);
  }, [editCoupon]);

  console.log(editCoupon);

  const onChange = (key, value) => {
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

  return (
    <CouponForm editCoupon={editCoupon} coupon={coupon} onChange={onChange} />
  );
}

export default EditCouponForm;
