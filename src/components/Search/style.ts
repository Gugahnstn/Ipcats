import styled from "styled-components";

export const Search = styled.div`
  font-family: var(--roboto-slab);
  display: block;
`;

export const TextContainer = styled.div`
  font-family: var(--roboto-mono), monospace;
  font-size: 1.875rem;
  text-align: center;

  margin-top: 1.25rem;
`;

export const FormSearch = styled.form`
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.625rem 20rem 0.625rem 0.75rem;

  font-family: var(--roboto), monospace;
  font-size: 1.125rem;

  border-color: #3f3d56b3;
  border-style: solid;
  border-radius: 0.3125rem;
  border-width: 0.1875rem;
  font-size: 1.125rem;
  font-weight: 700;

  color: #000;
`;

export const Button = styled.button`
  padding: 0.75rem 2.5rem 0.75rem 2.5rem;

  background-color: #1b9105;

  font-family: var(--roboto-slab), monospace;
  font-size: 1.25rem;

  border-radius: 0.3125rem;
  border-style: none;

  cursor: pointer;
  outline: none;
  color: #fff;

  :hover {
    filter: brightness(0.8);
  }

  :active {
    transform: scale(0.9);
  }
`;

export const SearchResult = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;

  align-items: center;
  text-align: center;
  display: flex;
`;

export const SearchResultContainer = styled.div`
  margin: 0 auto;
  display: flex;

  .Before-ResultContainer::before {
    border-width: 0.06rem;
    border-style: solid;
    content: "";
  }
`;

export const ResultsContainers = styled.div`
  display: flex;

  ::after {
    border-width: 0.06rem;
    border-style: solid;
    content: "";
  }
`;

export const Result = styled.div`
  padding: 0rem 2rem;

  img {
    border-radius: 0rem;
    margin-right: 0.4rem;
    width: 2.2rem;
  }
`;

export const ResultTitle = styled.h1`
  font-family: var(--roboto-slab), monospace;
  font-size: 1.125rem;
  font-weight: 700;
  color: #403c3c;
`;

export const ResultPhrase = styled.p`
  font-family: var(--roboto-slab), monospace;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const CountryContainer = styled.div`
  align-items: center;
  display: flex;
`;
