import styled from "styled-components"

export const SearchStyle = styled.div`
  display: block;
  font-family: var(--roboto-slab);
`;

export const SearchText = styled.div`
  font-family: var(--roboto-mono), monospace;
  text-align: center;
  font-size: 1.875rem;

  margin-top: 1.25rem;
`;

export const SearchInput = styled.form`
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  display: flex;
  gap: 0.5rem;

  .search {
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

  }

  .searchButton {
    padding: 0.75rem 2.5rem 0.75rem 2.5rem;
    
    background-color: #1B9105;

    font-family: var(--roboto-slab), monospace;
    font-size: 1.25rem;

    border-radius: 0.3125rem;
    border-style: none;

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

  align-items: center;
  text-align: center;
  display: flex;

  hr {
    border-top: 4.2rem;
    border-style: solid;
    border-bottom: 4.2rem;
  }

  h1 {
    font-family: var(--roboto-slab), monospace;
    font-weight: 700;
    font-size: 1.125rem;
    color: #403C3C
  }

  p {
    font-family: var(--roboto-slab), monospace;
    font-weight: 700;
    font-size: 1.75rem
  }
  
  .cityEstate, 
  .query, 
  .continent, 
  .containerCountry {
    margin: 0 auto;
  }
  
  .country {
    align-items: center;
    display: flex;
  }

  .country > img { 
    border-radius: 0.3125rem;
    margin-right: 0.4rem;
    width: 2.81252rem;
  }
`;