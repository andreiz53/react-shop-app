// import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  dispatch: any;
};

function Product({ id, thumbnail, title, price, dispatch }: Props) {
  const [qty, setQty] = useState('1');

  // const { id } = useParams();

  function handleAddToCart(prodId: number) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id: prodId, qty: qty },
    });
  }

  return (
    <li className='product-single bg-white text-black'>
      <div className='product-image'>
        <Link to={`/products/${id}`} className=' block w-full h-full'>
          <img src={thumbnail} alt={title} className='h-64 object-cover' />
        </Link>
      </div>
      <div className='product-title px-4 pt-4 font-semibold'>{title}</div>
      <div className='product-price px-4 pb-4 text-green-700 font-semibold'>
        ${price}
      </div>
      <div className='product-qty mx-4 mb-2 '>
        <div className='text-s mb-2'>Quantity:</div>
        <input
          className='border-2 p-2 border-black border-solid rounded w-16'
          type='number'
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleAddToCart(id)}
        className='w-full text-center bg-indigo-500 text-white py-2'
      >
        Add to cart
      </button>
    </li>
  );
}

export default Product;
