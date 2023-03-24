import styled, { css } from "styled-components";

export const HeroComponent = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    padding-top: 10rem;
  `}
`;

export const HeroContainer = styled.div`
  justify-content: space-between;
  padding: 0rem 1.5rem;
  align-items: center;
  display: flex;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const HeroTextContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 2rem;

  @media (max-width: 860px) {
    text-align: center;
    gap: 1rem;
  }
`;

export const HeroImageContainer = styled.div``;

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.text_2xl};
    line-height: ${theme.font.sizes.text_2xl};

    width: 41.25rem;

    @media (max-width: 860px) {
      line-height: ${theme.font.sizes.text_xl};
      font-size: ${theme.font.sizes.text_xl};
      width: 20rem;

      margin: 0 auto;
    }
  `}
`;

export const HeroPhrase = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.text_base};
    text-align: justify;
    font-weight: 500;
    color: #ba9d9d;
    width: 35rem;

    @media (max-width: 860px) {
      font-size: ${theme.font.sizes.text_xs};
      text-align: center;
      margin: 0 auto;
      width: 20rem;
    }
  `};
`;

export const Image = styled.img`
  height: 458.2px;
  width: 524px;

  @media (max-width: 860px) {
    height: 279.24px;
    width: 298.5px;
  }
`;
