import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: ${theme.font.families.font_default};
      background-color: ${theme.colors.background};
    }

    ::-webkit-scrollbar {
      height: 0rem;
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary};
    }
  `} 
`;

export const Container = styled.div`
  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 1280px;
  }
`;
