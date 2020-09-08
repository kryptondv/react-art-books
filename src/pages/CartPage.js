import React, { useEffect } from 'react';

import Cart from '../components/cartPage/cart/Cart';
import Hero from '../components/Hero';

const CartPage = () => {

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <>
      <Hero page="cart"/>
      <Cart />
    </>
  );
};

export default CartPage;
