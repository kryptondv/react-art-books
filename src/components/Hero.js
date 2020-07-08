import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, page, titles }) => {
  return (
    <div className={`hero hero--${page}`}>
      <div className="hero__banner">
        {titles.map(title => <h2 className="hero__title">{title}</h2>)}
        {children}
      </div>
    </div>
  );
};



export default Hero;
