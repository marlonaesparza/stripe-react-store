import React from 'react';
import './featured-product.styles.scss';


const FeaturedProduct = (product) => {
  const { title, imageUrl, price } = product;

  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <img src={ imageUrl } alt='product-image' />
      </div>
      <div className='name-price'>
        <h3>{ title }</h3>
        <p>$ { price }</p>
        <button className='button is-black nomad-btn'>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct.jsx;
