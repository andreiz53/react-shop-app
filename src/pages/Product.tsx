// import { useParams } from 'react-router-dom';

import { createRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

type Props = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
};
type Context = {
  dispatch?: any;
};

function Product({ id, thumbnail, title, price }: Props) {
  const { dispatch }: Context = useContext(ShopContext);
  const qtyInput = createRef<HTMLInputElement>();

  function handleAddToCart(
    prodId: number,
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (Number(qtyInput.current?.value) > 0) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { id: prodId, qty: Number(qtyInput.current?.value) },
      });
    } else if (Number(qtyInput.current?.value) === 0) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: prodId,
      });
    }
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
      <form onSubmit={(e) => handleAddToCart(id, e)}>
        <div className='product-qty mx-4 mb-2 '>
          <div className='text-s mb-2'>Quantity:</div>
          <input
            className='border-2 p-2 border-black border-solid rounded w-16'
            type='number'
            ref={qtyInput}
            min='0'
            placeholder='0'
          />
        </div>
        <button className='w-full text-center bg-indigo-500 text-white py-2'>
          Add to cart
        </button>
      </form>
    </li>
  );
}

export default Product;
