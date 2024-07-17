// src/components/Projects.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the projects container
const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: #1a1a2e;
  color: #ffffff;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
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
  background-color: #0f3460;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
`;

// Styled component for the project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

// Styled component for the project description text
const ProjectDescription = styled.p`
  font-size: 1rem;
`;

// Projects component definition
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <ProjectList>
        <ProjectCard>
          <ProjectTitle>Trigack</ProjectTitle>
          <ProjectDescription>
            Built an automated application to keep track of regular activities and aid users in managing daily tasks, inventories, and to-do lists.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>E-Commerce Application</ProjectTitle>
          <ProjectDescription>
            Built an application for a grocery mart that lets users browse and shop while enabling managers to control and manipulate inventory data.
          </ProjectDescription>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
