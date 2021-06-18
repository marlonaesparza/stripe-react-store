import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './utils/bulma/styles.scss'
import App from './app/App';


const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  root
);
