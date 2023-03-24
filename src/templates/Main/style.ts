import styled, { css } from "styled-components";

export const MainComponent = styled.main`
  padding: 3rem 0rem;
`;

export const MainContainer = styled.div`
`

export const Phrase = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 1.5rem;
    text-align: center;
    margin-right: 2rem;

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
  gap: 0.5rem;

  @media (max-width: 980px) {
    padding: 0rem 2rem;
    display: block;
  }
`
