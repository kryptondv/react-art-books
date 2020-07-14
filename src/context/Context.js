import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { items } from '../assets/data/data';

const initialState = {
  navbarOpen: false,
  cartOpen: false,
  cartItems: 0,
  cart: [],
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
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
    let tempCart = [...state.cart];
    const tempProducts = [...state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
    }

    setCart(tempCart);
    getTotals(tempCart);
    setCartItems(tempCart);
  };

  const setCart = cart => {
    dispatch({
      type: 'SET_CART',
      payload: cart,
    });
  };

  const incrementProductCount = id => {
    console.log(id);
  }

  const decrementProductCount = id => {
    console.log(id);
  }

  const removeProduct = id => {
    console.log(id);
  }

  const clearCart = () => {
    const tempCart = [];
    setCart(tempCart);
    getTotals(tempCart);
    setCartItems(tempCart);
  }

  const setCartItems = cart => {
    let itemsCount = 0;
    cart.forEach(product => (itemsCount += product.count));
    dispatch({
      type: 'SET_CART_ITEMS',
      payload: itemsCount,
    });
  };

  const getTotals = cart => {
    let price = 0;
    cart.forEach(product => {
      price += product.total * product.count;
    });

    dispatch({
      type: 'GET_TOTALS',
      payload: price,
    });
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
        incrementProductCount,
        decrementProductCount,
        removeProduct,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
