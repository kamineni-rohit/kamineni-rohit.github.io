// src/components/About.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the about container
const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #16213e;
  color: #ffffff;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// Styled component for the description text
const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// About component definition
const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About Me</Title>
      <Description>
        Student and aspiring Analyst with experience as a Software Engineer with a solid foundation in E-Commerce and back-end technologies.
        Currently pursuing a Master’s in Business Analytics, adept at harnessing technical and analytical skills to derive data-driven business solutions.
      </Description>
    </AboutContainer>
  );
};

export default About;
