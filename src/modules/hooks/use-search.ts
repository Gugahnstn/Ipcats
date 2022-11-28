import { ChangeEvent, FormEventHandler, useState } from "react";
import serviceIpApi from "../../services/service-ip-api";
import { Data } from "../../types";

export default function useSearch() {
  const [data, setData] = useState<Data>({
    continent: null,
    country: null,
    query: null,
    state: null,
    flag: null,
    city: null
  })

  const [search, setSearch] = useState("");

  const apiIp = async () => {
    const ipApi = await serviceIpApi(search);

    setData({
      continent: ipApi.continent,
      flag: ipApi.countryCode,
      country: ipApi.country,
      state: ipApi.region,
      query: ipApi.query,
      city: ipApi.city,
    })
  };

  function handleText(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.trim());
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    apiIp();
  }

  return {
    handleText,
    handleSubmit,
    data,
    search
  }
}