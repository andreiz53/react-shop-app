import { Outlet } from 'react-router-dom';
import Header from './Header';

type Props = {};

function Layout({}: Props) {
  return (
    <div className='app-container'>
      <header>
        <Header />
      </header>
      <div className='bg-indigo-700 min-h-screen text-white'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
