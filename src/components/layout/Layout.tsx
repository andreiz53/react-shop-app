import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className='app-container bg-[#0f0f0f] pt-32'>
      <header className='flex justify-center'>
        <Header />
      </header>
      <div className='min-h-screen text-white flex'>
        <Outlet />
        {/*  <Sidebar /> */}
      </div>
      <footer className='flex justify-center'>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
