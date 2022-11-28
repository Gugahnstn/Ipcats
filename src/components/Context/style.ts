import styled from "styled-components"

export const ContextStyle = styled.div`
  align-items: center;
  display: flex;

  /* @media (max-width: 800px) {
    flex-direction: column;
    display: block;
  } */
`;

export const ContextStyleText = styled.div`
  /* @media (max-width: 800px) {
    text-align: center;
  } */
`;


export const Title = styled.h1`
  font-family: monospace;
  margin-bottom: 1rem;
  font-weight: 900;
  font-size: 3rem;
  width: 30rem;
`

export const Phrase = styled.p`
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 500;
`

export const ContextStyleImage = styled.div`
  img {
    width: 720px;
  }
`;