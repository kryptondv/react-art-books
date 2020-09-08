import React from 'react';
import Hero from '../components/hero/Hero';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <Hero titles={['404']} subtitle="Nie ma takiej strony">
        <Link to="/" className="btn hero__btn">
          Strona główna
        </Link>
      </Hero>
    </>
  );
};

export default ErrorPage;
