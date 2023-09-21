async function searchIp(): Promise<string | undefined>{
  try{
    const response = await fetch('https://my-ip-address.bohr.io/api');
    const data = await response.json();
    return data.query as string;
  } catch(error) {
    console.error(error);
  }
}

export default searchIp;