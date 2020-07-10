import React, { useContext } from 'react';
import Title from '../Title';
import { ProductContext } from '../../context/Context';
import Product from '../Product';

const Featured = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <div>
      <Title title="nowości" />
      {featuredProducts.map(product => <Product key={product.id}/>)}
    </div>
  );
};

export default Featured;
