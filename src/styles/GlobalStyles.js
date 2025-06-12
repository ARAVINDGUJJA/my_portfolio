import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-dark: #1a1a1a;
    --text-white: #ffffff;
    --text-gray: #888888;
    --neon-green: #00ff88;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-white);
    line-height: 1.5;
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neon-green);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00cc6e;
  }

  /* Prevent text size adjustment on orientation change */
  html {
    -webkit-text-size-adjust: 100%;
  }

  /* Remove tap highlight on mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyles; 