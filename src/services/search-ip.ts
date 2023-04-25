async function searchIp() {
  try{
    const response = await fetch('https://my-ip-address.bohr.io/api');
    const data = await response.json();
    return data.query;
  } catch(error) {
    console.error(error);
  }
}

export default searchIp;