import styled, { css } from "styled-components";

export const SearchComponent = styled.div`
  padding: 2rem 0rem;
  margin: 0 auto;
  display: flex;
`;

export const SearchForm = styled.form`
  align-items: center;
  margin: 0 auto;
  display: flex;
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    border-color: ${theme.colors.secundary};
    background: transparent;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-style: solid;
    align-items: center;

    margin-right: 0.6rem;

    color: ${theme.colors.textInput};
    padding: 0.6rem 1rem;
    font-family: "Inter";
    font-size: 1rem;
    width: 572px;

    :focus {
      outline: none;
    }
  
    @media (max-width: 860px) {
      width: 272px;
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 0.25rem;
    padding: 0.8rem 2rem;
    border-style: none;

    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.text};

    :hover {
      
      filter: brightness(.9);
      cursor: pointer;
    }

    :cli

    @media (max-width: 860px) {
      padding: 0.8rem 1rem;
    }
  `}
`;
