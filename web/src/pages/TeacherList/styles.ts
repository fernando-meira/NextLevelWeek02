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
    grid-template-columns: repeat(3, 1fr);
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
