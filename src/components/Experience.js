import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the container
const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

// Styled component for the title
const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Styled component for the button
const ExperienceButton = styled.button`
  background-color: #00BFFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #009ac9;
  }
`;

// Styled component for the content
const ExperienceContent = styled.div`
  margin-top: 2rem;
`;

const Experience = () => {
  const [selected, setSelected] = useState('Data Analyst');

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <div>
        <ExperienceButton onClick={() => setSelected('Data Analyst')}>Data Analyst</ExperienceButton>
        <ExperienceButton onClick={() => setSelected('Software Development Engineer')}>Software Development Engineer</ExperienceButton>
        <ExperienceButton onClick={() => setSelected('Internship')}>Internship</ExperienceButton>
      </div>
      <ExperienceContent>
        {selected === 'Data Analyst' && (
          <div>
            <h3>ZopSmart Technologies</h3>
            <p>Software Development Engineer</p>
            <p>Jan 2020 - Jun 2023</p>
            <ul>
              <li>Worked on multiple backend projects for clients (Kroger Technology) while contributing to hiring and training programs.</li>
              <li>Built and managed the SpringBoot microservice (Products BFF) to aggregate data from various composite services and package it into a consumable form for the web front-end.</li>
              <li>Migrated the BFF’s APIs to the A-layer (Part of the new 3-tier architecture: Core - Composite - A-layer).</li>
              <li>Set up the DevOps workflows for the service to handle CI/CD after migration to On-Prem Kubernetes.</li>
              <li>Created API and data flow documentation for both Product and Search BFFs.</li>
              <li>Responsible for the end-to-end maintenance and support of the service.</li>
              <li>Migrated the deployment base of the service from PCF to On-Prem Kubernetes.</li>
              <li>Developed APIs and adaptations to upstream services in the same space.</li>
            </ul>
          </div>
        )}
        {selected === 'Software Development Engineer' && (
          <div>
            <h3>Kroger</h3>
            <p>PHP, Java, Redis, Kafka, Mockito, JUnit, Confluence, Agile, JIRA, Git, Swagger, OpenAPI</p>
            <ul>
              <li>Built a Java framework (Radon) for internal use that brings a lot of functionality Springboot offers while adding company-specific features.</li>
              <li>Created and maintained documentation for the Radon framework to be used by the clients.</li>
              <li>Created advanced unit and integration test cases for multiple features and dependent services.</li>
              <li>Developed features like annotation processing, Kafka, Redis support, and Postman documentation.</li>
            </ul>
          </div>
        )}
        {selected === 'Internship' && (
          <div>
            <h3>Example Company</h3>
            <p>Software Development Intern</p>
            <p>June 2018 - August 2018</p>
            <ul>
              <li>Worked on various software development tasks including backend development and data analysis.</li>
              <li>Assisted in the development of internal tools for data processing and reporting.</li>
            </ul>
          </div>
        )}
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
