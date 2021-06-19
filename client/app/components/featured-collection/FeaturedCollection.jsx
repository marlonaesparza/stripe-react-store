import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import FeaturedProduct from '../shared/FeaturedProduct.jsx';
import './featured-collection.styles.scss';


const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);

  const productItems = products.filter((product, i) => i < 4)
    .map((product) => {
      return <FeaturedProduct product={product} id={product.id} />
    });


  return (
    <div className='featured-collection container'>
      <h2 className='featured-section-title'>Featured Collection</h2>
      <div className='products'>
        {
          productItems
        }
      </div>
    </div>
  );
};

export default FeaturedCollection;
