var fetch: any = require('node-fetch');

const weather: any = "d2a930a5c24edf9a7697f61d0a3eb0e4";

export namespace Weather {
    export var getWeather = async (params: any) => {
        console.log('getWeather');
        const req: any = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.name}`
            + `&appid=${weather}`);
        const data: any = await req.json();
        return {"result": data.name + ": " + (Math.round(Number(data.main.temp) - 273.15) + "°C") +
            " - " + data.weather[0].main + " - " + data.main.pressure + "hPa - " + data.main.humidity + "%"};
    };
    export var getBadWeather = async (params: any) => {
        console.log('getBadWeather');
        const req: any = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.name}`
            + `&appid=${weather}`);
        const data: any = await req.json();
        const main: any = data.weather[0].main;
        if(main === "Thunderstorm" || main === "Drizzle" || main === "Rain" || main === "Snow" )
            return {"result": data.name + ": " + (Math.round(Number(data.main.temp) - 273.15) + "°C") +
            " - " + data.weather[0].main + " - " + data.main.pressure + "hPa - " + data.main.humidity + "%"};
    };
}