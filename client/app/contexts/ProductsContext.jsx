import React, { createContext, useState } from 'react';
import testdata from '../../shop/testdata.js';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(testdata);
 
  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
