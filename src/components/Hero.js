import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, page, titles }) => {
  return (
    <div className={`hero hero--${page}`}>
      <div className="hero__banner">
        {titles.map((title, index) => (
          <h2 key={index} className="hero__title">
            {title}
          </h2>
        ))}
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
