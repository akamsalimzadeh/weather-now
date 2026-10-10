export type Location = {
    country: string
    latitude: number
    longitude: number
    name: string
}
export type CurrentWeather = {
    apparent_temperature: number
    precipitation: number
    relative_humidity_2m: number
    temperature_2m: number
    weather_code: number
    wind_speed_10m: number
    time: string
}
export type CurrentUnits = {
    apparent_temperature: string
    precipitation: string
    relative_humidity_2m: string
    temperature_2m: string
    wind_speed_10m: string
}
export type WeatherResponse = {
    latitude: number
    longitude: number
    timezone: string
    current: CurrentWeather
    current_units: CurrentUnits
}
export type GeocodingResponse = {
    results: Location[]
}