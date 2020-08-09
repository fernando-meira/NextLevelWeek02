import styled from 'styled-components';

import colors from '../../themes/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${colors.textInPrimary};
  }

  @media (min-width: 700px) {
    bottom: -28px;
    position: absolute;

    display: grid;
    column-gap: 16px;
    grid-template-columns: 2fr 2fr 1fr 1fr;

    button {
      border: 0;
      height: 5.6rem;
      margin-top: 3.2rem;
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 0.4s;
      font: 700 1.4rem Archivo;
      color: ${colors.buttonText};
      background: ${colors.secundary};

      :hover {
        background: ${colors.secundaryDark};
      }

      svg {
        font-size: 2rem;
        margin-left: 1rem;

        background: transparent;
        color: ${colors.buttonText};
      }
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    margin: 0 auto;
    max-width: 740px;
    padding: 3.2rem 0;
  }
`;

// page-teacher-list = container
// teacher-item      = article
// search-teacher    = form
// input-block       = div
