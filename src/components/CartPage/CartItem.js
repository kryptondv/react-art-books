import React, { useContext } from 'react';
import { ProductContext } from '../../context/Context';
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
      <Link
        to={`/ksiazki/${id}`}
        className="cart-item__img-container cart-item__field"
      >
        <img className="cart-item__img" src={image} alt="cover" />
      </Link>

      <div className="cart-item__title cart-item__field">
        <h4>{title}</h4>
      </div>

      <div className="cart-item__author cart-item__field">{author}</div>

      <div className="cart-item__price cart-item__field">
        {price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
      </div>

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
      <div className="cart-item__trash cart-item__field">
        <FaTrash
          onClick={() => removeProduct(id)}
          className="cart-item__icon cart-item__icon--remove"
        />
      </div>
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
