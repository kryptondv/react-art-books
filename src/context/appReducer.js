export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_NAVBAR':
      return { ...state, navbarOpen: !state.navbarOpen };

    case 'HANDLE_CART':
      return { ...state, cartOpen: !state.cartOpen };

    case 'CLOSE_CART':
      return { ...state, cartOpen: false };

    case 'OPEN_CART':
      return { ...state, cartOpen: true };

    case 'SET_PRODUCTS':
      return {
        ...state,
        storeProducts: action.payload,
        filteredProducts: action.payload,
      };

    case 'SET_FEATURED_PRODUCTS':
      return { ...state, featuredProducts: action.payload };

    case 'SET_CART':
      return { ...state, cart: action.payload };

    case 'SET_CART_ITEMS':
      return { ...state, cartItems: action.payload };

    case 'GET_TOTALS':
      return { ...state, cartTotal: action.payload };

    case 'SET_PRICES':
      return {
        ...state,
        price: action.payload.maxPrice,
        maxPrice: action.payload.maxPrice,
        minPrice: action.payload.minPrice,
      };

    case 'CHANGE_FILTER_VALUE':
      const value = action.payload.value;
      const name = action.payload.name;
      return { ...state, [name]: value };

    case 'FILTER_PRODUCTS':
      const { storeProducts, search, category, price } = { ...state };
      let filteredProducts = [...storeProducts];

      // filter by search term
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      // filter by category
      if (category !== 'wszystkie') {
        filteredProducts = filteredProducts.filter(
          product => product.category === category
        );
      }

      // filter by price
      filteredProducts = filteredProducts.filter(
        product => product.price <= price
      );

      return { ...state, filteredProducts };

    default:
      return state;
  }
};
