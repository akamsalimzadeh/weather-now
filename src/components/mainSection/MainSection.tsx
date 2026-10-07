import styles from "./mainSection.module.css"
import Search from "./search/Search"
import Display from "./display/Display"
import type { Location, WeatherResponse } from "../../types/weather"

type MainSectionProps = {
    onSearch : (cityName : string) => void
    cityLocationValues : Location | null
    cityCurrentWeather : WeatherResponse | null
}

function MainSection ({onSearch, cityLocationValues, cityCurrentWeather} : MainSectionProps) {

    return (
        <div className={styles.mainSection}>
            <Search onSearch={onSearch}/>
            <Display cityLocationValues={cityLocationValues} cityCurrentWeather={cityCurrentWeather}/>
        </div>
    )
}

export default MainSection