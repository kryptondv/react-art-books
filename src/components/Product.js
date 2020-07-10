import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductContext } from '../context/Context';
import defaultImg from '../assets/img/products/book-0.png';

const Product = ({ product }) => {
  const { addToCart, setSingleProduct } = useContext(ProductContext);
  const { title, image, id } = product;

  return (
    <div className="product">
      <div className="product__img-container">
        <img className="product__img" src={image || defaultImg} alt={title} />
        <div className="product__icons">
        <Link
          to={`/ksiazki/${id}`}
          className="product__icon"
          onClick={()=>setSingleProduct(id)}
        >
          <FaSearch/>
        </Link>
        <button
          className="product__icon"
          onClick={()=>addToCart(id)}
        >
          <FaCartPlus />
        </button>
        </div>
      </div>
      <p className="product__name">{title}</p>
    </div>
  );
};

export default Product;
