import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #130604;
    padding-top: 8rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 1280px;
  }
`;
