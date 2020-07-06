import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/img/logo.png';
import { FaBars } from 'react-icons/fa';
import { ProductContext } from '../context/Context';

const Topbar = () => {
  const { handleNavbar, navbarOpen } = useContext(ProductContext);
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <Link to="/">
          <img className="top-bar__logo" src={logo} alt="logo" />
        </Link>
        <FaBars
          className={`top-bar__icon ${
            navbarOpen && 'top-bar__icon--navbar-is-open'
          }`}
          onClick={handleNavbar}
        />
        <Navbar />
      </div>
      <div
        className={`overlay ${navbarOpen && 'overlay--navbar-is-open'}`}
        onClick={handleNavbar}
      ></div>
    </div>
  );
};

export default Topbar;
