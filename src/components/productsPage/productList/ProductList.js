import React, { useContext } from 'react';
import Product from '../../Product';
import { ProductContext } from '../../../context/context';

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);

  const renderHelper = () => {
    if (filteredProducts.length > 0) {
      return (
        <div className="product-list-container">
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      );
    } else {
      // empty search
      return (
        <h2 className="product-list__empty-search">
          Żaden produkt nie spełnia podanych kryteriów
        </h2>
      );
    }
  };

  return (
    <section className="product-list">
      {renderHelper()}
    </section>
  );
};

export default ProductList;
