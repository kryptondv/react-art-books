import React, { useContext } from 'react';
import Product from '../Product';
import { ProductContext } from '../../context/Context';

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext)

  return (
    <section className="product-list">
      <div className="product-list-container">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
