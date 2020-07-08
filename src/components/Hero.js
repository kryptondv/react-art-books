import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, page, titles, subtitle }) => {
  return (
    <div className={`hero hero--${page}`}>
      <div className="hero__banner">
        {titles && titles.map((title, index) => (
          <h2 key={index} className="hero__title">
            {title}
          </h2>
        ))}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

Hero.propTypes = {
  titles: PropTypes.array,
};

Hero.defaultProps = {
  page: 'home',
};

export default Hero;
