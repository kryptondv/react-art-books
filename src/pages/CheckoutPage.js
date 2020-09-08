import React, { useEffect } from 'react';

import CheckoutForm from '../components/checkoutPage/checkoutForm/CheckoutForm';
import OrderSummary from '../components/checkoutPage/orderSummary/OrderSummary';

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OrderSummary />
      <CheckoutForm />
    </>
  );
};

export default CheckoutPage;
