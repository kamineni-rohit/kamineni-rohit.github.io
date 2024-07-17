// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Styled component for the footer container
const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #1a1a2e;
  color: #ffffff;
  text-align: center;
`;

// Styled component for the footer content
const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

// Styled component for each section in the footer
const Section = styled.div`
  flex: 1;
  min-width: 200px;
`;

// Styled component for the social links container in the footer
const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

// Styled component for each social link in the footer
const SocialLink = styled.a`
  color: #e94560;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

// Footer component definition
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h4>Contact Info</h4>
          <p>Email: kaminenirohit1@gmail.com</p>
          <p>Phone: +1 (484) 744-1785</p>
        </Section>
        <Section>
          <h4>Quick Links</h4>
          <p><a href="#home" style={{ color: '#e94560' }}>Home</a></p>
          <p><a href="#about" style={{ color: '#e94560' }}>About</a></p>
          <p><a href="#projects" style={{ color: '#e94560' }}>Projects</a></p>
          <p><a href="#contact" style={{ color: '#e94560' }}>Contact</a></p>
        </Section>
        <Section>
          <h4>Follow Me</h4>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/in/rohit-kamineni/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/kamineni-rohit" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialLinksContainer>
        </Section>
      </FooterContent>
      <p>&copy; 2024 Rohit Kamineni. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
