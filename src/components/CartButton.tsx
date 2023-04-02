import { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

type Context = {
  state?: any;
};

type Props = {};

function CartButton({}: Props) {
  const [active, setActive] = useState(false);
  const {
    state: { cart },
  }: Context = useContext(ShopContext);

  const calculatedTotal = () => {
    let total = 0;
    cart.forEach((cartItem: any) => {
      total += Number(cartItem.price * cart.item.qty);
    });
    return <span>{total}</span>;
  };

  return (
    <>
      <div
        className='cart-button flex items-center'
        onClick={() => setActive(!active)}
      >
        <FaShoppingCart />
        {cart?.length ? (
          <div className='cart-number'>{cart?.length}</div>
        ) : null}
      </div>
      {active && (
        <div className='cart-menu-wrapper'>
          <div className='cart-menu bg-clip-padding backdrop-filter rounded-md backdrop-blur-xl bg-opacity-90 bg-zinc-900 border border-gray-100/75 py-2 px-2'>
            {!cart?.length && <p className='text-xs'>No items in cart.</p>}
            {cart?.map((cartItem: any) => (
              <CartItem id={cartItem.id} key={cartItem.id} />
            ))}
            {/* //TODO: output total price */}
            {cart?.length ? (
              <p className='pt-2 mb-8'>Total: {/*calculatedTotal()*/}</p>
            ) : null}
            {cart?.length ? (
              <Link
                to='/cart'
                className='mt-2 block bg-white text-[#12c2e9] text-center py-1 rounded uppercase font-semibold text-sm
              '
              >
                View cart
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default CartButton;
