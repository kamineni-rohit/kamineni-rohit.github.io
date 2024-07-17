// src/components/Home.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the home container
const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0f3460;
  color: #ffffff;
  text-align: center;
`;

// Styled component for the welcome text
const WelcomeText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

// Styled component for the description text
const Description = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
`;

// Home component definition
const Home = () => {
  return (
    <HomeContainer id="home">
      <WelcomeText>Welcome.</WelcomeText>
      <Description>
        My name is Rohit Kamineni. I'm a Data Scientist, Data Engineer, Data Analyst, Business Analyst, and Ex-Software Development Engineer.
      </Description>
    </HomeContainer>
  );
};

export default Home;
