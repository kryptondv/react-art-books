import React, { useEffect } from 'react';

import CheckoutForm from '../components/CheckoutPage/CheckoutForm';
import OrderSummary from '../components/CheckoutPage/OrderSummary';

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
