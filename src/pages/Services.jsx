import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    
    .service-number {
      color: var(--neon-green);
    }
    
    .service-title {
      color: var(--neon-green);
    }
    
    .arrow-button {
      background-color: var(--neon-green);
      color: var(--dark-bg);
    }
  }
`;

const ServiceNumber = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: 'Space Mono', monospace;
  transition: color 0.3s ease;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 3rem 0 1rem;
  font-family: 'Space Mono', monospace;
  transition: color 0.3s ease;
`;

const ServiceDescription = styled.p`
  color: var(--text-gray);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--neon-green);
    color: var(--dark-bg);
    transform: rotate(45deg);
  }
`;

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies and best practices. Specializing in React, Node.js, and full-stack development."
    }
  ];

  return (
    <ServicesContainer>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceBox key={service.number}>
            <ServiceNumber className="service-number">{service.number}</ServiceNumber>
            <ServiceTitle className="service-title">{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ArrowButton className="arrow-button">
              <FontAwesomeIcon icon={faArrowRight} />
            </ArrowButton>
          </ServiceBox>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services; 