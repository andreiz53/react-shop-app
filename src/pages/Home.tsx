import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';

type Context = {
  state?: any;
};
type Product = {
  title: string;
  description: string;
  brand: string;
  thumbnail: string;
  price: number;
  id: number;
  qty: number;
};

function Home() {
  const {
    state: { products },
  }: Context = useContext(ShopContext);

  return (
    <ul className='max-w-7xl mx-auto py-10 products-list grid grid-cols-4 gap-8'>
      {products &&
        products.map((product: Product) => (
          <Product
            id={product.id}
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        ))}
    </ul>
  );
}

export default Home;
