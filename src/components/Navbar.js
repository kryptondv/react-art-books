import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/Context';

const Navbar = () => {
  const { handleCart, handleNavbar, cartItems, navbarOpen } = useContext(ProductContext);

  return (
    <nav className={`navbar ${navbarOpen && 'navbar--is-open'}`}>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/ksiazki" onClick={handleNavbar}>
            książki
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/o-nas" onClick={handleNavbar}>
            o&nbsp;nas
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/kontakt" onClick={handleNavbar}>
            kontakt
          </Link>
        </li>
      </ul>
      <div className="navbar__cart" onClick={handleCart}>
        <FaCartPlus className="navbar__icon" />
        <div className="navbar__cart-items">{cartItems}</div>
      </div>
    </nav>
  );
};

export default Navbar;
