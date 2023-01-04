import styled, { css } from "styled-components";

export const MainComponent = styled.main`
  padding: 2rem 0rem;
`;

export const MainContainer = styled.div`
`

export const Phrase = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    text-align: center;
    margin-right: 2rem;
    color: ${theme.colors.text};

    @media (max-width: 860px) {
      margin-right: 0rem;
      font-size: 1rem;
    }
  `}
`;
