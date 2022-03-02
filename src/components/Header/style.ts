import styled from "styled-components"

export const HeaderStyle = styled.div`
  margin: 0.625rem; 

  div {
    justify-content: space-between;
    font-family: monospace;
    align-items: center;
    display: flex;
  }

  div > h1 {
    font-size: 1.375rem;
    font-weight: 800;
  }

  div > p {
    font-size: 0.925rem;
  }
`;