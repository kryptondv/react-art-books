import React, { useContext } from 'react';
import { ProductContext } from '../context/Context';

const Sidecart = () => {
  const { cartOpen, closeCart } = useContext(ProductContext);
  return (
    <div className ={`sidecart ${cartOpen && 'sidecart--is-open'}`} onClick={closeCart}>
      <p>cart items</p>
    </div>
  );
};

export default Sidecart;
