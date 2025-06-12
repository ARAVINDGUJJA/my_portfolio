import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import projectImage1 from '../assets/P1.png';

const WorkContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
  }
`;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: calc(100vh - 8rem);
  
  @media (max-width: 768px) {
    height: auto;
    min-height: calc(100vh - 6rem);
  }
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  min-width: 100%;
  gap: 4rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    overflow-y: auto;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const ProjectNumber = styled.div`
  font-size: 8rem;
  font-family: 'Space Mono', monospace;
  color: transparent;
  -webkit-text-stroke: 2px var(--text-white);
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 0.5rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-family: 'Space Mono', monospace;
  color: var(--text-white);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const TechStack = styled.div`
  color: var(--neon-green);
  font-family: 'Space Mono', monospace;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--neon-green);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--neon-green);
    color: var(--bg-dark);
    transform: translateY(-2px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const ProjectImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ProjectImage = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16/10;
    max-width: 100%;
  }
`;

const NavigationButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background: var(--neon-green);
  color: var(--bg-dark);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'WASTE MANAGEMENT SYSTEM',
      description: 'A waste management system that allows users to manage their waste and track their waste disposal.',
      techStack: 'Html 5, Css 3, Javascript',
      image: projectImage1,
      demoLink: '#',
      githubLink: 'https://aravindgujja.github.io/Waste-manage/'
    },
    {
      id: '02',
      title: 'AI Mental-Health Companion',
      description: 'A web application that uses AI to provide mental health support and guidance.',
      techStack: 'Node.js, Express, React',
      image: '/projects/project2.png',
      demoLink: '#',
      githubLink: '#'
    },
    // Add more projects as needed
  ];

  const handleNext = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentProject > 0) {
      setCurrentProject(prev => prev - 1);
    }
  };

  return (
    <WorkContainer>
      <ProjectsContainer
        animate={{ x: `-${currentProject * 100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectInfo>
                <ProjectNumber>{project.id}</ProjectNumber>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>{project.techStack}</TechStack>
                <ProjectLinks>
                  <IconButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </IconButton>
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImageContainer>
                <ProjectImage
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
              </ProjectImageContainer>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsContainer>
      
      <NavigationButtons>
        <NavButton 
          onClick={handlePrev} 
          disabled={currentProject === 0}
          aria-label="Previous project"
        >
          ←
        </NavButton>
        <NavButton 
          onClick={handleNext} 
          disabled={currentProject === projects.length - 1}
          aria-label="Next project"
        >
          →
        </NavButton>
      </NavigationButtons>
    </WorkContainer>
  );
};

export default Work; 