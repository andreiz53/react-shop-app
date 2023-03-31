import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<div>Product</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
