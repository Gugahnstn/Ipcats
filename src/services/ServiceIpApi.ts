const ServiceIpApi = async (query: string) => {
  try {
    let response = await fetch('https://ip-api.com/json/'+ query + '?fields=continent,country,region,city,lat,lon,query&lang=pt-BR');
    let data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default ServiceIpApi;