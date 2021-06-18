import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './utils/bulma/styles.scss'


const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  root
);
