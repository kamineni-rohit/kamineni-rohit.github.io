// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaMedium, FaGithub, FaDev } from 'react-icons/fa';

// Styled component for the footer container
const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #1a1a2e;
  color: #ffffff;
  text-align: center;
`;

// Styled component for the social links list
const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

// Styled component for each social link item
const SocialLinkItem = styled.li`
  a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #e94560;
    }
  }
`;

// Styled component for the copyright text
const Copyright = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #b0b0b0;
`;

// Define the Footer component
const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h4>Work With Me</h4>
      <SocialLinks>
        <SocialLinkItem>
          <a href="https://www.linkedin.com/in/rohit-kamineni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialLinkItem>
        <SocialLinkItem>
          <a href="https://twitter.com/rohitkamineni" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </SocialLinkItem>
        <SocialLinkItem>
          <a href="https://medium.com/@rohitkamineni" target="_blank" rel="noopener noreferrer">
            <FaMedium />
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
