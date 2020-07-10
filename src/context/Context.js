import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { items } from '../assets/data/data';

const initialState = {
  navbarOpen: false,
  cartOpen: false,
  cartItems: 0,
  cart: [],
  cartSubTotal: 0,
  carTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
  loading: false,
};

export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    setProducts(items);
  }, []);

  const setProducts = products => {
    // format data
    const storeProducts = products.map(item => {
      const { id } = item.sys;
      const { url: image } = item.fields.image.fields.file;
      const product = { id, ...item.fields, image };
      return product;
    });
    const featuredProducts = storeProducts.filter(product => product.featured);

    // set state
    dispatch({
      type: 'SET_PRODUCTS',
      payload: storeProducts,
    });

    dispatch({
      type: 'SET_FEATURED_PRODUCTS',
      payload: featuredProducts,
    });
  };

  const handleNavbar = () => {
    dispatch({
      type: 'HANDLE_NAVBAR',
    });
  };

  const handleCart = () => {
    dispatch({
      type: 'HANDLE_CART',
    });
  };

  const closeCart = () => {
    dispatch({
      type: 'CLOSE_CART',
    });
  };

  const openCart = () => {
    dispatch({
      type: 'OPEN_CART',
    });
  };

  const addToCart = id => {
    console.log(id);
  };

  const setSingleProduct = id => {
    console.log(id);
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        handleNavbar,
        handleCart,
        closeCart,
        openCart,
        addToCart,
        setSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
