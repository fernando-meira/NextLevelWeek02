import styled, { css } from 'styled-components';
import { Link as Links } from 'react-router-dom';

import colors from '../../themes/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.primary};
  color: ${colors.textInPrimary};
`;
export const PageLanding = styled.div`
  .logo-container {
    margin-bottom: 3.2rem;

    text-align: center;

    h2 {
      margin-top: 0.8rem;

      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      color: ${colors.textInPrimary};
    }

    img {
      height: 10rem;
    }
  }

  .hero-image {
    width: 100%;
  }
`;
export const PageLandingContent = styled.div`
  .buttons-container {
    margin: 3.2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    .logo-container {
      margin: 0;
      align-self: center;

      grid-area: logo;

      text-align: left;

      img {
        height: 100%;
      }

      h2 {
        font-size: 3.6rem;
        text-align: initial;
      }
    }

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: buttons;

      justify-content: flex-start;
    }

    span {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const Link = styled(Links)`
  width: 20rem;
  height: 10.4rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font: 700 2rem Archivo;
  color: ${colors.buttonText};

  :first-child {
    margin-right: 1.6rem;
  }

  img {
    width: 4rem;
  }

  transition: background 0.4s;

  ${({ className }) =>
    className === 'study' &&
    css`
      background: ${colors.primaryLighter};

      :hover {
        background: ${colors.primaryLight};
      }
    `}

  ${({ className }) =>
    className === 'give-classes' &&
    css`
      background: ${colors.secundary};

      :hover {
        background: ${colors.secundaryDark};
      }
    `}

    @media (min-width: 1100px) {
    width: 30rem;
    font-size: 2.4rem;

    > img {
      margin-right: 2.4rem;
    }
  }
`;
