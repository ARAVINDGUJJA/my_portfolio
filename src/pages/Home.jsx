import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/a1.jpg';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 6rem 1rem 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--text-gray);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  
  span {
    color: var(--neon-green);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: var(--text-gray);
  margin-bottom: 2rem;
  max-width: 600px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--neon-green);
  color: var(--neon-green);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--neon-green);
    color: var(--dark-bg);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: var(--text-white);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--neon-green);
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px dashed var(--neon-green);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: var(--text-white);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-gray);
    font-size: 0.9rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <LeftSection>
        <Title>Software Developer</Title>
        <Name>
          Hello I'm<br />
          <span>Gujja Aravind</span>
        </Name>
        <Description>
          I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
        </Description>
        <DownloadButton href="/Aravindresume84.pdf" download>
          <FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV
        </DownloadButton>
        <SocialLinks>
          <SocialIcon href="https://github.com/ARAVINDGUJJA" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/g-aravind-3306b0287/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialLinks>
      </LeftSection>
      <RightSection>
        <ProfileImage>
          <img src={profileImage} alt="Gujja Aravind" />
        </ProfileImage>
      </RightSection>
    </HomeContainer>
  );
};

export default Home;
