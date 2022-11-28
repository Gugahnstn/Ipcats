import useSearch from "../../modules/hooks/use-search";
import * as S from "./style";

const Search = () => {
  const { handleText, handleSubmit, data, search } = useSearch();

  return (
    <S.Search>
      <S.TextContainer>
        <p>DIGITE O IP/DOMINIO DESEJADO:</p>
      </S.TextContainer>
      <S.FormSearch onSubmit={handleSubmit}>
        <S.Input
          type="text"
          value={search}
          onChange={handleText}
          placeholder="IP/DOMAINS"
        />
        <S.Button type="submit" className="searchButton">
          BUSCAR
        </S.Button>
      </S.FormSearch>
      <S.SearchResult>
        <S.SearchResultContainer>
          <S.ResultsContainers className="Before-ResultContainer">
            <S.Result>
              <S.ResultTitle>Cidade, Estado:</S.ResultTitle>
              <S.ResultPhrase>
                {!data.city ? "NENHUM" : `${data.city}-${data.state}`}
              </S.ResultPhrase>
            </S.Result>
          </S.ResultsContainers>
          <S.ResultsContainers>
            <S.Result>
              <S.ResultTitle>IP / Domínio:</S.ResultTitle>
              <S.ResultPhrase>
                {!data.city ? "NENHUM" : data.query}
              </S.ResultPhrase>
            </S.Result>
          </S.ResultsContainers>
          <S.ResultsContainers>
            <S.Result>
              <S.ResultTitle>Continente:</S.ResultTitle>
              <S.ResultPhrase>
                {!data.city ? "NENHUM" : data.continent}
              </S.ResultPhrase>
            </S.Result>
          </S.ResultsContainers>
          <S.ResultsContainers>
            <S.Result>
              <S.ResultTitle>País:</S.ResultTitle>
              <S.CountryContainer>
                {data.flag && (
                  <img
                    className="country-flag"
                    src={`https://countryflagsapi.com/png/${data.flag}`}
                  />
                )}
                <S.ResultPhrase>
                  {!data.city ? "NENHUM" : data.country}
                </S.ResultPhrase>
              </S.CountryContainer>
            </S.Result>
          </S.ResultsContainers>
        </S.SearchResultContainer>
      </S.SearchResult>
    </S.Search>
  );
};

export default Search;
