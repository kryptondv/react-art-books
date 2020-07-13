import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/Context';
import Hero from '../components/Hero';
import ProductDisplay from '../components/SingleProductPage/ProductDisplay';

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
      return <h1>loading...</h1>
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
