import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(24, 26, 27, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  z-index: 1001;
  .dot {
    color: var(--neon-green);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(24, 26, 27, 0.98);
    padding: 6rem 2rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 0.3s ease-in-out;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    z-index: 1000;
    width: 100vw;
    height: 100vh;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  color: var(--text-white);
  
  &:hover, &.active {
    color: var(--neon-green);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--neon-green);
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--neon-green);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
`;

const HireButton = styled(Link)`
  background-color: var(--neon-green);
  color: var(--dark-bg);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid var(--neon-green);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
    background-color: transparent;
    color: var(--neon-green);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    width: auto;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: ${props => props.isOpen ? 'var(--neon-green)' : 'var(--text-white)'};
    margin: 5px 0;
    transition: all 0.3s ease;
    position: relative;

    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(-10px)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  }

  &:hover div {
    background-color: var(--neon-green);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo to="/" onClick={closeMenu}>
        My_Portfolio<span className="dot">.</span>
      </Logo>
      <NavLinks>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
          Services
        </NavLink>
        <NavLink to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
          Resume
        </NavLink>
        <NavLink to="/work" className={location.pathname === '/work' ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </NavLink>
        <HireButton to="/contact">Hire me</HireButton>
      </NavLinks>

      <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>

      <MobileNavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>
          Services
        </NavLink>
        <NavLink to="/resume" onClick={closeMenu} className={location.pathname === '/resume' ? 'active' : ''}>
          Resume
        </NavLink>
        <NavLink to="/work" onClick={closeMenu} className={location.pathname === '/work' ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </NavLink>
        <HireButton to="/contact" onClick={closeMenu}>Hire me</HireButton>
      </MobileNavLinks>
    </Nav>
  );
};

export default Navbar; 