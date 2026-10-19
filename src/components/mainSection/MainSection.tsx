import styles from "./mainSection.module.css"
import Search from "./search/Search"
import Display from "./display/Display"
import type { Location, WeatherResponse } from "../../types/weather"
import CurrentParams from "./currentParams/CurrentParams"

type MainSectionProps = {
    onSearch : (cityName : string) => void
    cityLocationValues : Location | null
    cityCurrentWeather : WeatherResponse | null
    loadingStatus : boolean
}

function MainSection ({onSearch, cityLocationValues, cityCurrentWeather, loadingStatus} : MainSectionProps) {

    return (
        <div className={styles.mainSection}>
            <Search onSearch={onSearch} loadingStatus={loadingStatus} />
            <Display 
            cityLocationValues={cityLocationValues} 
            cityCurrentWeather={cityCurrentWeather}
            loadingStatus={loadingStatus} />
            <CurrentParams 
            weatherParams={cityCurrentWeather}
            loadingStatus={loadingStatus} />
        </div>
    )
}

export default MainSection