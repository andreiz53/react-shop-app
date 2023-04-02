type Product = {
  id: number;
  qty: number;
};
type Item = {
  id: number;
  qty: number;
};

export const shopReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INITIALIZE_SHOP': {
      return { ...action.payload };
    }
    case 'ADD_TO_CART': {
      let alreadyExists = state.cart.some(
        (item: any) => item.id === action.payload.id
      );
      let newCart = [];
      if (alreadyExists) {
        newCart = state.cart.map((cartItem: any) => {
          if (cartItem.id === action.payload.id) {
            cartItem.qty = action.payload.qty;
          }
          return cartItem;
        });
      } else {
        newCart = [...state.cart, action.payload];
      }
      console.log(newCart);
      return {
        products: [...state.products],
        cart: newCart,
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        products: [...state.products],
        cart: state.cart.filter(
          (cartItem: any) => cartItem.id !== action.payload
        ),
      };
    }
    default: {
      throw new Error(`Shop reducer action.type ${action.type}`);
    }
  }
};
