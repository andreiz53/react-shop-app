import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CartItem from '../CartItem';

type Props = {};

type Context = {
  state?: any;
};
type Item = {
  id: number;
  qty: number;
};

function Sidebar({}: Props) {
  const {
    state: { cart },
  }: Context = useContext(ShopContext);

  return (
    <div className='mt-10 px-4 border-l-2 border-solid border-white min-h-screen'>
      <div className='cart-container'>
        <h3 className='text-white font-semibold'>Your cart:</h3>
        <ul>
          {cart &&
            cart.map((item: Item) => (
              <CartItem key={item.id * 10} id={item.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
