import React, { useContext } from 'react';
import { ProductContext } from '../../context/Context';

const CartTotal = () => {
  const { cartTotal } = useContext(ProductContext);
  return (
    <section className="cart-total" >
      <h4 className="cart-total__summary">
        Suma:
        {cartTotal.toLocaleString('pl-PL', {
          style: 'currency',
          currency: 'PLN',
        })}
      </h4>
      <button className="btn btn--small cart-total__btn">Wyczyść koszyk</button>
    </section>
  );
};

export default CartTotal;
