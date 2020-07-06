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
    
    default:
      return state;
  }
};
