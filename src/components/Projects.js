// src/components/Projects.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the projects container
const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: #f8f8f8;
  color: #1a1a2e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a2e;
`;

// Styled component for the project list container
const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

// Styled component for each project card
const ProjectCard = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Styled component for the project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
`;

// Styled component for the project description text
const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666666;
`;

// Define the Projects component
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <ProjectList>
        <ProjectCard>
          <img src="path_to_image" alt="Trigack Project" />
          <ProjectTitle>Trigack</ProjectTitle>
          <ProjectDescription>
            Built an automated application to keep track of regular activities and aid users in managing daily tasks, inventories, and to-do lists.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <img src="path_to_image" alt="E-Commerce Application Project" />
          <ProjectTitle>E-Commerce Application</ProjectTitle>
          <ProjectDescription>
            Developed an application for a grocery mart enabling users to browse and shop while allowing managers to control and manipulate inventory data.
          </ProjectDescription>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
