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
      let updatedProducts = state.products.map((product: Product) => {
        if (product.id === action.payload.id) {
          product.qty += action.payload.qty;
        }
        return product;
      });
      // let updatedCart = state.cart.map((item: Item) => {
      //   if (item.id === action.payload.id) {
      //     item.qty += action.payload.qty;
      //   }
      //   return item;
      // });

      // console.log(`updatedProducts`, updatedProducts);
      // console.log(`updatedCart`, updatedCart);

      // return {
      //   products: updatedProducts,
      //   cart: updatedCart,
      // };
      console.log('ADD_TO_CART', state);

      return {
        products: updatedProducts,
        cart: [...state.cart, action.payload],
      };
      // return {
      //   products: [...state.products],
      //   cart: [...state.cart, action.payload],
      // };
    }
    default: {
      throw new Error(`Shop reducer action.type ${action.type}`);
    }
  }
};
