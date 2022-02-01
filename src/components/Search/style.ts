import styled from "styled-components"

export const SearchStyle = styled.div`
  display: block;
  font-family: var(--roboto-slab);
`;

export const SearchText = styled.div`
  font-family: var(--roboto-mono), monospace;
  text-align: center;
  font-size: 30px;

  margin-top: 20px;
`;

export const SearchInput = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  display: flex;
  gap: 8px;

  .search {
    padding: 0.625rem 20rem 0.625rem 0.75rem;

    font-family: var(--roboto), monospace;
    font-size: 18px;

    border-color: #3f3d56b3;
    border-style: solid;
    border-radius: 5px;
    border-width: 3px;
    font-weight: 700;
    font-size: 18px;

    color: #000;

  }

  .searchButton {
    padding: 0.75rem 2.5rem 0.75rem 2.5rem;
    
    background-color: #1B9105;

    font-family: var(--roboto-slab), monospace;
    font-size: 20px;

    border-style: none;
    border-radius: 5px;

    cursor: pointer;

    outline: none;

    color: #fff;
  }

  .searchButton:hover {
    filter: brightness(0.8);
  }

  .searchButton:active {
    transform: scale(.9);
  }
`;

export const ResultSearch = styled.div`

  margin-top: 4rem;
  margin-bottom: 4rem;

  font-family: var(--roboto-slab), monospace;
  align-items: center;
  text-align: center;
  display: flex;

  hr {
    border-top: 4.2rem;
    border-style: solid;
    border-bottom: 4.2rem;
  }

  h1 {
    font-weight: 700;
    font-size: 0.85rem;
    color: #403C3C
  }

  p {
    font-weight: 700;
    font-size: 28px
  }
  
  .cityEstate, 
  .query, 
  .continent, 
  .country {
    margin: 0 auto;
  }
`;