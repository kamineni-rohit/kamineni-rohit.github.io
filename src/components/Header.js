import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the header container
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: #e94560;
  animation: ${fadeIn} 1s ease-in-out;
  z-index: 1000;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
`;

// Styled component for the logo
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e94560;
`;

// Styled component for the navigation links container
const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

// Styled component for each navigation link
const NavLink = styled.a`
  color: #e94560;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #e94560;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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
