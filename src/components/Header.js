import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import styled from 'styled-components'; // Import styled-components for styling

// Styled component for the navigation bar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34; // Dark background color
  color: white; // White text color
`;

// Styled component for the navigation links
const NavLinks = styled.div`
  display: flex;
  gap: 1rem; // Space between links
`;

// Header component definition
const Header = () => {
  return (
    <Nav>
      <h1>My Portfolio</h1> {/* Site title */}
      <NavLinks>
        {/* Navigation links */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header; // Export the Header component
