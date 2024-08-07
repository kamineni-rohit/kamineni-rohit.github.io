import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

// Styled component for the title
const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Styled component for the project card
const ProjectCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Styled component for the project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

// Styled component for the project description
const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

// Project data
const projects = [
  {
    title: 'Trigack',
    description: `An automated application intended to keep track of regular activities and aid users in managing daily tasks, inventories, and to-do lists in sync with an in-built calendar. Built the backend using NodeJS and MongoDB was used as the database. The service was hosted on Heroku and CI/CD was enabled by GitHub workflows. Built the User interface (front-end) using HTML5, CSS, and Javascript. The service was built as a monolith with MVC architecture. REST APIs have been used to integrate various functionalities.`,
  },
  {
    title: 'E-Commerce Application',
    description: `An application for a grocery mart that lets users browse and shop while also enabling managers to control and manipulate inventory data. Built this web-based application with a microservice architecture. The backend is a Java Gradle project that uses SpringBoot and is complete with Javadocs and Swagger documentation for the REST APIs. Used PostgreSQL as the Database. Made use of Redis for caching and Log4j for logging. Integrated social/google sign-in. Based on whether it’s a customer or manager, the access level changes, giving way to a different UI and enabling different functionality. Deployed the project on the Azure cloud and enabled CI/CD through GitHub workflows.`,
  },
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
