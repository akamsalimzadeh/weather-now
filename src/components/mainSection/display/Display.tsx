import styles from "./display.module.css"
import type { Location, WeatherResponse } from "../../../types/weather"

//  Icons  //
import sunnyIcon from "./../../../assets/images/icon-sunny.webp"
import drizzleIcon from "./../../../assets/images/icon-drizzle.webp"
import fogIcon from "./../../../assets/images/icon-fog.webp"
import overcastIcon from "./../../../assets/images/icon-overcast.webp"
import partlyCloudyIcon from "./../../../assets/images/icon-partly-cloudy.webp"
import rainIcon from "./../../../assets/images/icon-rain.webp"
import snowIcon from "./../../../assets/images/icon-snow.webp"
import stormIcon from "./../../../assets/images/icon-storm.webp"
import DisplayLoading from "../../loading/displayLoading/DisplayLoading"


type DisplayProps = {
    cityLocationValues: Location | null
    cityCurrentWeather: WeatherResponse | null
    loadingStatus: boolean
}

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(date)
}

function Display({ cityLocationValues, cityCurrentWeather, loadingStatus }: DisplayProps) {

    if (!cityLocationValues || !cityCurrentWeather) {
        return null
    }


    const currentWeatherCodeIcons: Record<number, string> = {
        0: sunnyIcon,
        1: sunnyIcon,
        2: partlyCloudyIcon,
        3: overcastIcon,
        45: fogIcon,
        48: fogIcon,
        51: drizzleIcon,
        53: drizzleIcon,
        55: drizzleIcon,
        56: drizzleIcon,
        57: drizzleIcon,
        61: rainIcon,
        63: rainIcon,
        65: rainIcon,
        66: rainIcon,
        67: rainIcon,
        71: snowIcon,
        73: snowIcon,
        75: snowIcon,
        77: snowIcon,
        80: rainIcon,
        81: rainIcon,
        82: rainIcon,
        85: snowIcon,
        86: snowIcon,
        95: stormIcon,
        96: stormIcon,
        97: stormIcon,
        99: stormIcon,
    }
    const currentWeatherCodeDescriptions: Record<number, string> = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snowfall",
        73: "Moderate snowfall",
        75: "Heavy snowfall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        97: "Heavy thunderstorm",
        99: "Thunderstorm with heavy hail",
    }
    const currentWeatherIcon = currentWeatherCodeIcons[cityCurrentWeather.current.weather_code] ?? sunnyIcon
    const currentWeatherIconDescription = currentWeatherCodeDescriptions[cityCurrentWeather.current.weather_code] ?? "Unknown"

    return (
        <div className={styles.displayWrapper}>
            {loadingStatus ?
                <DisplayLoading/>
                :
                <div className={styles.display}>
                    <div className={styles.display__locationWrapper}>
                        <h2 className={styles.display__location}>
                            <span className={styles.display__city}> {cityLocationValues.name}, </span>
                            <span className={styles.display__country}> {cityLocationValues.country} </span>
                        </h2>
                        <span className={styles.display__date}>
                            {formatDate(cityCurrentWeather.current.time)}
                        </span>
                    </div>
                    <div className={styles.display__currentForecastWrapper}>
                        <img className={styles.display__currentClimateIcon} src={currentWeatherIcon} alt={currentWeatherIconDescription} />
                        <span className={styles.display__currentClimateTemp}>
                            {Math.round(cityCurrentWeather.current.temperature_2m)}
                            {cityCurrentWeather.current_units.temperature_2m.replace("°C", "°")}
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Display