import styles from "./currentParameter.module.css"
import type { WeatherResponse } from "../../../../types/weather"

type CurrentParameterProps = {
    title: string
    weatherParams: WeatherResponse | null
    loadingStatus: boolean
}

function CurrentParameter({ weatherParams, title, loadingStatus }: CurrentParameterProps) {

    let value = 0
    let unit = ""
    if (title === "Feels Like") {
        value = weatherParams?.current.apparent_temperature ?? 0
        unit = weatherParams?.current_units.apparent_temperature.replace("°C", "°") ?? ""
    }
    if (title === "Humidity") {
        value = weatherParams?.current.relative_humidity_2m ?? 0
        unit = weatherParams?.current_units.relative_humidity_2m ?? ""
    }
    if (title === "Wind") {
        value = weatherParams?.current.wind_speed_10m ?? 0
        unit = weatherParams?.current_units.wind_speed_10m ?? ""
    }
    if (title === "Precipitation") {
        value = weatherParams?.current.precipitation ?? 0
        unit = weatherParams?.current_units.precipitation ?? ""
    }

    return (
        <div className={styles.weatherParameter}>
            <h5 className={styles.weatherParameter__title}>
                {title}
            </h5>
            <div className={styles.weatherParameter__resultWrapper}>
                {loadingStatus ? "_" :
                    <div>
                        <span className={styles.weatherParameter__value}>
                            {Math.round(value)}
                        </span>
                        <span>
                            {unit}
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default CurrentParameter