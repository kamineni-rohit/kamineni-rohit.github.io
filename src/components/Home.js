// src/components/Home.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the home container
const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem; // Offset for the fixed header
  background-color: #1a1a2e;
  color: #ffffff;
`;

// Styled component for the welcome text
const WelcomeText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

// Styled component for the home description
const HomeDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
`;

// Styled component for navigation buttons
const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

// Styled component for each button
const Button = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #e94560;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d83148;
  }
`;

const Home = ({ aboutRef, projectsRef, contactRef }) => {
  return (
    <HomeContainer id="home">
      <WelcomeText>Welcome</WelcomeText>
      <HomeDescription>
        My name is Rohit Kamineni. I'm a Data Scientist, Data Engineer, Data Analyst, Business Analyst, and Ex-Software Development Engineer.
      </HomeDescription>
      <NavButtons>
        <Button onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About</Button>
        <Button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
        <Button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
      </NavButtons>
    </HomeContainer>
  );
};

export default Home;
