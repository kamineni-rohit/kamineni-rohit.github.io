import React from 'react';
import styled from 'styled-components'; // Import styled-components for styling

// Styled component for the about container
const AboutContainer = styled.div`
  padding: 2rem;
`;

// About component definition
const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2> {/* Section title */}
      <p>Hi, I'm [Your Name], a passionate developer specialized in ...</p> {/* Brief introduction */}
    </AboutContainer>
  );
};

export default About; // Export the About component
