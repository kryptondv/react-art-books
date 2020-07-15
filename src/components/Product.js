import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductContext } from '../context/Context';
import defaultImg from '../assets/img/products/book-0.png';

const Product = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const { title, image, id, price } = product;
  const [itemAdded, setItemAdded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const productRef = useRef();

  
  const addItem = () => {
    addToCart(id);
    setItemAdded(true);
  };
  
  useEffect(() => {
    let itemAddedMessageTimeout = setTimeout(() => {
      setItemAdded(false);
    }, 1500);
    
    return () => {
      clearTimeout(itemAddedMessageTimeout);
    };
  }, [itemAdded]);
  

  
  // removes mobile overlay, that prevents accidental clicking on hidden icons
  const onProductClick = () => {
    setClicked(true);
  };

  // sets the mobile overlay back on outside click
  useEffect(() => {
    const setClickedFalseOnOutside = e => {
      if (!productRef.current.contains(e.target)) {
        setClicked(false);
      }
    };
    window.addEventListener('click', setClickedFalseOnOutside);
    return () => {
      window.removeEventListener('click', setClickedFalseOnOutside);
    };
  }, []);

  return (
    <div
      onClick={onProductClick}
      className={`product ${clicked && 'product--clicked'}`}
      ref={productRef}
    >
      <div className="product__img-container">
        <img className="product__img" src={image || defaultImg} alt={title} />
        <div className="product__icons">
          <Link to={`/ksiazki/${id}`} className="product__icon">
            <FaSearch />
          </Link>
          <button className="product__icon" onClick={addItem}>
            <FaCartPlus />
          </button>
          {itemAdded && (
            <span className="product__item-added-msg">Dodano do koszyka</span>
          )}
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
