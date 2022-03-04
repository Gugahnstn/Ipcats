import { SearchStyle, SearchText, SearchInput, ResultSearch } from "./style";
import serviceIpApi from "../../services/service-ip-api";
import { useState } from "react";

const Search = () => {
  const [continent, setContinent] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [estate, setEstate] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const [flag, setFlag] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const apiIp = async () => {
    const ipApi = await serviceIpApi(search);

    setContinent(ipApi.continent);
    setFlag(ipApi.countryCode);
    setCountry(ipApi.country);
    setEstate(ipApi.region);
    setQuery(ipApi.query);
    setCity(ipApi.city);
  };

  function handleText(event) {
    setSearch(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiIp();
  }

  return (
    <SearchStyle>
      <SearchText>
        <p>DIGITE O IP/DOMINIO DESEJADO:</p>
      </SearchText>
      <SearchInput onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          onChange={handleText}
          value={search}
          placeholder="IP/DOMAINS"
        />
        <button type="submit" className="searchButton">
          BUSCAR
        </button>
      </SearchInput>
      <ResultSearch>
        <hr />
        <div className="cityEstate">
          <h1>Cidade, Estado:</h1>
          <p>{!city ? "NENHUM" : `${city.toUpperCase()}-${estate}`}</p>
        </div>
        <hr />
        <div className="query">
          <h1>IP/Domain:</h1>
          <p>{!query ? "NENHUM" : `${query.toUpperCase()}`}</p>
        </div>
        <hr />
        <div className="continent">
          <h1>Continente:</h1>
          <p>{!continent ? "NENHUM" : `${continent.toUpperCase()}`}</p>
        </div>
        <hr />
        <div className="containerCountry">
          <h1>País:</h1>
          <div className="country">
            { flag && <img src={`https://countryflagsapi.com/png/${flag}`} alt="" /> }
            <p>{!country ? "NENHUM" : `${country.toUpperCase()}`}</p>
          </div>
        </div>
        <hr />
      </ResultSearch>
    </SearchStyle>
  );
};

export default Search;
