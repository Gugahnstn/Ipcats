import { useState, useEffect } from "react";
import ServiceIpApi from "../../services/ServiceIpApi";
import { HeaderStyle } from "./style";

const Header = () => {
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const ipQuery = async () => {
      let ipApi = await ServiceIpApi('');
      setQuery(ipApi.query);
    };

    ipQuery();
  }, []);

  return (
    <>
      <HeaderStyle>
        <div>
          <h1>IpCats</h1>
          <p>IP: {!query ? "000.00.00.0" : `${query}`}</p>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
