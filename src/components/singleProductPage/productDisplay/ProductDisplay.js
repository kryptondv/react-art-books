import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context/context';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const { author, title, price, category, description, image, id } = product;
  return (
    <section className="product-display">
      <h1 className="product-display__main-title">{title}</h1>
      <div className="product-container">
        <div className="product-container__img-container">
          <img className="product-display__img" src={image} alt={title} />
        </div>
        <div className="product-container__details-container">
          <div className="product-display__detail-item">
            Autor: <span className="product-display__detail">{author}</span>
          </div>
          <div className="product-display__detail-item">
            Kategoria:{' '}
            <span className="product-display__detail">{category}</span>
          </div>
          <div className="product-display__detail-item product-display__detail-item--price">
            Cena:{' '}
            <span className="product-display__detail product-display__detail--price">
              {price.toLocaleString('pl-PL', {
                style: 'currency',
                currency: 'PLN',
              })}
            </span>
          </div>
          <Link
            onClick={() => addToCart(id)}
            to="/koszyk"
            className="btn product-display__btn"
          >
            Dodaj do koszyka
          </Link>
        </div>
      </div>
      <p className="product-display__description">{description}</p>
    </section>
  );
};

export default ProductDisplay;
