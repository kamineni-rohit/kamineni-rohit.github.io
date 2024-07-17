// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the header container
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: #e94560;
`;

// Styled component for the logo
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Styled component for the navigation links container
const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

// Styled component for each navigation link
const NavLink = styled.a`
  color: #e94560;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

// Header component definition
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>RK</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
