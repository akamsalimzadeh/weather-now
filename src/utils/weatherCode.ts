//  Icons  //
import sunnyIcon from "./../assets/images/icon-sunny.webp"
import drizzleIcon from "./../assets/images/icon-drizzle.webp"
import fogIcon from "./../assets/images/icon-fog.webp"
import overcastIcon from "./../assets/images/icon-overcast.webp"
import partlyCloudyIcon from "./../assets/images/icon-partly-cloudy.webp"
import rainIcon from "./../assets/images/icon-rain.webp"
import snowIcon from "./../assets/images/icon-snow.webp"
import stormIcon from "./../assets/images/icon-storm.webp"

type weatherCodeInfo = {
    icon: string
    description: string
}
const weatherCodeItems: Record<number, weatherCodeInfo> = {
    0: {icon: sunnyIcon, description: "Clear sky"},
    1: {icon: sunnyIcon, description: "Mainly clear"},
    2: {icon: partlyCloudyIcon, description: "Partly cloudy"},
    3: {icon: overcastIcon, description: "Overcast"},
    45: {icon: fogIcon, description: "Fog"},
    48: {icon: fogIcon, description: "Depositing rime fog"},
    51: {icon: drizzleIcon, description: "Light drizzle"},
    53: {icon: drizzleIcon, description: "Moderate drizzle"},
    55: {icon: drizzleIcon, description: "Dense drizzle"},
    56: {icon: drizzleIcon, description: "Light freezing drizzle"},
    57: {icon: drizzleIcon, description: "Dense freezing drizzle"},
    61: {icon: rainIcon, description: "Slight rain"},
    63: {icon: rainIcon, description: "Moderate rain"},
    65: {icon: rainIcon, description: "Heavy rain"},
    66: {icon: rainIcon, description: "Light freezing rain"},
    67: {icon: rainIcon, description: "Heavy freezing rain"},
    71: {icon: snowIcon, description: "Slight snowfall"},
    73: {icon: snowIcon, description: "Moderate snowfall"},
    75: {icon: snowIcon, description: "Heavy snowfall"},
    77: {icon: snowIcon, description: "Snow grains"},
    80: {icon: rainIcon, description: "Slight rain showers"},
    81: {icon: rainIcon, description: "Moderate rain showers"},
    82: {icon: rainIcon, description: "Violent rain showers"},
    85: {icon: snowIcon, description: "Slight snow showers"},
    86: {icon: snowIcon, description: "Heavy snow showers"},
    95: {icon: stormIcon, description: "Thunderstorm"},
    96: {icon: stormIcon, description: "Thunderstorm with slight hail"},
    97: {icon: stormIcon, description: "Heavy thunderstorm"},
    99: {icon: stormIcon, description: "Thunderstorm with heavy hail"}
}

export const weatherCodeHandle = (code: number) : weatherCodeInfo => {
    return weatherCodeItems[code] ?? {icon: sunnyIcon, description: "Unknown"}
}