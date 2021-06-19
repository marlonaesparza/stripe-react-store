import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import ProductsContextProvider from './app/contexts/ProductsContext.jsx';

import './utils/bulma/styles.scss'


const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App/>
    </ProductsContextProvider>
  </BrowserRouter>,
  root
);
