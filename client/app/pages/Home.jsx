import React from 'react';

import Layout from '../components/shared/layout/Layout';
import Hero from '../components/hero/Hero';
import MainSection from '../components/main-section/MainSection';
import FeaturedCollection from '../components/featured-collection/FeaturedCollection';


const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
