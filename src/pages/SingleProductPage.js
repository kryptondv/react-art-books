import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/context';
import Hero from '../components/hero/Hero';
import ProductDisplay from '../components/singleProductPage/productDisplay/ProductDisplay';

const SingleProductPage = ({ match }) => {
  const slug = match.params.slug;
  const { storeProducts} = useContext(ProductContext);
  const product = storeProducts.find(product => product.id === slug);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const renderHelper = () => {
    if (product){
      return <ProductDisplay product={product}/>
    } else {
      return <h1 className="loading">Wczytuję...</h1>
    }
  }

  return (
    <>
      <Hero page="single-product" />
      {renderHelper()}
    </>
  );
};

export default SingleProductPage
