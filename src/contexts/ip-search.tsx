import {
  useState,
  createContext,
  PropsWithChildren,
  FormEventHandler,
  ChangeEvent,
} from "react";
import serviceIpApi from "../services/service-ip-api";
import { Data, ipSearchType } from "../types";
import searchIp from "../services/search-ip";

export const IpSearchContext = createContext({} as ipSearchType);

export const IpSearchProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Data>({} as Data);
  const [search, setSearch] = useState("");

  const settingIpApi = async () => {
    const query = await searchIp();
    const requestDomainAndIp = search || query;
    const getServiceIpApi = await serviceIpApi(requestDomainAndIp);
    setData({
      continent: getServiceIpApi.continent,
      flag: getServiceIpApi.countryCode,
      country: getServiceIpApi.country,
      reverse: getServiceIpApi.reverse,
      state: getServiceIpApi.region,
      query: getServiceIpApi.query,
      city: getServiceIpApi.city,
      lat: getServiceIpApi.lat,
      lon: getServiceIpApi.lon,
    });
  };

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.trim());
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    await settingIpApi();
  };

  return (
    <IpSearchContext.Provider
      value={{ handleSubmit, handleText, search, data }}
    >
      {children}
    </IpSearchContext.Provider>
  );
};