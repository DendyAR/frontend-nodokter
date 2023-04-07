import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import ProductTabel from './components/ProductTabel';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AddProducts from './pages/AddProducts';
import EditProducts from './pages/EditProducts';
import ProductDetail from './components/ProductDetail';
import Register from './pages/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<ProductTabel />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/add-products' element={<AddProducts />} />
          <Route path='/edit-products/:id' element={<EditProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
