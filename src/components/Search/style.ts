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
    border-color: ${theme.colors.lineInput};
    background: transparent;
    border-width: 0.125rem;
    border-radius: 0.2rem;
    border-style: solid;
    align-items: center;

    margin-right: 0.6rem;

    color: ${theme.colors.text};
    padding: 0.8rem 0.6rem;
    font-weight: 700;
    font-size: 1rem;
    width: 35.75rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: ${theme.font.sizes.text_sm};
      color: ${theme.colors.textInput};
    }
  
    @media (max-width: 860px) {
      width: 17rem;
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    border-style: none;

    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.text};

    :hover {
      filter: brightness(.9);
      cursor: pointer;
    }

    @media (max-width: 860px) {
      padding: 0.8rem 1rem;
      align-items: center;
      display: flex;
    }
  `}
`;
