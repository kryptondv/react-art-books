import React, { useContext, useRef, useEffect } from 'react';
import { ProductContext } from '../context/context';
import { Link } from 'react-router-dom';

const Sidecart = () => {
  const { cartOpen, closeCart, cart, cartTotal, handleNavbar } = useContext(
    ProductContext
  );

  useEffect(() => {
    const closeCartOnOutsideClick = e => {
      if (cartOpen && !sideCartRef.current.contains(e.target)) {
        closeCart();
      }
    };
    window.addEventListener('click', closeCartOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeCartOnOutsideClick);
    };
  }, [cartOpen, closeCart]);

  const sideCartRef = useRef();

  const renderHelper = () => {
    if (cart.length > 0) {
      return (
        <>
          <ul className="sidecart__list">
            {cart.map(product => (
              <li key={product.id} className="sidecart-item">
                <img
                  className="sidecart-item__img"
                  src={product.image}
                  alt="cart item"
                />
                <div className="sidecart-item__details">
                  <h3 className="sidecart-item__title">{product.title}</h3>
                  <span className="sidecart-item__count">
                    Ilość: {product.count}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="sidecart__suma">
            <h4 className="sidecart__total">
              Suma:
              {cartTotal.toLocaleString('pl-PL', {
                style: 'currency',
                currency: 'PLN',
              })}
            </h4>
            <Link
              onClick={handleNavbar}
              to="/koszyk"
              className="btn btn--small sidecart__btn"
            >
              Zobacz koszyk
            </Link>
          </div>
        </>
      );
    } else {
      return <h3 className="sidecart__empty">Koszyk jest pusty :(</h3>;
    }
  };

  return (
    <div
      className={`sidecart ${cartOpen && 'sidecart--is-open'}`}
      onClick={closeCart}
      ref={sideCartRef}
    >
      {renderHelper()}
    </div>
  );
};

export default Sidecart;
