import styles from "./currentParams.module.css"
import CurrentParameter from "./currentParameter/CurrentParameter"
import type { WeatherResponse } from "../../../types/weather"

type CurrentParamsProps = {
    weatherParams : WeatherResponse | null
    loadingStatus : boolean
}

function CurrentParams ({weatherParams, loadingStatus}: CurrentParamsProps) {

    return (
        <div className={styles.currentParams}>
            <CurrentParameter title="Feels Like" 
            weatherParams={weatherParams}
            loadingStatus={loadingStatus} />
            <CurrentParameter title="Humidity" 
            weatherParams={weatherParams}
            loadingStatus={loadingStatus} />
            <CurrentParameter title="Wind" 
            weatherParams={weatherParams}
            loadingStatus={loadingStatus} />
            <CurrentParameter title="Precipitation" 
            weatherParams={weatherParams}
            loadingStatus={loadingStatus} />
        </div>
    )
}

export default CurrentParams