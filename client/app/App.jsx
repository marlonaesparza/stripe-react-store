import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import MainSection from './components/main-section/MainSection';
import FeaturedCollection from './components/featured-collection/FeaturedCollection';


const App = (props) => {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </div>
  );
};

export default App;
