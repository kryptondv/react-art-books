import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  navbarOpen:false,
  cartOpen: false,
  cartItems: 0,
}

export const ProductContext = createContext();


// Provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleNavbar = () => {
    dispatch({
      type: 'HANDLE_NAVBAR'
    })
  }

  const handleCart = () => {
    dispatch({
      type: 'HANDLE_CART'
    })
  }

  const closeCart = () => {
    dispatch({
      type: 'CLOSE_CART'
    })
  }

  const openCart = () => {
    dispatch({
      type: 'OPEN_CART'
    })
  }

  return (
    <ProductContext.Provider
      value={
        {...state, 
          handleNavbar,
          handleCart,
          closeCart,
          openCart
      }
    }
    >
      {children}
    </ProductContext.Provider>
  );
};

