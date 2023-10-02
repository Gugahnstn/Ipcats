import { Container } from "../../styles/global";
import { useEffect, useState } from "react";
import * as S from "./style";

import logo from "../../assets/images/Logo.svg";
import searchIp from "../../services/search-ip";

const Header = () => {
  const [ query, setQuery ] = useState<string|null>();

  useEffect(() => {
    async function searchIpQuery() {
      const response = await searchIp();
      setQuery(response);
    }
    
    searchIpQuery();
  }, [query]);
  
  return (
    <S.HeaderComponent>
      <Container>
        <S.ContainerHeader>
          <S.Image src={logo} />
          <S.TextIp>
            IP: <S.SpanTextIp>{ !query ? "000.000.000" : query }</S.SpanTextIp>
          </S.TextIp>
        </S.ContainerHeader>
      </Container>
    </S.HeaderComponent>
  );
};

export default Header;
