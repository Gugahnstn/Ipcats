import Search from "../../components/Search";

import { Container } from "../../styles/global";
import * as S from "./style";

const Main = () => {
  return(
    <S.MainComponent>
      <Container>
        <S.MainContainer>
          <S.Phrase>DIGITE O IP/DOMINIO DESEJADO:</S.Phrase>
          <Search />
        </S.MainContainer>
      </Container>
    </S.MainComponent>
  );
}

export default Main;