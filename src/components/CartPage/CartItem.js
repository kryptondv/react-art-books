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
        
      >
        <img className="cart-item__img" src={image} alt="cover" />
      </Link>

      <div className="cart-item__title">
        <h4>{title}</h4>
      </div>

      <div className="cart-item__author">{author}</div>

      <div className="cart-item__price">
        {price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
      </div>

      <div className="cart-item__count">
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
      <div className="cart-item__trash">
        <FaTrash
          onClick={() => removeProduct(id)}
          className="cart-item__icon cart-item__icon--remove"
        />
      </div>
      <div className="cart-item__total">
        {(price * count).toLocaleString('pl-PL', {
          style: 'currency',
          currency: 'PLN',
        })}
      </div>
    </div>
  );
};

export default CartItem;
