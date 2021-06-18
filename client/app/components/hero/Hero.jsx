import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-primary hero-img">
      <div className="hero-body">
        <h1 className="hero-title">
          A world without influence...
        </h1>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

