import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import Featured from '../components/HomePage/Featured';

const HomePage = () => {
  return (
    <>
      <Hero page="home" titles={['sztuka', 'architektura', 'design', 'fotografia']}>
        <Link to="/ksiazki" className='btn hero__btn'>zobacz</Link>
      </Hero>
      <Featured />
    </>
  );
}

export default HomePage
