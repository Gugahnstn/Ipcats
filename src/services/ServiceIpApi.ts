const ServiceIpApi = async (query: string) => {
  try {
    let response = await fetch(`http://ip-api.com/json/${query}?lang=pt-BR`);
    let data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default ServiceIpApi;