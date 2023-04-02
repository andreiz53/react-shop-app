// import { useParams } from 'react-router-dom';

import { createRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

type Props = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  discountPercentage: number;
};
type Context = {
  dispatch?: any;
};

function Product({ id, thumbnail, title, price, discountPercentage }: Props) {
  const { dispatch }: Context = useContext(ShopContext);
  const qtyInput = createRef<HTMLInputElement>();

  function handleAddToCart(
    prodId: number,
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (Number(qtyInput.current?.value) > 0) {
      //TODO: UPDATE_CART
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: prodId,
          qty: Number(qtyInput.current?.value),
          price: price,
        },
      });
    } else if (Number(qtyInput.current?.value) === 0) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: prodId,
      });
    }
  }

  return (
    <li className='product-single bg-slate-100 text-[#10002b] rounded-xl  border border-gray-100/75 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
      <div className='product-image rounded-t-xl'>
        <div className='product-discount'>-{discountPercentage}%</div>
        <Link
          to={`/products/${id}`}
          className='block w-full h-full rounded-t-xl overflow-hidden'
        >
          <img
            src={thumbnail}
            alt={title}
            className='h-64 object-cover rounded-t-xl w-full hover:scale-110 transition'
          />
        </Link>
      </div>
      <div className='product-title px-4 pt-4 font-semibold text-l text-white'>
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <div className='product-price px-4 pb-4 text-[#12c2e9] font-semibold'>
        ${price}
      </div>
      <form onSubmit={(e) => handleAddToCart(id, e)}>
        <div className='product-qty mx-4 mb-2 '>
          <div className='text-xs font-regular mb-1 text-white'>Quantity:</div>
          <input
            className='focus:visible-outline-0 focus:outline-0 border-2 pl-2 py-0 border border-gray-100/75 rounded w-16 bg-transparent text-white placeholder-white mb-2'
            type='number'
            ref={qtyInput}
            min='0'
            placeholder='0'
          />
        </div>
        <button
          className='add-cart-btn w-full text-center bg-[#10002b] text-white rounded-b-xl py-2 uppercase font-semibold
        tracking-wide'
        >
          Add to cart
        </button>
      </form>
    </li>
  );
}

export default Product;
