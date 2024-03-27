
const run = async ()=> {
    const locations = await fetchData();
    console.log(new Date())
    console.log(locations)
    setTimeout(run, 15000);

}

const fetchData = async () => {
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip'
    const response = await fetch(url)
    const jsonResponse = await response.json()
    return jsonResponse.data;
}
run()
