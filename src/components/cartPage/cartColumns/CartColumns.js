import React from 'react';

const CartColums = () => {
  return (
    <div className="cart-columns">
      <div className="cart-columns__item">Książka</div>
      <div className="cart-columns__item">Autor</div>
      <div className="cart-columns__item">Tytuł</div>
      <div className="cart-columns__item">Cena</div>
      <div className="cart-columns__item">Ilość</div>
      <div className="cart-columns__item">Usuń</div>
      <div className="cart-columns__item">Suma</div>
    </div>
  );
}

export default CartColums;
