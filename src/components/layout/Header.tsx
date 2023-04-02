import { NavLink } from 'react-router-dom';
import CartButton from '../CartButton';

type Props = {};

function Header({}: Props) {
  return (
    <div
      className=' z-10 bg-zinc-900 py-4 px-8 bg-clip-padding backdrop-filter rounded-md backdrop-blur-xl bg-opacity-40 fixed top-4 w-full max-w-7xl mx-auto border border-gray-100/75
    '
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-3xl font-semibold text-white'>
          <NavLink to='/'>Logo</NavLink>
        </div>
        <div className='text-l font-semibold text-white flex gap-4 items-center relative'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
