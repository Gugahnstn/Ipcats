import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --roboto-mono: 'Roboto Mono';
    --roboto-slab: 'Roboto Slab';
    --roboto: 'Roboto'
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
