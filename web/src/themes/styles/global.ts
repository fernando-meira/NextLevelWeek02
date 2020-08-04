import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  *{
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: ${colors.background};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.textTitle};
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
