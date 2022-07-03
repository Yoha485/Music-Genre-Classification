import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Patua One', cursive;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
