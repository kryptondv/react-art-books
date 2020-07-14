import React, { useContext } from 'react';
import { ProductContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Sidecart = () => {
  const { cartOpen, closeCart, cart, cartTotal } = useContext(ProductContext);

  const renderHelper = () => {
    if(cart.length > 0) {
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
          <h4 className="sidecart__total">
            Suma:
            {cartTotal.toLocaleString('pl-PL', {
              style: 'currency',
              currency: 'PLN',
            })}
          </h4>
          <Link
            to="/koszyk"
            className="btn btn--small sidecart__btn"
          >
            Zobacz koszyk
          </Link>
        </>
      );
    } else {
      return <h3>Koszyk jest pusty</h3>
    }
  }

  return (
    <div
      className={`sidecart ${cartOpen && 'sidecart--is-open'}`}
      onClick={closeCart}
    >
      {renderHelper()}
    </div>
  );
};

export default Sidecart;
