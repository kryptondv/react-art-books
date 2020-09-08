import React from 'react';

const Hamburger = ({ handleNavbarAndCart, navbarOpen }) => {
  return (
    <button
      className={`hamburger ${navbarOpen && 'hamburger--clicked'}`}
      onClick={handleNavbarAndCart}
    >
      <div className="hamburger__bars">
        <div className="hamburger__bar hamburger__bar--top"></div>
        <div className="hamburger__bar hamburger__bar--mid"></div>
        <div className="hamburger__bar hamburger__bar--bottom"></div>
      </div>
    </button>
  );
};

export default Hamburger;
