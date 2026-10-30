import styles from "./forecastDay.module.css"

type ForecastDayProps = {
    day: string
    icon: string
    description: string
    maxTemp: number
    minTemp: number
    maxUnit: string
    minUnit: string
    loadingStatus: boolean
}

function ForecastDay({ 
    day, 
    icon, 
    description, 
    maxTemp, 
    minTemp, 
    maxUnit, 
    minUnit, 
    loadingStatus }: ForecastDayProps) {

    return (
        <>
            {loadingStatus ? <div className={styles.forecastDay}></div>
                :
                <div className={styles.forecastDay}>
                    <h5 className={styles.forecastDay__dayName}> {day} </h5>
                    <img className={styles.forecastDay__icon} src={icon} alt={description} />
                    <div className={styles.forecastDay__tempsWrapper}>
                        <span className={styles.forecastDay__maxTemp}> {Math.round(maxTemp)} {maxUnit.replace("°C", "°")} </span>
                        <span className={styles.forecastDay__minTemp}> {Math.round(minTemp)} {minUnit.replace("°C", "°")} </span>
                    </div>
                </div>
            }
        </>
    )
}

export default ForecastDay