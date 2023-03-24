import logo from "../../assets/images/Logo.svg";

import { Container } from "../../styles/global";
import { useState } from "react";
import * as S from "./style";

const Header = () => {
  const [ query, setQuery ] = useState<string|null>();
  
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
