import { NavLink } from 'react-router-dom';

type Props = {};

function Footer({}: Props) {
  return (
    <div className=' mt-16 mb-4 z-10 bg-zinc-900 py-4 px-8 bg-clip-padding backdrop-filter rounded-md backdrop-blur-xl bg-opacity-40  w-full max-w-7xl mx-auto border border-gray-100/75'>
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

export default Footer;
