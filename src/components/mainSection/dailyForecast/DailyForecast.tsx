import styles from "./dailyForecast.module.css"
import ForecastDay from "./forecastDay/ForecastDay"
import type { DailyUnits, DailyWeather } from "../../../types/weather"
import { weatherCodeHandle } from "../../../utils/weatherCode"

type DailyForecastProps = {
    dailyWeather: DailyWeather
    dailyUnits: DailyUnits
    loadingStatus: boolean
}

const formatDate = (date: string) => {
    const getDate = new Date(date)
    return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        timeZone: "UTC"
    }).format(getDate)
}

function DailyForecast({ dailyWeather, dailyUnits, loadingStatus }: DailyForecastProps) {

    return (
        <div className={styles.dailyForecast}>
            {dailyWeather?.time.map((time, index) => {
                const { icon, description } = weatherCodeHandle(dailyWeather.weather_code[index])
                return (
                    <ForecastDay
                    key={time}
                    day={formatDate(time)}
                    icon={icon}
                    description={description}
                    maxTemp={dailyWeather.temperature_2m_max[index]}
                    minTemp={dailyWeather.temperature_2m_min[index]}
                    maxUnit={dailyUnits.temperature_2m_max}
                    minUnit={dailyUnits.temperature_2m_min}
                    loadingStatus={loadingStatus} />
                )
            })}
        </div>
    )
}

export default DailyForecast