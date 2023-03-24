import CardResult from "../../components/CardResult";
import Search from "../../components/Search";

import useSearch from "../../hooks/use-search";
import { Container } from "../../styles/global";
import { useEffect } from "react";
import * as S from "./style";

const Main = () => {
  const { data } = useSearch();
  
  useEffect(() => {
    console.log("teste: ", data);
  }, [data]);
  
  return ( 
    <S.MainComponent>
      <Container>
        <S.MainContainer>
          <S.Phrase>DIGITE O IP/DOMINIO DESEJADO:</S.Phrase>
          <Search />
          <S.ResultComponent>
            <CardResult title="Cidade, Estado:" phrase={data.city+'-'+data.state} />
            <CardResult title="Ip ou dominio:" phrase={data.reverse || data.query} />
            <CardResult title="Continente:" phrase={data.continent} />
            <CardResult title="País:" flag={data.flag} phrase={data.country} />
          </S.ResultComponent>
        </S.MainContainer>
      </Container>
    </S.MainComponent>
  );
};

export default Main;
