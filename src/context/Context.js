import React, { createContext, useReducer, useEffect } from 'react';
import appReducer from './appReducer';
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
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // import data from contentful cms
    client
      .getEntries({
        content_type: 'artbooks',
      })
      .then(entry => setProducts(entry.items))
      .catch(err => console.log(err));
  }, []);

  // process imported product data
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

  // ui
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

  // udpate cart
  const setCart = cart => {
    let price = 0;
    let itemsCount = 0;
    cart.forEach(product => {
      price += product.price * product.count;
      itemsCount += product.count;
    });
    dispatch({
      type: 'SET_CART',
      payload: cart,
    });

    dispatch({
      type: 'GET_TOTALS',
      payload: price,
    });

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: itemsCount,
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
  };

  const incrementProductCount = id => {
    const tempCart = [...state.cart];
    const item = tempCart.find(item => item.id === id);

    item.count++;
    setCart(tempCart);
  };

  const decrementProductCount = id => {
    const tempCart = [...state.cart];
    const item = tempCart.find(item => item.id === id);
    item.count--;
    if (item.count <= 0) {
      removeProduct(id);
    } else {
      setCart(tempCart);
      // getTotals(tempCart);
      // setCartItems(tempCart);
    }
  };

  const removeProduct = id => {
    const tempCart = [...state.cart];
    const itemIndex = tempCart.findIndex(item => item.id === id);
    tempCart.splice(itemIndex, 1);
    setCart(tempCart);
  };

  const clearCart = () => {
    const tempCart = [];
    setCart(tempCart);
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
        handleChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
