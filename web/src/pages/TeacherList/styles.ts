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

  > div {
    position: relative;

    & + div {
      margin-top: 1.4rem;
    }

    > label {
      font-size: 1.4rem;
    }

    > input {
      outline: 0;
      width: 100%;
      height: 5.6rem;
      padding: 0 1.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      border: 1px solid ${colors.inputBackground};

      font: 1.6rem Archivo;
      background-color: ${colors.inputBackground};
    }

    :focus-within::after {
      content: '';
      bottom: 0;
      left: 1.6rem;
      right: 1.6rem;
      position: absolute;

      height: 2px;
      width: calc(100% - 3.2rem);

      background: ${colors.primaryLight};
    }
  }

  @media (min-width: 700px) {
    bottom: -28px;
    position: absolute;

    display: grid;
    column-gap: 16px;
    grid-template-columns: repeat(3, 1fr);

    > div {
      & + div {
        margin-top: 0;
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
