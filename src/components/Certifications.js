import React from 'react';
import styled from 'styled-components';

// Define styled components for the Certifications section
const CertificationsContainer = styled.section`
  background-color: #f8f9fa;
  padding: 50px 20px;
`;

const CertificationsTitle = styled.h2`
  color: #0073e6;
  text-align: center;
  margin-bottom: 40px;
`;

const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CertificationItem = styled.li`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const Certifications = () => {
  return (
    <CertificationsContainer id="certifications">
      <CertificationsTitle>Certifications</CertificationsTitle>
      <CertificationsList>
        <CertificationItem>Coursera: Deep Learning Specialization</CertificationItem>
        <CertificationItem>Udemy: SQL - MySQL for Data Analytics and Business Intelligence</CertificationItem>
        <CertificationItem>Udemy: Microsoft Power BI Desktop for Business Intelligence (2023)</CertificationItem>
        <CertificationItem>Udemy: Tableau 2022 A-Z: Hands-On Tableau Training for Data Science</CertificationItem>
        <CertificationItem>Udemy: The Data Science Course: Complete Data Science Bootcamp 2023</CertificationItem>
        <CertificationItem>Udemy: The Web Developer Bootcamp</CertificationItem>
        <CertificationItem>Udemy: Data Structures and Algorithms: Deep Dive Using Java</CertificationItem>
      </CertificationsList>
    </CertificationsContainer>
  );
}

export default Certifications;
