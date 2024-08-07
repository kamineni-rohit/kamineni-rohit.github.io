import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f1f1f1;
`;

// Styled component for the title
const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Styled component for the skill category
const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

// Styled component for the skill category title
const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Styled component for the skill list
const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Styled component for the skill list item
const SkillItem = styled.li`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillCategory>
        <SkillCategoryTitle>Languages</SkillCategoryTitle>
        <SkillList>
          <SkillItem>Python</SkillItem>
          <SkillItem>SQL</SkillItem>
          <SkillItem>R</SkillItem>
          <SkillItem>Java</SkillItem>
          <SkillItem>C++</SkillItem>
          <SkillItem>HTML</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>Go</SkillItem>
        </SkillList>
      </SkillCategory>
      <SkillCategory>
        <SkillCategoryTitle>Technologies & Tools</SkillCategoryTitle>
        <SkillList>
          <SkillItem>Tableau</SkillItem>
          <SkillItem>PowerBI</SkillItem>
          <SkillItem>SAS</SkillItem>
          <SkillItem>Hadoop</SkillItem>
          <SkillItem>Spark</SkillItem>
          <SkillItem>Apache HIVE</SkillItem>
          <SkillItem>SQL</SkillItem>
          <SkillItem>MySQL</SkillItem>
          <SkillItem>Excel</SkillItem>
          <SkillItem>MS Office</SkillItem>
          <SkillItem>Git</SkillItem>
          <SkillItem>GitHub</SkillItem>
          <SkillItem>MariaDB</SkillItem>
          <SkillItem>PostgreSQL</SkillItem>
          <SkillItem>SpringBoot</SkillItem>
          <SkillItem>Gradle</SkillItem>
          <SkillItem>Docker</SkillItem>
          <SkillItem>CI/CD</SkillItem>
          <SkillItem>Kubernetes</SkillItem>
          <SkillItem>Redis</SkillItem>
          <SkillItem>Kafka</SkillItem>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>NodeJS</SkillItem>
          <SkillItem>PCF</SkillItem>
          <SkillItem>Microservices</SkillItem>
          <SkillItem>REST APIs</SkillItem>
          <SkillItem>Agile</SkillItem>
          <SkillItem>JIRA</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>Swagger</SkillItem>
          <SkillItem>OpenAPI</SkillItem>
          <SkillItem>Postman</SkillItem>
          <SkillItem>AWS</SkillItem>
          <SkillItem>GCP</SkillItem>
        </SkillList>
      </SkillCategory>
    </SkillsContainer>
  );
};

export default Skills;
