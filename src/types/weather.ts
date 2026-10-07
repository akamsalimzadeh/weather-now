export type Location = {
    country: string
    latitude: number
    longitude: number
    name: string
}
export type CurrentWeather = {
    apparent_temperature: number
    relative_humidity_2m: number
    temperature_2m: number
    weather_code: number
    wind_speed_10m: number
    time: string
}
export type WeatherResponse = {
    latitude: number
    longitude: number
    timezone: string
    current: CurrentWeather
}
export type GeocodingResponse = {
    results: Location[]
}