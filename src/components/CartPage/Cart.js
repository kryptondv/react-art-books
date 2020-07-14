import React from 'react';

import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Title from '../Title';

const Cart = () => {
  return (
    <div>
      <Title />
      <CartColumns />
      <CartList />
      <CartTotal />
    </div>
  );
}

export default Cart;
