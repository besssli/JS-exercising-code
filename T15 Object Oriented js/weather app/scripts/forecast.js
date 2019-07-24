class Forecast{
    constructor(){
        this.key = 'eV3BIfBu2xQql2y3GdMGb1ysuA8NE7cL';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const respone = await fetch(this.cityURI + query);
        const data = await respone.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
    
        const respone = await fetch(this.weatherURI + query);
        const data = await respone.json();
        return data[0];
    }
}

