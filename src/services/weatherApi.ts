import type { WeatherResponse, GeocodingResponse } from "../types/weather"


export async function searchCity(city: string): Promise<GeocodingResponse> {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`)

    if (!response.ok) {
        throw new Error("Failed search city")
    }

    const cityNameData : GeocodingResponse = await response.json()

    return cityNameData
}

export async function getWeather(
    latitude: number,
    longitude: number
): Promise<WeatherResponse> {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&timezone=auto`)

    if (!response.ok) {
        throw new Error("Failed to get weather forecast")
    }

    const cityWeather : WeatherResponse = await response.json()

    return cityWeather
}