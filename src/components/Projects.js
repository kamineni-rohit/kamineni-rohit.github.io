// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Project 1</h3>
        <p>Description of project 1...</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3>
        <p>Description of project 2...</p>
      </ProjectCard>
      {/* Add more projects as needed */}
    </ProjectsContainer>
  );
};

export default Projects;
