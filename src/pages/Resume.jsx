import { useState } from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 8rem;
  }
`;

const Sidebar = styled.div`
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 3rem;
  color: var(--text-white);
  margin-bottom: 1rem;
  font-family: 'Space Mono', monospace;
`;

const SidebarText = styled.p`
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const NavButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  background: ${props => props.active ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  border: none;
  color: ${props => props.active ? 'var(--text-white)' : 'var(--text-gray)'};
  font-size: 1.1rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    color: var(--text-white);
  }

  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      right: 1.5rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--neon-green);
    }
  `}
`;

const AboutMeButton = styled(NavButton)`
  margin-top: 1rem;
  
  &:hover {
    background: rgba(0, 255, 136, 0.1);
    color: var(--text-white);
  }
`;

const MainContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.div`
  background: rgba(0, 100, 255, 0.2);
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: var(--text-white);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-gray);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TimePeriod = styled.div`
  color: var(--neon-green);
  font-family: 'Space Mono', monospace;
  margin-bottom: 1rem;
`;

const Role = styled.h3`
  color: var(--text-white);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.div`
  color: var(--text-gray);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--neon-green);
    border-radius: 50%;
  }
`;

const EducationGrid = styled(ExperienceGrid)``;

const EducationCard = styled(ExperienceCard)``;

const SkillsContainer = styled.div`
  height: calc(100vh - 250px);
  overflow-y: auto;
  padding-right: 1rem;
  
  /* Customize scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--neon-green);
    border-radius: 4px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) saturate(100%) invert(46%) sepia(66%) saturate(2423%) hue-rotate(191deg) brightness(101%) contrast(101%);
    transition: transform 0.3s ease;

    &.fallback {
      width: 70%;
      height: 70%;
      opacity: 0.7;
    }
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const AboutLabel = styled.span`
  color: var(--text-gray);
  min-width: 120px;
`;

const AboutValue = styled.span`
  color: var(--text-white);
  font-family: 'Space Mono', monospace;
`;

const WhyHireMe = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;

  h3 {
    color: var(--neon-green);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Space Mono', monospace;
  }

  p {
    color: var(--text-gray);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: var(--text-white);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '•';
      color: var(--neon-green);
      font-size: 1.5rem;
    }
  }
`;

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const experiences = [
    {
      period: "2025",
      role: "Frontend Developer",
      company: "Techxcelerate Hackathon"
    },
    {
      period: "2024",
      role: "Volunteer Web Developer",
      company: "AU Cloud club website"
    }
  ];

  const education = [
    {
      period: "2022-present",
      role: "B.Tech Computer Science and Engineering",
      company: "Anurag University"
    },
    {
      period: "2020-2022",
      role: "Intermediate",
      company: "Sr Junior College"
    },
    {
      period: "2019",
      role: "SSC",
      company: "Infant Jesus High School"
    }
  ];

  const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
  ];

  const aboutInfo = {
    name: "Gujja Aravind",
    phone: "+91 756901807",
    nationality: "Indian",
    email: "gujjaraaravind0@gmail.com",
    freelance: "Available",
    languages: "English, Telugu, Hindi"
  };

  return (
    <ResumeContainer>
      <Sidebar>
        <SidebarTitle>Why hire me?</SidebarTitle>
        <SidebarText>
        Hire me to turn your ideas into powerful, polished, and user-focused digital experiences.
        </SidebarText>

        <div>
          <NavButton 
            active={activeSection === 'experience'} 
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </NavButton>
          <NavButton 
            active={activeSection === 'education'} 
            onClick={() => setActiveSection('education')}
          >
            Education
          </NavButton>
          <NavButton 
            active={activeSection === 'skills'} 
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </NavButton>
          <AboutMeButton 
            active={activeSection === 'about'} 
            onClick={() => setActiveSection('about')}
          >
            About me
          </AboutMeButton>
        </div>
      </Sidebar>

      <MainContent>
        {activeSection === 'experience' && (
          <>
            <SectionTitle>
              <h2>My experience</h2>
              <p>Here's a quick overview of my recent work experience and responsibilities.</p>
            </SectionTitle>
            <ExperienceGrid>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index}>
                  <TimePeriod>{exp.period}</TimePeriod>
                  <Role>{exp.role}</Role>
                  <Company>{exp.company}</Company>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </>
        )}

        {activeSection === 'education' && (
          <>
            <SectionTitle>
              <h2>My education</h2>
              <p>Here's my educational background and certifications.</p>
            </SectionTitle>
            <EducationGrid>
              {education.map((edu, index) => (
                <EducationCard key={index}>
                  <TimePeriod>{edu.period}</TimePeriod>
                  <Role>{edu.role}</Role>
                  <Company>{edu.company}</Company>
                </EducationCard>
              ))}
            </EducationGrid>
          </>
        )}

        {activeSection === 'skills' && (
          <>
            <SectionTitle>
              <h2>My skills</h2>
              <p>Here are the technologies and tools I work with.</p>
            </SectionTitle>
            <SkillsContainer>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <ExperienceCard key={index}>
                    <SkillIcon>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                          e.target.classList.add('fallback');
                        }}
                      />
                    </SkillIcon>
                    <Role>{skill.name}</Role>
                  </ExperienceCard>
                ))}
              </SkillsGrid>
            </SkillsContainer>
          </>
        )}

        {activeSection === 'about' && (
          <>
            <SectionTitle>
              <h2>About me</h2>
              <p>Here's some basic information about me.</p>
            </SectionTitle>
            <AboutGrid>
              <div>
                <AboutItem>
                  <AboutLabel>Name</AboutLabel>
                  <AboutValue>{aboutInfo.name}</AboutValue>
                </AboutItem>
                <AboutItem>
                  <AboutLabel>Nationality</AboutLabel>
                  <AboutValue>{aboutInfo.nationality}</AboutValue>
                </AboutItem>
                <AboutItem>
                  <AboutLabel>Freelance</AboutLabel>
                  <AboutValue>{aboutInfo.freelance}</AboutValue>
                </AboutItem>
                <AboutItem>
                  <AboutLabel>Phone</AboutLabel>
                  <AboutValue>{aboutInfo.phone}</AboutValue>
                </AboutItem>
                <AboutItem>
                  <AboutLabel>Email</AboutLabel>
                  <AboutValue>{aboutInfo.email}</AboutValue>
                </AboutItem>
                <AboutItem>
                  <AboutLabel>Languages</AboutLabel>
                  <AboutValue>{aboutInfo.languages}</AboutValue>
                </AboutItem>
              </div>
            </AboutGrid>
          </>
        )}
      </MainContent>
    </ResumeContainer>
  );
};

export default Resume; 