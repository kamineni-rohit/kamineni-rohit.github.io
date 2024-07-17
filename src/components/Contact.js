// src/components/Contact.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the contact container
const ContactContainer = styled.section`
  padding: 2rem;
  background-color: #16213e;
  color: #ffffff;
  text-align: center;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

// Styled component for the contact info text
const ContactInfo = styled.p`
  font-size: 1.2rem;
`;

// Contact component definition
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>
      <ContactInfo>Email: <a href="mailto:kaminenirohit1@gmail.com">kaminenirohit1@gmail.com</a></ContactInfo>
      <ContactInfo>Phone: +1 (484) 744-1785</ContactInfo>
      <ContactInfo>
        LinkedIn: <a href="https://www.linkedin.com/in/rohit-kamineni/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rohit-kamineni/</a>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
