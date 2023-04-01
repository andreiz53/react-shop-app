import { NavLink } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  return (
    <div
      className=' z-10 bg-indigo-300 py-4 px-8 bg-clip-padding backdrop-filter rounded-md backdrop-blur-md bg-opacity-40 fixed top-4 w-full max-w-7xl mx-auto border border-gray-100/75
    '
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-3xl font-semibold text-white'>
          <NavLink to='/'>Logo</NavLink>
        </div>
        <div className='text-l font-semibold text-white flex gap-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
