import React, { useEffect } from 'react'
import Hero from '../components/hero/Hero'
import ProductList from '../components/productsPage/productList/ProductList'
import Title from '../components/Title'
import ProductFilters from '../components/productsPage/productFilters/ProductFilters'

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
