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

  const addCartItem = () => {
    dispatch({
      type: 'ADD_CART_ITEM'
    })
  }

  const addToCart = id => {
    let tempCart = [...state.cart];
    const tempProducts = [...state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = {...tempItem, count: 1, total};
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
    }

    dispatch({
      type: 'SET_CART',
      payload: tempCart
    })

    addCartItem();
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
