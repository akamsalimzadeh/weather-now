import styles from "./currentParams.module.css"
import CurrentParameter from "./currentParameter/CurrentParameter"
import type { WeatherResponse } from "../../../types/weather"

type CurrentParamsProps = {
    weatherParams : WeatherResponse | null
}

function CurrentParams ({weatherParams}: CurrentParamsProps) {

    return (
        <div className={styles.currentParams}>
            <CurrentParameter title="Feels Like" weatherParams={weatherParams} />
            <CurrentParameter title="Humidity" weatherParams={weatherParams} />
            <CurrentParameter title="Wind" weatherParams={weatherParams} />
            <CurrentParameter title="Precipitation" weatherParams={weatherParams} />
        </div>
    )
}

export default CurrentParams