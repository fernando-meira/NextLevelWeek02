import styled from 'styled-components';

import colors from '../../themes/styles/colors';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  background-color: ${colors.primary};

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${colors.textInPrimary};

    a {
      height: 3.2rem;
      transition: opacity 0.4s;

      :hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 1.6rem;
    }
  }

  .header-content {
    position: relative;

    width: 90%;
    margin: 0 auto;
    margin: 3.2rem auto;

    strong {
      line-height: 4.2rem;
      font: 700 3.6rem Archivo;
      color: ${colors.titleInPrimary};
    }
  }

  @media (min-width: 700px) {
    height: 340px;

    .top-bar-container {
      max-width: 1100px;
    }

    .header-content {
      margin: 0 auto;
      max-width: 740px;
      padding-bottom: 48px;

      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      strong {
        max-width: 350px;
      }
    }
  }
`;
