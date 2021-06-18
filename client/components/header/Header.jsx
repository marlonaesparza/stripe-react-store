import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CartIcon from '../cart-icon/CartIcon';


const NavMenuContainer = styled.nav`
  display: grid;
  grid-template-columns: 6fr 3fr 1fr;
  margin: 0;
  padding: 1rem;
`;

const LogoContainer = styled.div`
  margin: 0;
  font-size: 1.5rem;
`;

const NavOptionsList = styled.ul`
  display: block;
  margin: 0;
  list-styled-type: none;
`;

const NavOption = styled.li`
  display: inline-block;
  margin: 0;
  padding: .5rem;
`;

const StyledLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;


const Header = () => {
  return (
    <NavMenuContainer>
      <LogoContainer>
        <StyledLink to='/'>_blank</StyledLink>
      </LogoContainer>
      <NavOptionsList>
        <NavOption>
          <StyledLink to='/'>Home</StyledLink>
        </NavOption>
        <NavOption>
          <StyledLink to='/'>About</StyledLink>
        </NavOption>
        <NavOption>
          <StyledLink to='/'>Shop</StyledLink>
        </NavOption>
      </NavOptionsList>
      <CartIcon />
    </NavMenuContainer>
  );
};

export default Header;
