import CardResult from "../../components/CardResult";
import Search from "../../components/Search";

import { SearchMap } from "../../components/SearchMap";
import { Container } from "../../styles/global";
import useSearch from "../../hooks/use-search";
import * as S from "./style";

const Main = () => {
  const { data } = useSearch();

  return ( 
    <S.MainComponent>
      <Container>
          <S.Phrase>DIGITE O IP/DOMINIO DESEJADO:</S.Phrase>
          <Search />
        <S.MainContainer>
          <S.ResultComponent>
            <CardResult title="Cidade, Estado:" phrase={data.city+'-'+data.state} />
            <CardResult title="Ip ou dominio:" phrase={data.reverse || data.query} />
            <CardResult title="Continente:" phrase={data.continent} />
            <CardResult title="País:" flag={data.flag} phrase={data.country} />
          </S.ResultComponent>
          <S.ContainerSearchMap>
            <SearchMap longitude={data.lon} latitude={data.lat}/>
          </S.ContainerSearchMap>
        </S.MainContainer>
      </Container>
    </S.MainComponent>
  );
};

export default Main;
