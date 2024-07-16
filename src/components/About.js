// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>Hi, I'm [Your Name], a passionate developer specialized in ...</p>
    </AboutContainer>
  );
};

export default About;
