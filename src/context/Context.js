import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { client } from './contentful';

const initialState = {
  navbarOpen: false,
  cartOpen: false,
  cartItems: 0,
  cart: [],
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  search: '',
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  category: 'wszystkie',
};


export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'artbooks',
      })
      .then(entry => setProducts(entry.items))
      .catch(err => console.log(err));
  }, []);

  const setProducts = products => {
    // format data
    const storeProducts = products.map(item => {
      const { id } = item.sys;
      const { url: image } = item.fields.image[0].fields.file;
      const product = { id, ...item.fields, image };
      return product;
    });
    const featuredProducts = storeProducts.filter(product => product.featured);
    const productPrices = storeProducts.map(product => product.price);
    const maxPrice = Math.max(...productPrices);
    const minPrice = Math.min(...productPrices);

    // set state
    dispatch({
      type: 'SET_PRODUCTS',
      payload: storeProducts,
    });

    dispatch({
      type: 'SET_FEATURED_PRODUCTS',
      payload: featuredProducts,
    });

    dispatch({
      type: 'SET_PRICES',
      payload: { maxPrice, minPrice },
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
    const tempCart = [...state.cart];
    const item = tempCart.find(item => item.id === id);

    item.count++;
    setCart(tempCart);
    getTotals(tempCart);
    setCartItems(tempCart);
  };

  const decrementProductCount = id => {
    const tempCart = [...state.cart];
    const item = tempCart.find(item => item.id === id);
    item.count--;
    if (item.count <= 0) {
      removeProduct(id);
    } else {
      setCart(tempCart);
      getTotals(tempCart);
      setCartItems(tempCart);
    }
  };

  const removeProduct = id => {
    const tempCart = [...state.cart];
    const itemIndex = tempCart.findIndex(item => item.id === id);
    tempCart.splice(itemIndex, 1);
    setCart(tempCart);
    getTotals(tempCart);
    setCartItems(tempCart);
  };

  const clearCart = () => {
    const tempCart = [];
    setCart(tempCart);
    getTotals(tempCart);
    setCartItems(tempCart);
  };

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
      price += product.price * product.count;
    });

    dispatch({
      type: 'GET_TOTALS',
      payload: price,
    });
  };

 const handleChange = ({ target }) => {
   dispatch({
     type: 'CHANGE_FILTER_VALUE',
     payload: target,
   });

   dispatch({
     type: 'FILTER_PRODUCTS',
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
        clearCart,
        handleChange
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
