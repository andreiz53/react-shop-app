import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

type Props = {};

type Context = {
  data?: any;
  isLoading?: boolean;
  error?: string;
};
type Product = {
  title: string;
  description: string;
  brand: string;
  thumbnail: string;
  price: number;
  id: number;
};

function Home({}: Props) {
  const { data, isLoading, error }: Context = useContext(ProductContext);

  return (
    <ul className='max-w-7xl mx-auto py-10 products-list grid grid-cols-4 gap-8'>
      {isLoading && <div>Loading...</div>}
      {error && <div>There is an error</div>}
      {data &&
        data.products.map((product: Product) => (
          <li className='product-single bg-white text-black' key={product.id}>
            <div className='product-image'>
              <Link
                to={`/products/${product.id}`}
                className=' block w-full h-full'
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='h-64 object-cover'
                />
              </Link>
            </div>
            <div className='product-title px-4 pt-4 font-semibold'>
              {product.title}
            </div>
            <div className='product-price px-4 pb-4 text-green-700 font-semibold'>
              ${product.price}
            </div>
            <button className='w-full text-center bg-indigo-500 text-white py-2'>
              Add to cart
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Home;
