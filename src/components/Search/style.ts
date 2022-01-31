import styled from "styled-components"

export const SearchStyle = styled.div`

`;

export const SearchText = styled.div`
  font-family: 'Roboto Mono';
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

    font-family: 'Roboto Slab';
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

    font-family: 'Roboto Slab';
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
  text-align: center;
  display: flex;

  h1 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.85rem;
  }

  p {
    font-size: 25px;
  }
  
  .cityEstate, 
  .query, 
  .continent, 
  .country {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;