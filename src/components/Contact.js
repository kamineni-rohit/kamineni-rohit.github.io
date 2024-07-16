// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
    </ContactContainer>
  );
};

export default Contact;
