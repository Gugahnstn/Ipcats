async function getIpUser() {
  try {
    const response = await fetch('http://l2.io/ip.json/');
    const data = await response.json;
    return data;
  } catch(err) {
    console.log(err);
  }
}

async function serviceIpApi(query: String){
  try {
    const response = await fetch('https://jolly-leaf-26e7.gustavonstn.workers.dev/json/'+query+'?lang=pt-BR&fields=continent,country,countryCode,region,city,regionName,lat,lon,query');
    const data = response.json();
    return data;
  } catch(err) {
    console.error(err)
  }
}

export { serviceIpApi, getIpUser };
