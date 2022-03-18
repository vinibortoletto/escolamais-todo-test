import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.ul`
  display: grid;
  justify-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  padding: 0 1rem;

  button {
    width: 100%;
    max-width: 30rem;
    padding: 1rem;
    background-color: ${vars.color.darkBlue};
    border-radius: 5px;
  }

  button:nth-child(odd) {
    background-color: ${vars.color.lightBlue};
  }
`;
