import React, { useContext } from 'react';
import { ProductContext } from '../../../context/context';

import CartColumns from '../cartColumns/CartColumns';
import CartList from '../cartList/CartList';
import CartTotal from '../cartTotal/CartTotal';
import Title from '../../title/Title';

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
