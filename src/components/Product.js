import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductContext } from '../context/Context';
import defaultImg from '../assets/img/products/book-0.png';

const Product = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const { title, image, id, price } = product;
  const [itemAdded, setItemAdded] = useState(false)

  const addItem = () => {
    addToCart(id);
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 1500);
  }

  return (
    <div className="product">
      <div className="product__img-container">
        <img className="product__img" src={image || defaultImg} alt={title} />
        <div className="product__icons">
          <Link
            to={`/ksiazki/${id}`}
            className="product__icon"
          >
            <FaSearch />
          </Link>
          <button className="product__icon" onClick={addItem}>
            <FaCartPlus />
          </button>
          {itemAdded && <span className="product__item-added-msg">Dodano do koszyka</span>}
        </div>
      </div>
      <p className="product__name">{title}</p>
      <p className="product__price">
        {price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
      </p>
    </div>
  );
};

export default Product;
