import React, { useContext } from 'react';
import { ProductContext } from '../../../context/context';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const { cartTotal, clearCart } = useContext(ProductContext);
  return (
    <section className="cart-total" >
      {/* total */}
      <h4 className="cart-total__summary">
        Suma:
        {cartTotal.toLocaleString('pl-PL', {
          style: 'currency',
          currency: 'PLN',
        })}
      </h4>
      {/* order */}
      <Link to="/zamowienie" className="btn btn--small cart-total__btn">Zamawiam</Link>
      {/* clear cart */}
      <button onClick={clearCart} className="btn btn--small btn--secondary cart-total__btn">Wyczyść koszyk</button>
    </section>
  );
};

export default CartTotal;
