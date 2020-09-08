import React from 'react'
import Hero from '../components/hero/Hero'
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/homePage/featuredProducts/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <Hero page="home" titles={['sztuka', 'architektura', 'design', 'fotografia']}>
        <Link to="/ksiazki" className='btn hero__btn'>zobacz</Link>
      </Hero>
      <FeaturedProducts />
    </>
  );
}

export default HomePage
