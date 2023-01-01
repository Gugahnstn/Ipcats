import styled, { css } from "styled-components";

export const HeroComponent = styled.section`
  ${({ theme }) => css`
    font-family: ${theme.font.Inter};
    color: ${theme.colors.text};
    /* justify-content: center; */
    padding: 1.5rem 0rem;
    /* align-items: center;
    display: flex;
    height: 120vh;
    width: 100%; */

    @media (max-width: 860px) {
      padding: 0rem 0rem;  
    }
  `}
`;

export const HeroContainer = styled.div`
  justify-content: space-between;
  padding: 0rem 2.8rem;
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
  line-height: 4rem;
  font-size: 4rem;

  width: 41.25rem;

  @media (max-width: 860px) {
    line-height: 2rem;
    font-size: 2rem;
    width: 20rem;

    margin: 0 auto;
  }
`;

export const HeroPhrase = styled.p`
  text-align: justify;
  font-size: 12px;
  color: #BA9D9D;
  width: 30.5rem;

  @media (max-width: 860px) {
    text-align: center;
    margin: 0 auto;
    width: 20rem;
  }
`;

export const Image = styled.img`
  @media (max-width: 860px) {
    height: 279.24px;
    width: 298.5px;
  }
`
