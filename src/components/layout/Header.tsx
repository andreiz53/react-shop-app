import { NavLink } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  return (
    <div className='bg-indigo-500 py-4 px-8 '>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-3xl font-semibold text-white'>Logo</div>
        <div className='text-l font-semibold text-white flex gap-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
