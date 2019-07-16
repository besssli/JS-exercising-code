const key = '	eV3BIfBu2xQql2y3GdMGb1ysuA8NE7cL';

// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const respone = await fetch(base + query);
    const data = await respone.json();

    return data[0];
};

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const respone = await fetch(base + query);
    const data = await respone.json();

    return data[0];
};


getCity('manchester')
    .then(data => {
        return getWeather(data.Key);
    }).then(data => {
        console.log(data);})
    .catch(err => console.log(err));

