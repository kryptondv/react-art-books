import React, { useContext } from 'react';
import Navbar from './Navbar';
import logo from '../assets/img/logo.png';
import { FaBars } from 'react-icons/fa';
import { ProductContext } from '../context/Context';

const Topbar = () => {
  const { handleNavbar, navbarOpen } = useContext(ProductContext);
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <img className="top-bar__logo" src={logo} alt="logo" />
        <FaBars
          className={`top-bar__icon ${navbarOpen && 'top-bar__icon--white'}`}
          onClick={handleNavbar}
        />
        <Navbar />
      </div>
    </div>
  );
};

export default Topbar;
