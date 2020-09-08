import React, { useContext } from 'react';
import { ProductContext } from '../../context/context';

import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useContext(ProductContext);
  return (
    <section className="cart-list">
      {cart.map(product => <CartItem key={product.id} product={product} />)}
    </section>
  );
}

export default CartList;
