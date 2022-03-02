import { useState, useEffect } from "react";
import { fetchIpUserApi } from "../../services/services-viacep-api"
import { HeaderStyle } from "./style";

const Header = () => {
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQueryMyIp() {
      const data = await fetchIpUserApi();
      setQuery(data);
    }

    fetchQueryMyIp()
  }, []);

  return (
    <>
      <HeaderStyle>
        <div>
          <h1>Ipcats</h1>
          <p>IP: {!query ? "000.00.00.0" : `${query}`}</p>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
