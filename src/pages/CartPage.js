import React from 'react';

import Cart from '../components/CartPage/Cart';
import Hero from '../components/Hero';

const CartPage = () => {
  return (
    <>
      <Hero page="cart"/>
      <Cart />
    </>
  );
};

export default CartPage;
