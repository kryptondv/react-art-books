import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Hero page="home" titles={['sztuka', 'architektura', 'design', 'fotografia']}>
        <Link to="/ksiazki" className='btn hero__btn'>zobacz</Link>
      </Hero>
    </>
  );
}

export default HomePage
