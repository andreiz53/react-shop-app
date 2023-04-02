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
  discountPercentage: number;
};

function Home() {
  const {
    state: { products },
  }: Context = useContext(ShopContext);

  return (
    <ul className='max-w-7xl mx-auto py-10 px-10 products-list grid grid-cols-4 gap-8 bg-zinc-800 bg-clip-padding backdrop-filter rounded-xl backdrop-blur-sm bg-opacity-40 border border-gray-100/75'>
      {products &&
        products.map((product: Product) => (
          <Product
            id={product.id}
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
    </ul>
  );
}

export default Home;
