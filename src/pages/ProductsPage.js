import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import ProductList from '../components/ProductsPage/ProductList'
import Title from '../components/Title'
import ProductFilters from '../components/ProductsPage/ProductFilters'

const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero page="books" />
      <Title title="książki"/>
      <ProductFilters />
      <ProductList />
    </>
  )
}

export default ProductsPage
