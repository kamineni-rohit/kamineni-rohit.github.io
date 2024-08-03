// src/components/About.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the about container
const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #F0F0F0; // Very light grey background
  color: #009ACD; // Enhanced deep sky blue color
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Styled component for the about text container
const AboutText = styled.div`
  max-width: 800px;
  text-align: center;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007BB5; // Slightly deeper color for the title
`;

// Styled component for the description text
const Description = styled.p`
  font-size: 1.2rem;
  color: #666666; // Greyish color for the description
`;

// Define the About component
const About = () => {
  return (
    <AboutContainer id="about">
      <AboutText>
        <Title>About Me</Title>
        <Description>
          I am a data scientist and generative artist. I have a strong foundation in E-Commerce and back-end technologies. Currently pursuing a Master’s in Business Analytics, I’m adept at harnessing technical and analytical skills to derive data-driven business solutions.
        </Description>
      </AboutText>
    </AboutContainer>
  );
};

export default About;
