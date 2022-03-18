import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 1rem;

  font-size: 1.3rem;
  text-align: left;
  text-transform: capitalize;
`;

export const Form = styled.form`
  max-width: 30rem;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 1rem;

    border-radius: 5px;
    background-color: ${vars.color.lighterBlue};
    color: ${vars.color.darkerBlue};
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${vars.color.darkerBlue};
  }
`;

export const List = styled.div`
  ul {
    display: grid;
    justify-items: center;
    gap: 1rem;
  }

  li {
    width: 100%;
    max-width: 30rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    background-color: ${vars.color.lightBlue};
    border-radius: 5px;

    &.checked {
      opacity: 0.3;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;

  .remove {
    color: ${vars.color.red};
    transform: rotate(45deg);
  }

  .check {
    color: ${vars.color.green};
  }
`;
