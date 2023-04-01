import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className='app-container'>
      <header>
        <Header />
      </header>
      <div className='bg-indigo-700 min-h-screen text-white flex'>
        <Outlet />
        <div className='app-sidebar basis-1/4'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
