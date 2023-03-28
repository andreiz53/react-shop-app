import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ProductContext = createContext({});

export function ProductProvider({ children }: any) {
  const {
    data: data,
    isLoading,
    error,
  } = useFetch('https://dummyjson.com/products?limit=10');

  return (
    <ProductContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
