import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App = (props) => {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
