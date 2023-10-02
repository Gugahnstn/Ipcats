import styled, { css } from "styled-components";

export const CardResultComponent = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.families.font_secundary};
    text-align: center;
    color: #ffff;

    border: 0.0625rem solid #ffff;
    flex-direction: column;
    border-radius: 0.25rem;
    align-items: center;
    padding: 1rem 0rem;
    display: flex;
    width: 45rem;

    @media (max-width: 980px) {
      margin-bottom: 2rem;
      padding: 1rem 5rem;
      width: auto;
    }
  `}
`;

export const CardResultContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const FlagImage = styled.img`
  margin-right: 0.5rem;
  height: 24px;
  width: 24px;
`

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.text_sm};
    margin-bottom: 0.25rem;
    font-weight: 400;
  `}
`;

export const CardPhrase = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.result};
    text-align: center;
    font-weight: 700;
    white-space: nowrap;

    ::after {
      content: attr(data-text);
      font-size: calc(1rem - 0.1rem * (attr(data-text) - 10));
    }
  `}
`;
