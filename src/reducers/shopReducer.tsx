export const shopReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INITIALIZE_CART': {
      return {
        products: [...action.payload],
        cart: [],
      };
    }
    case 'ADD_TO_CART': {
      console.log('ADDED TO CART', state);
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default: {
      throw new Error(`Shop reducer action.type ${action.type}`);
    }
  }
};
