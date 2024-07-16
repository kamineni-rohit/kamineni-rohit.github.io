import React from 'react';
import styled from 'styled-components'; // Import styled-components for styling

// Styled component for the projects container
const ProjectsContainer = styled.div`
  padding: 2rem;
`;

// Styled component for individual project cards
const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
`;

// Projects component definition
const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2> {/* Section title */}
      <ProjectCard>
        <h3>Project 1</h3> {/* Project title */}
        <p>Description of project 1...</p> {/* Project description */}
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3> {/* Project title */}
        <p>Description of project 2...</p> {/* Project description */}
      </ProjectCard>
      {/* Add more projects as needed */}
    </ProjectsContainer>
  );
};

export default Projects; // Export the Projects component
