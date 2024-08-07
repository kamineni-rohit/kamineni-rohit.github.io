import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

// Styled component for the title
const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Styled component for the paragraph
const AboutText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Student and aspiring Analyst with experience as a Software Engineer with a solid foundation in E-Commerce and back-end technologies. Currently pursuing a Master’s in Business Analytics, I’m adept at harnessing technical and analytical skills to derive data-driven business solutions. With proficiency in Software Development and growing expertise in Business Analytics, I’m ready to tackle challenges and deliver insights in the Analytics domain, through Business Analyst, Data Analyst, Data Scientist, and other relevant roles.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
