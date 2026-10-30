export type Location = {
    country: string
    latitude: number
    longitude: number
    name: string
}


//      current forecast data

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


//      daily forecast data

export type DailyUnits = {
    time: string
    weather_code: string
    temperature_2m_max: string
    temperature_2m_min: string
}
export type DailyWeather = {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
}



//      response forecast data

export type WeatherResponse = {
    latitude: number
    longitude: number
    timezone: string
    current: CurrentWeather
    current_units: CurrentUnits
    daily_units: DailyUnits
    daily: DailyWeather
}
export type GeocodingResponse = {
    results: Location[]
}