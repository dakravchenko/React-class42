import React from 'react';
import ReactDOM from 'react-dom/client';

import {ProductCard} from './components/Product/ProductCard.js';
import { Favorites } from './pages/Favorites';
import Products from './pages/Products.js';
import { GlobalProvider } from './context/GlobalState.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider className='App'>
  <Router>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/product/:id' element={<ProductCard />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  </Router>
  </GlobalProvider>
);
