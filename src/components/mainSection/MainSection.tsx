import styles from "./mainSection.module.css"
import Search from "./search/Search"
import Display from "./display/Display"
import type { Location, WeatherResponse } from "../../types/weather"
import CurrentParams from "./currentParams/CurrentParams"
import ApiError from "./apiError/ApiError"

type MainSectionProps = {
    onSearch: (cityName: string) => void
    cityLocationValues: Location | null
    cityCurrentWeather: WeatherResponse | null
    loadingStatus: boolean
    error: "no-result" | "api-error" | null
    onRetry: () => void
}

function MainSection({
    onSearch,
    cityLocationValues,
    cityCurrentWeather,
    loadingStatus,
    error,
    onRetry }: MainSectionProps) {

    if (error === "api-error") {
        return (
            <div className={styles.mainSection}>
                <ApiError onRetry={onRetry} />
            </div>
        )
    }

    return (
        <div className={styles.mainSection}>
            <Search
                onSearch={onSearch}
                loadingStatus={loadingStatus}
                error={error} />
            {error !== "no-result" && (
                <>
                    <Display
                        cityLocationValues={cityLocationValues}
                        cityCurrentWeather={cityCurrentWeather}
                        loadingStatus={loadingStatus} />
                    {cityCurrentWeather && (
                        <CurrentParams
                            weatherParams={cityCurrentWeather}
                            loadingStatus={loadingStatus} />
                    )}
                </>
            )}
        </div>
    )
}

export default MainSection