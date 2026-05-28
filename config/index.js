import "dotenv/config"

export const port =  process.env.PORT
export const jwtSecret = process.env.JWT_SECRET
export const weatherApiKey = process.env.OPEN_WEATHER_API_KEY

export default {
    port,
    jwtSecret,
    weatherApiKey
}
