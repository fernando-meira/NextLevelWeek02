import styled from 'styled-components';

import colors from '../../themes/styles/colors';

export const Container = styled.article`
  margin-top: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${colors.lineInWhite};

  overflow: hidden;
  background: ${colors.boxBase};

  header {
    padding: 3.2rem 2rem;

    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        display: block;

        font: 700 2.4rem Archivo;
        color: ${colors.textTitle};
      }

      span {
        margin-top: 0.4rem;

        display: block;

        font-size: 1.6rem;
      }
    }
  }

  p {
    padding: 0 2rem;

    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media (min-width: 700px) {
    header {
      padding: 3.2rem;
    }

    > p {
      padding: 0 3.2rem;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 3.2rem;
  padding: 3.2rem 2rem;
  border-top: 1px solid ${colors.lineInWhite};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${colors.boxFooter};

  > p {
    strong {
      display: block;

      font-size: 1.6rem;
      color: ${colors.primary};
    }
  }

  a {
    border: 0;
    width: 20rem;
    height: 5.6rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    transition: 0.4s;
    text-decoration: none;
    font: 700 1.4rem Archivo;
    color: ${colors.buttonText};
    background: ${colors.secundary};

    :hover {
      background: ${colors.secundaryDark};
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    > p {
      strong {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    button {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;

      svg {
        margin-right: 1.6rem;
      }
    }
  }
`;
