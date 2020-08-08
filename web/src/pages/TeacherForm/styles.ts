import styled from 'styled-components';

import colors from '../../themes/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 74rem;
  overflow: hidden;
  padding-top: 6.4rem;
  border-radius: 0.8rem;
  margin: -1.2rem auto 3.2rem;

  background: ${colors.boxBase};

  fieldset {
    border: 0;
    padding: 0 6.4rem;

    div + div {
      margin-top: 2.4rem;
    }

    label {
      color: ${colors.textComponent};
    }

    legend {
      width: 100%;
      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${colors.lineInWhite};

      display: flex;
      align-items: center;
      justify-content: space-between;

      font: 700 2.4rem Archivo;
      color: ${colors.textTitle};

      > button {
        border: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background: none;
        transition: 0.4s;
        color: ${colors.primary};
        font: 700 1.6rem Archivo;

        :hover {
          color: ${colors.primaryDark};

          svg {
            background: none;
            color: ${colors.primaryDark};
          }
        }

        svg {
          border-radius: 50%;
          margin-right: 0.8rem;

          transition: 0.4s;
          color: ${colors.buttonText};
          background: ${colors.primary};
        }
      }
    }

    & + fieldset {
      margin-top: 6.4rem;
    }
  }

  footer {
    padding: 4rem 2.4rem;
    margin-top: 3.4rem;
    border-top: 1px solid ${colors.lineInWhite};

    background: ${colors.boxFooter};

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.4rem;
      line-height: 2.5rem;
      color: ${colors.textComponent};

      > svg {
        font-size: 3.6rem;
        margin-right: 2rem;
      }
    }

    button {
      border: 0;
      width: 100%;
      height: 5.6rem;
      margin-top: 3.2rem;
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font: 700 1.6 Archivo;
      color: ${colors.buttonText};
      background: ${colors.secundary};
      transition: background-color 0.4s;

      :hover {
        background-color: ${colors.secundaryDark};
      }
    }
  }

  @media (min-width: 700px) {
    margin: -3.2rem auto 3.2rem;

    fieldset {
      padding: 0 6.4rem;

      .schedule-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;

        > div {
          margin-top: 0;
        }
      }
    }

    footer {
      padding: 4rem 6.4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        justify-content: space-between;
      }

      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`;

// page-teacher-form = Container
// page-Header       =
//
