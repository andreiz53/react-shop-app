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
    <li className='product-single bg-indigo-50 text-[#10002b] rounded-xl  border border-gray-100/75'>
      <div className='product-image rounded-t-xl'>
        <Link
          to={`/products/${id}`}
          className='block w-full h-full rounded-t-xl'
        >
          <img
            src={thumbnail}
            alt={title}
            className='h-64 object-cover rounded-t-xl'
          />
        </Link>
      </div>
      <div className='product-title px-4 pt-4 font-semibold text-l'>
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <div className='product-price px-4 pb-4 text-green-600 font-semibold'>
        ${price}
      </div>
      <form onSubmit={(e) => handleAddToCart(id, e)}>
        <div className='product-qty mx-4 mb-2 '>
          <div className='text-xs font-semibold mb-1'>Quantity:</div>
          <input
            className='border-2 pl-2 py-0 border-black border-solid rounded w-16'
            type='number'
            ref={qtyInput}
            min='0'
            placeholder='0'
          />
        </div>
        <button className='w-full text-center bg-[#10002b] text-white rounded-b-xl py-2'>
          Add to cart
        </button>
      </form>
    </li>
  );
}

export default Product;
