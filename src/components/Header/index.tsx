import { fetchIpUserApi } from '../../services/service-ip-api';
import { useState, useEffect } from 'react';
import * as S from "./style";

const Header = () => {
  const [query, setQuery] = useState<string|null>(null);

  useEffect(() => {
    async function fetchQueryMyIp() {
      const data = await fetchIpUserApi();
      setQuery(data);
    }

    fetchQueryMyIp()
  }, []);

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderTitle>Ipcats</S.HeaderTitle>
        <S.HeaderPhrase>IP: {!query ? "000.00.00.0" : `${query}`}</S.HeaderPhrase>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
