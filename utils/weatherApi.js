import { getLocalTimeFromUTC } from "../utils/time.js"

const createApiUrl = (query, apiKey, units) => {
    return `https://api.openweathermap.org/data/2.5/weather${query}&appid=${apiKey}&units=${units}`
}



export const getWeatherByLonLat = async (lat, lon, apiKey, units) => {
    try {
        const result = (await fetch(createApiUrl(`?lat=${lat}&lon=${lon}`, apiKey, units)))
        const Data = await result.json()

        const { main: weatherData, sys, weather, wind, timezone, dt } = Data;

        const condensedData = {

            temperature: weatherData.temp,
            feelsLike: weatherData.feels_like,
            maxTemperature: weatherData.temp_max,
            minTemperature: weatherData.temp_min,
            windSpeed: wind.speed,
            humidity: weatherData.humidity,
            description: weather[0].description,
            date: new Date(dt * 1000).toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" }),
            sunrise_IL: new Date(sys.sunrise * 1000).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
            sunset_IL: new Date(sys.sunset * 1000).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
            localSunrise: getLocalTimeFromUTC(sys.sunrise, timezone),
            localSunset: getLocalTimeFromUTC(sys.sunset, timezone),
            rawData: Data,
        };
        return condensedData
    } catch (error) {
        error
    }
}

console.log(await getWeatherByLonLat(31.25076611274768, 34.77582102943657, "0b5b2736b5827c2a34ef0b349be15f4e", "metric"));
