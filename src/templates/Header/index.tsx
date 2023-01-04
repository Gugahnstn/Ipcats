import logo from "../../../public/images/Logo.svg";

import { Container } from "../../styles/global";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderComponent>
      <Container>
        <S.ContainerHeader>
          <S.Image src={logo} />
          <S.TextIp>
            IP: <S.SpanTextIp>000.000.000</S.SpanTextIp>
          </S.TextIp>
        </S.ContainerHeader>
      </Container>
    </S.HeaderComponent>
  );
};

export default Header;
