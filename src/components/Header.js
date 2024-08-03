// src/components/Header.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Styled component for the header container
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(20, 20, 20, 0.9); // Dark transparent background
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

// Styled component for the navigation links
const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

// Styled component for the logo
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e94560; // Light color for the logo text
`;

// Styled component for the individual link
const NavLink = styled(Link)`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #ffffff; // Light color for the links
  text-decoration: none;
  position: relative;

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #e94560;
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
        <Logo>RK</Logo>
        <div>
          <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={500}>
            About
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </div>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
