import React from 'react';
import { withRouter } from 'react-router-dom';
import mainsection from '../../../assets/mainsection.jpg';
import './main-section.styles.scss';


const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={mainsection} alt='main-section-image' />
        </div>
        <div className='ms-m-description'>
          <h2>Distance Yourself From Others</h2>
          <p>Cookie sweet tiramisu halvah danish. Cake chupa chups wafer candy jelly. Sugar plum I love jujubes tart cake. Oat cake sweet roll lollipop brownie. Tart I love caramels biscuit dragée sweet roll. Chupa chups I love I love cookie dragée. Sugar plum pie cupcake icing marzipan bonbon.</p>
          <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);

