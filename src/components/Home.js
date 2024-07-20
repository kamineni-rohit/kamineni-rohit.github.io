// src/components/Home.js

import React, { useRef } from 'react';
import styled from 'styled-components';

// Create a styled component for the home container
const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0f3460;
  color: #ffffff;
  text-align: center;
  padding-top: 80px; // Offset for fixed header
`;

// Create a styled component for the welcome text
const WelcomeText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

// Create a styled component for the home description text
const HomeDescription = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
`;

// Create a styled component for the navigation buttons container
const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

// Create a styled component for each navigation button
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #e94560;
  background-color: #1a1a2e;
  border: 2px solid #e94560;
  border-radius: 5px;
  cursor: pointer;

  // Add hover effect for button
  &:hover {
    background-color: #e94560;
    color: #1a1a2e;
  }
`;

// Define the Home component
const Home = () => {
  // Create references for scrolling to sections
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Adjusting for header height
      behavior: 'smooth'
    });
  };

  return (
    <>
      <HomeContainer id="home">
        <WelcomeText>Welcome</WelcomeText>
        <HomeDescription>
          My name is Rohit Kamineni. I'm a Data Scientist, Data Engineer, Data Analyst, Business Analyst, and Ex-Software Development Engineer.
        </HomeDescription>
      </HomeContainer>

      <AboutContainer ref={aboutRef} id="about">
        <Title>About Me</Title>
        <Description>
          Student and aspiring Analyst with experience as a Software Engineer with a solid foundation in E-Commerce and back-end technologies.
          Currently pursuing a Master’s in Business Analytics, adept at harnessing technical and analytical skills to derive data-driven business solutions.
        </Description>
      </AboutContainer>

      <ProjectsContainer ref={projectsRef} id="projects">
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

      <ContactContainer ref={contactRef} id="contact">
        <Title>Contact Me</Title>
        <ContactInfo>Email: <a href="mailto:kaminenirohit1@gmail.com">kaminenirohit1@gmail.com</a></ContactInfo>
        <ContactInfo>Phone: +1 (484) 744-1785</ContactInfo>
        <ContactInfo>
          LinkedIn: <a href="https://www.linkedin.com/in/rohit-kamineni/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rohit-kamineni/</a>
        </ContactInfo>
      </ContactContainer>
    </>
  );
};

// Create a styled component for the about container
const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #16213e;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Create a styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// Create a styled component for the description text
const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// Create a styled component for the projects container
const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: #1a1a2e;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Create a styled component for the project list container
const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

// Create a styled component for each project card
const ProjectCard = styled.div`
  background-color: #0f3460;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
`;

// Create a styled component for the project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

// Create a styled component for the project description text
const ProjectDescription = styled.p`
  font-size: 1rem;
`;

// Create a styled component for the contact container
const ContactContainer = styled.section`
  padding: 2rem;
  background-color: #16213e;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Create a styled component for the contact info text
const ContactInfo = styled.p`
  font-size: 1.2rem;
`;

export default Home;
