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
  price: number;
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
          <div key={prod.id} className='flex justify-between items-center py-2'>
            <div className='grow shrink-0'>
              <h3>{prod.title}</h3>
              <p>${prod.price}</p>
            </div>
            <div>
              <p className='text-xs mb-1'>
                Qty:
                {cart.filter((cartItem: CartItem) => cartItem.id === id)[0].qty}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CartItem;
