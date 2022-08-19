import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './index.css';

// components
import App from './App';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzaInfo from './components/PizzaInfo/PizzaInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:pizzaId' element={<PizzaInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);