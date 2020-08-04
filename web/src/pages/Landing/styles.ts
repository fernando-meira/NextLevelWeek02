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
`;
