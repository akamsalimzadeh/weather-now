import styles from "./display.module.css"
import sunnyIcon from "./../../../assets/images/icon-sunny.webp"

function Display () {

    return (
        <div className={styles.display}>
            <div className={styles.display__locationWrapper}>
                <h2 className={styles.display__location}>
                    <span className={styles.display__city}>Berlin,</span>
                    <span className={styles.display__country}>Germany</span>
                </h2>
                <span className={styles.display__date}>Tuesday, Aug 5, 2026</span>
            </div>
            <div className={styles.display__currentForecastWrapper}>
                <img className={styles.display__currentClimateIcon} src={sunnyIcon} alt="icon-sunny"/>
                <span className={styles.display__currentClimateTemp}> 20° </span>
            </div>
        </div>
    )
}

export default Display