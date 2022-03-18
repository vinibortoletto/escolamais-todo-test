import { createGlobalStyle } from 'styled-components';
import { vars } from './variables';
import { ResetStyles } from './ResetStyles';

export const GlobalStyles = createGlobalStyle`
  ${ResetStyles};

  body, button {
    font-family: 'Quicksand', sans-serif;
    color: ${vars.color.lighterBlue};
  }

  body {
    background-color: ${vars.color.darkerBlue};
    padding: 2rem 0 10rem 0;
    text-align: center;
    color: ${vars.color.lighterBlue};
  }
`;
