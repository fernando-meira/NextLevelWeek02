import styled from 'styled-components';

import colors from '../../themes/styles/colors';

export const Container = styled.div`

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
    & + div {
      margin-top: 0;
    }
  }
`;
