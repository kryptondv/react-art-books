import React, { useContext } from 'react';
import { ProductContext } from '../../context/Context';

import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Title from '../Title';

const CartComponents = (
  <>
    <CartColumns />
    <CartList />
    <CartTotal />
  </>
);

const Cart = () => {
  const { cart } = useContext(ProductContext)

  return (
    <section className = "cart">
      <Title title="koszyk"/>
      {cart.length > 0 ? CartComponents : <h2 className="cart__empty">Twój koszyk jest pusty :(</h2>}
    </section>
  );
}

export default Cart;
