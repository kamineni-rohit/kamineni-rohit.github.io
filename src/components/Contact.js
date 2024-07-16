import React from 'react';
import styled from 'styled-components'; // Import styled-components for styling

// Styled component for the contact container
const ContactContainer = styled.div`
  padding: 2rem;
`;

// Contact component definition
const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2> {/* Section title */}
      <p>You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p> {/* Contact email */}
    </ContactContainer>
  );
};

export default Contact; // Export the Contact component
