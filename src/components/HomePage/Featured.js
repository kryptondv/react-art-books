import React, { useContext } from 'react';
import { ProductContext } from '../../context/context';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Product from '../Product';

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
