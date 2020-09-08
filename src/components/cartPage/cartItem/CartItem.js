import React, { useContext } from 'react';
import { ProductContext } from '../../../context/context';
import { Link } from 'react-router-dom';
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from 'react-icons/fa';

const CartItem = ({ product }) => {

  const { image, title, author, price, count, id } = product;
  const {
    incrementProductCount,
    decrementProductCount,
    removeProduct,
  } = useContext(ProductContext);

  return (
    <div className="cart-item">
      {/* cover */}
      <Link
        to={`/ksiazki/${id}`}
        className="cart-item__img-container cart-item__field"
      >
        <img className="cart-item__img" src={image} alt="cover" />
      </Link>

      {/* title */}
      <div className="cart-item__title cart-item__field">
        <h4>{title}</h4>
      </div>

      {/* author */}
      <div className="cart-item__author cart-item__field">{author}</div>

      {/* price */}
      <div className="cart-item__price cart-item__field">
        {price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
      </div>

      {/* count */}
      <div className="cart-item__count cart-item__field">
        <FaChevronCircleDown
          onClick={() => decrementProductCount(id)}
          className="cart-item__icon"
        />
        {count}
        <FaChevronCircleUp
          onClick={() => incrementProductCount(id)}
          className="cart-item__icon"
        />
      </div>

      {/* remove product */}
      <div className="cart-item__trash cart-item__field">
        <FaTrash
          onClick={() => removeProduct(id)}
          className="cart-item__icon cart-item__icon--remove"
        />
      </div>
      
      {/* total */}
      <div className="cart-item__total cart-item__field">
        {(price * count).toLocaleString('pl-PL', {
          style: 'currency',
          currency: 'PLN',
        })}
      </div>
    </div>
  );
};

export default CartItem;
