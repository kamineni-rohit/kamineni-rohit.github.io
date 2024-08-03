// src/components/Header.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Styled component for the header container
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${({ scrolled }) => (scrolled ? '#009ACD' : '#FFFFFF')}; // Change background color on scroll
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  color: ${({ scrolled }) => (scrolled ? '#FFFFFF' : '#009ACD')}; // Change logo color on scroll
`;

// Styled component for the individual link
const NavLink = styled(Link)`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ scrolled }) => (scrolled ? '#FFFFFF' : '#009ACD')}; // Change link color on scroll
  text-decoration: none;
  position: relative;

  &.active {
    color: #FFFFFF; // Highlight current section link
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #FFFFFF;
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavLinks>
        <Logo scrolled={scrolled}>RK</Logo>
        <div>
          <NavLink to="home" smooth={true} duration={500} className="active">
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
