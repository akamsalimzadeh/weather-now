import { useState } from "react"
import { searchCity, getWeather } from "../../services/weatherApi"
import type { Location, WeatherResponse } from "../../types/weather"
import Header from "../../components/header/Header"
import MainSection from "../../components/mainSection/MainSection"


function Home() {

    const [locationInfo, setLocationInfo] = useState<Location | null>(null)
    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<"no-result" | "api-error" | null>(null)

    async function handleSearch(cityName: string) {

        setIsLoading(true)
        setError(null)
        try {
            const locationData = await searchCity(cityName)
            const getLocationData = locationData.results?.[0]

            if (!getLocationData) {
                setError("no-result")
                return
            }

            setLocationInfo(getLocationData)

            const weatherData = await getWeather(
                getLocationData.latitude,
                getLocationData.longitude
            )

            setWeather(weatherData)
        }catch(error) {
            console.log(error);
            setError("api-error")
        }finally {
            setIsLoading(false)
        }
        
    }

    return (
        <>
            <Header />
            <MainSection 
            onSearch={handleSearch} 
            cityLocationValues={locationInfo} 
            cityCurrentWeather={weather}
            loadingStatus={isLoading}
            error={error}/>
        </>
    )
}

export default Home