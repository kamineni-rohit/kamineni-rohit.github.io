// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub, FaDev } from 'react-icons/fa';

// Styled component for the footer container
const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: rgba(20, 20, 20, 0.9); // Dark transparent background
  color: #ffffff; // Light color for text
  text-align: center;
`;

// Styled component for the social links container
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

// Styled component for each social link
const SocialLinkItem = styled.div`
  font-size: 1.5rem;

  a {
    color: #e94560; // Light color for the social link icons
    transition: color 0.3s;

    &:hover {
      color: #ffffff; // Change color on hover
    }
  }
`;

// Styled component for the copyright text
const Copyright = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0; // Greyish color for the copyright text
`;

// Define the Footer component
const Footer = () => {
  return (
    <FooterContainer id="contact">
      <SocialLinks>
        <SocialLinkItem>
          <a href="https://www.linkedin.com/in/rohitkamineni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialLinkItem>
        <SocialLinkItem>
          <a href="https://twitter.com/rohitkamineni" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </SocialLinkItem>
        <SocialLinkItem>
          <a href="https://github.com/rohitkamineni" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialLinkItem>
        <SocialLinkItem>
          <a href="https://dev.to/rohitkamineni" target="_blank" rel="noopener noreferrer">
            <FaDev />
          </a>
        </SocialLinkItem>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Rohit Kamineni. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
