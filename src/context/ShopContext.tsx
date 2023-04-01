import { createContext, useEffect, useReducer } from 'react';
import { shopReducer } from '../reducers/shopReducer';

export const ShopContext = createContext({});

const initialState = [
  {
    products: [],
    cart: [],
  },
];

export function ShopProvider({ children }: any) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=10');
        const json = await res.json();
        json.products.map((prod: any) => (prod.qty = 0));
        dispatch({
          type: 'INITIALIZE_SHOP',
          payload: {
            products: [...json.products],
            cart: [],
          },
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}
