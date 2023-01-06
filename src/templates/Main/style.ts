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

export const ResultComponent = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media (max-width: 980px) {
    padding: 0rem 4rem;
    display: block;
  }
`