import React from 'react';
import { withRouter } from 'react-router-dom';
import product from '../../../assets/product.jpg';
import './main-section.styles.scss';


const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={product} alt='product' />
        </div>
        <div className='ms-m-description'>
          <h2>Product Title</h2>
          <p>Product Description</p>
          <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>
            shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);

