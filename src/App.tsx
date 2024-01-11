// src/App.tsx

import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepages/Homepage';
import Navbar from './components/Navbar/Navbar'; // Navbar ekledik
import AddProduct from './pages/Add-Product/AddProduct';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar'ı ekledik */}
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
