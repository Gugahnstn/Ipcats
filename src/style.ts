import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
