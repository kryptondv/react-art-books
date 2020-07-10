export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_NAVBAR':
      return {...state, navbarOpen: !state.navbarOpen}
    
    case 'HANDLE_CART':
      return {...state, cartOpen: !state.cartOpen}
    
    case 'CLOSE_CART':
      return {...state, cartOpen: false}
    
    case 'OPEN_CART':
      return {...state, cartOpen: true}
    
    case 'SET_PRODUCTS':
      return {...state, storeProducts: action.payload, filteredProducts: action.payload}

    case 'SET_FEATURED_PRODUCTS':
      return {...state, featuredProducts: action.payload}
    default:
      return state;
  }
};
