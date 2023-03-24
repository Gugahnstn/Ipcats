import { BiSearchAlt2 } from "react-icons/all";

import useSearch from "../../hooks/use-search";
import * as S from "./style";

const Search = () => {
  const { handleSubmit, handleText, search, data } = useSearch();
  const { innerWidth: width } = window;

  return (
    <S.SearchComponent>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          placeholder="Enderenço de Ip ou Dominio"
          onChange={handleText}
          value={search}
          type="text"
        />
        <S.SearchButton type="submit">
          {width <= 860 ? <BiSearchAlt2 size={24} /> : "BUSCAR"}
        </S.SearchButton>
      </S.SearchForm>
    </S.SearchComponent>
  );
};

export default Search;
