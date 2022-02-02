import { SearchStyle, SearchText ,SearchInput, ResultSearch } from "./style";
import { useState, useEffect, ReactHTMLElement} from "react";
import ServiceIpApi from "../../services/ServiceIpApi";

const Search = () => {
  const [city, setCity] = useState<string|null>(null);
  const [estate, setEstate] = useState<string|null>(null);
  const [query, setQuery] = useState<string|null>(null);
  const [continent, setContinent] = useState<string|null>(null);
  const [country, setCountry] = useState<string|null>(null);
  
  useEffect(()=>{
    let searchButton = document.querySelector('.searchButton') as HTMLElement;
    let search = document.querySelector('.search') as HTMLElement;
    
    let consultIpApi = async () => {
      let ipApi = await ServiceIpApi('' + search);

      setCity(ipApi.city);
      setEstate(ipApi.region);
      setQuery(ipApi.query);
      setContinent(ipApi.continent);
      setCountry(ipApi.country);
    };
    
    searchButton?.addEventListener('click', consultIpApi);
    search?.addEventListener('keypress', (event: KeyboardEvent): void => {
      if(event.key == 'enter'){
        consultIpApi();
      };
    });
  }, []);

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
        <hr />
        <div className="cityEstate">
          <h1>Cidade, Estado:</h1>
          <p>{ !city ? "NENHUM" : `${city.toUpperCase()}-${estate?.toUpperCase()}` }</p>
        </div>
        <hr />
        <div className="query">
          <h1>IP/Domain:</h1>
          <p>{ !query ? "NENHUM" : `${query}`}</p>
        </div>
        <hr />
        <div className="continent">
          <h1>Continente:</h1>
          <p>{ !continent ? "NENHUM" : `${continent.toUpperCase()}` }</p>
        </div>
        <hr />
        <div className="country">
          <h1>País:</h1>
          <p>{ !country ? "NENHUM" : `${country.toUpperCase()}`}</p>
        </div>
        <hr />
      </ResultSearch>
    </SearchStyle>
  )
}

export default Search;