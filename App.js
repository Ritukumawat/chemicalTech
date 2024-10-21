import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import ManufacturerPage from './ManufacturerPage';
import './App.css';

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement('div', { className: 'App' },
      React.createElement('nav', null,
        React.createElement(Link, { to: '/' }, 'Check Product'), ' | ',
        React.createElement(Link, { to: '/manufacturer' }, 'Manufacturer')
      ),
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(ProductPage) }),
        React.createElement(Route, { path: '/manufacturer', element: React.createElement(ManufacturerPage) })
      )
    )
  );
};

export default App;
