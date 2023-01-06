import CardResult from "../../components/CardResult";
import Search from "../../components/Search";

import { Container } from "../../styles/global";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainComponent>
      <Container>
        <S.MainContainer>
          <S.Phrase>DIGITE O IP/DOMINIO DESEJADO:</S.Phrase>
          <Search />
          <S.ResultComponent>
            <CardResult title="Cidade, Estado:" phrase="OFFLINE" />
            <CardResult title="IP/Dominio:" phrase="OFFLINE" />
            <CardResult title="Continente:" phrase="OFFLINE" />
            <CardResult title="País:" phrase="OFFLINE" />
          </S.ResultComponent>
        </S.MainContainer>
      </Container>
    </S.MainComponent>
  );
};

export default Main;
