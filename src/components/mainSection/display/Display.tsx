import styles from "./display.module.css"
import type { Location, WeatherResponse } from "../../../types/weather"
import DisplayLoading from "../../loading/displayLoading/DisplayLoading"
import { weatherCodeHandle } from "../../../utils/weatherCode"

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
    
    const {icon, description} = weatherCodeHandle(cityCurrentWeather.current.weather_code)

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
                        <img className={styles.display__currentClimateIcon} src={icon} alt={description} />
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