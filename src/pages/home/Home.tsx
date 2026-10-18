import { useState } from "react"
import { searchCity, getWeather } from "../../services/weatherApi"
import type { Location, WeatherResponse } from "../../types/weather"
import Header from "../../components/header/Header"
import MainSection from "../../components/mainSection/MainSection"


function Home() {

    const [locationInfo, setLocationInfo] = useState<Location | null>(null)
    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleSearch(cityName: string) {

        setIsLoading(true)
        try {
            const locationData = await searchCity(cityName)
            const getLocationData = locationData.results?.[0]

            setLocationInfo(getLocationData)

            const weatherData = await getWeather(
                getLocationData.latitude,
                getLocationData.longitude
            )

            setWeather(weatherData)
        }catch(error) {
            console.log(error);
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
            loadingStatus={isLoading}/>
        </>
    )
}

export default Home