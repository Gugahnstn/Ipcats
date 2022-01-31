import { SearchStyle, SearchText ,SearchInput, ResultSearch } from "./style";

const Search = () => {
  return(
    <SearchStyle>
      <SearchText>
        <p>DIGITE O IP/DOMINIO DESEJADO:</p>
      </SearchText>
      <SearchInput>
        <input type="text" className="search" placeholder="IP/DOMAINS"/>
        <input type="button" className="searchButton" value="SEARCH" />
      </SearchInput>
      <ResultSearch>
        <div className="cityEstate">
          <h1>Cidade, Estado:</h1>
          <p>NENHUM</p>
        </div>
        <div className="query">
          <h1>IP/Domain:</h1>
          <p>NENHUM</p>
        </div>
        <div className="continent">
          <h1>Continente:</h1>
          <p>NENHUM</p>
        </div>
        <div className="country">
          <h1>País:</h1>
          <p>NENHUM</p>
        </div>
      </ResultSearch>
    </SearchStyle>
  )
}

export default Search;