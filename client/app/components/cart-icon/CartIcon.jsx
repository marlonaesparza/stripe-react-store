import React from 'react';
import styled from 'styled-components';

import CartIconPng from '../../../assets/carticon.png';


const CartIconContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const CartIconImg = styled.img`
  width: 30px;
`;

const CartIconCount = styled.span`
  margin-left: -10px;
  background-color: grey;
  color: black;
  padding-right: 4px;
  border-radius: 10px;
`;


const CartIcon = (props) => {
  return (
    <CartIconContainer>
      <CartIconImg src={CartIconPng} alt='shopping-cart-icon' />
      <CartIconCount> 5 </CartIconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
