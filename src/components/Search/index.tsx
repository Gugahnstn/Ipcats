import useSearch from "../../modules/hooks/use-search";

import * as S from "./style";

const Search = () => {
  const { handleSubmit, handleText, search, data } = useSearch();

  console.log(data)

  return (
    <S.SearchComponent>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          placeholder="IP / DOMAIN"
          onChange={handleText}
          value={search}
          type="text"
        />
        <S.SearchButton type="submit">Buscar</S.SearchButton>
      </S.SearchForm>
    </S.SearchComponent>
  );
};

export default Search;
