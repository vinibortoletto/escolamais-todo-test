import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    color: ${vars.color.cyan};
  }

  font-size: 1.5rem;
  margin: 4rem 0;
  padding: 0 1rem;

  @media only screen and (min-width: 581px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.h1`
  span {
    font-weight: bold;
  }
`;
