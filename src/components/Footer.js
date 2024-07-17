// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the footer container
const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #0f3460;
  color: #ffffff;
  text-align: center;
`;

// Footer component definition
const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2024 Rohit Kamineni. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
