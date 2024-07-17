// src/components/SocialLinks.js

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Styled component for the social links container
const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

// Styled component for each social link
const SocialLink = styled.a`
  color: #e94560;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

// SocialLinks component definition
const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
