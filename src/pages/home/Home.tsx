import { useState } from "react"
import { searchCity, getWeather } from "../../services/weatherApi"
import type { Location, WeatherResponse } from "../../types/weather"
import Header from "../../components/header/Header"
import MainSection from "../../components/mainSection/MainSection"


function Home () {

    const [locationInfo, setLocationInfo] = useState<Location | null>(null)
    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    
    async function handleSearch (cityName : string) {

        const locationData = await searchCity(cityName)
        const getLocationData = locationData.results?.[0]
        
        setLocationInfo(getLocationData)

        const weatherData = await getWeather(
            getLocationData.latitude,
            getLocationData.longitude
        )
        
        setWeather(weatherData)
    }
    
    return (
        <>
            <Header/>
            <MainSection onSearch={handleSearch} cityLocationValues={locationInfo} cityCurrentWeather={weather}/>
        </>
    )
}

export default Home