async function serviceIpApi(query?: string) {
  const urlRequest = "https://jolly-leaf-26e7.gustavonstn.workers.dev/json/"+query+"?lang=pt-BR&fields=1061087"

  try {
    const response = await fetch(urlRequest);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default serviceIpApi;