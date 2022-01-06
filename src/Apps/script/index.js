const query = document.querySelector('#ip_dnsSearch').value;
const searchMain = document.querySelector('.ip_dns');
const search = document.querySelector('#search');
let clickTimes = 0;

window.onload = () =>{
    fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(ler => {
        document.querySelector('#ip_user')
        .innerText = `IP:${ler.query}`;
    });
};

search.addEventListener('click', () => {

    if(clickTimes === 5){
        return searchMain.innerHTML += '<p id="noinput">Error: Você não pode mais digitar</p>'
    };

    async function requestIpApi(query) {
        try {
            const response = await fetch(`http://ip-api.com/json/${query}?lang=pt-BR`);
            const data = await response.json();
            return receberApi(data);
        } catch (error) {
            console.error("Error");
        };
    };

    function receberApi(res){
        document.querySelector('#city_estate > h1')
        .innerText = `${res.city.toUpperCase()}-${res.region}`;

        // document.querySelector('#ips_domains > h1')
        // .innerText;

        document.querySelector('#continent > h1')
        .innerText = `${res.continent}`

        document.querySelector('#pa > h1')
        .innerText = `${res.country.toUpperCase()}`;
    }

    requestIpApi('');
    clickTimes++;

});



async function tokenMap(){
    fetch('Apps/script/json/mapboxtoken.json')
    .then(response => response.json())
    .then(ter => {
        return JSON.stringify(ter.token)
    });
    return ter;
}

console.log(tokenMap())

// mapboxgl.accessToken = tokenMap();

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position
//     zoom: 9 // starting zoom
// });
        
// //Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());
