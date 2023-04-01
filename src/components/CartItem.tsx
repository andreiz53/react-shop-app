import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

type Props = {
  id: number;
};
type Context = {
  state?: any;
  dispatch?: any;
};
type Product = {
  id: number;
  title: string;
  qty: string;
};
type CartItem = {
  id: number;
  qty: number;
};
function CartItem({ id }: Props) {
  const {
    state: { products, cart },
    dispatch,
  }: Context = useContext(ShopContext);

  return (
    <div className='cart-item'>
      {products
        .filter((product: Product) => product.id === id)
        .map((prod: Product) => (
          <div key={prod.id}>
            <h3>{prod.title}</h3>
            <p>
              Qty:{' '}
              {cart.filter((cartItem: CartItem) => cartItem.id === id)[0].qty}
            </p>
          </div>
        ))}
    </div>
  );
}

export default CartItem;
