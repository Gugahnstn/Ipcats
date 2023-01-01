import Search from "../../components/Search";

import { Container } from "../../styles/style";
import * as S from "./style";

const Main = () =>{
  return(
    <S.MainComponent>
      <Container>
        <Search />
      </Container>
    </S.MainComponent>
  );
}

export default Main;