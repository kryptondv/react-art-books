import React, { useContext } from 'react';
import Title from '../Title';
import { ProductContext } from '../../context/Context';
import Product from '../Product';
import { Link } from 'react-router-dom';

const Featured = () => {
  const { featuredProducts } = useContext(ProductContext);
  const featuredProductsJSX = featuredProducts.map(product => (
    <Product key={product.id} product={product} />
  ));
  return (
    <section className="featured-products">
      <Title title="nowości" />
      <div className="featured-products-container">{featuredProductsJSX}</div>
      <Link
        to="/ksiazki"
        className="btn featured-products__btn"
      >
        Zobacz więcej
      </Link>
    </section>
  );
};

export default Featured;
