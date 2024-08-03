// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub, FaDev } from 'react-icons/fa';

// Styled component for the footer container
const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #F0F0F0; // Very light grey background
  color: #009ACD; // Enhanced deep sky blue color
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
    color: #009ACD; // Enhanced deep sky blue color for the social link icons
    transition: color 0.3s;

    &:hover {
      color: #007BB5; // Slightly deeper color on hover
    }
  }
`;

// Styled component for the copyright text
const Copyright = styled.p`
  font-size: 0.9rem;
  color: #666666; // Greyish color for the copyright text
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
