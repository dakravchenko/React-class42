import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ProductCard from './components/ProductCard.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/product/:id' element={<ProductCard />} />
    </Routes>
  </Router>
);
