import styled, { css } from "styled-components";

export const CardResultComponent = styled.div`
  text-align: center;
  color: #ffff;

  @media (max-width: 980px) {
    margin-bottom: 2rem;
  }
`

export const CardResultContainer = styled.div` 
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 8px 8px 0px 0px;
    padding: 0.2rem 7rem;
    margin-bottom: 1rem;
  `}
`;

export const ResultCardTitle = styled.h1`
  font-size: 0.75rem;
`

export const ResultCardPhrase = styled.p`
  font-size: 1rem;
`;