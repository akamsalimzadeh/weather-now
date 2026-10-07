import SearchInput from "./searchInput/SearchInput"
import SearchButton from "./searchButton/SearchButton"
import { useState } from "react"

type SearchProps = {
    onSearch : (cityName : string) => void
}

function Search ({onSearch} : SearchProps) {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cityName = inputValue.trim()
        
        onSearch(cityName)
    }

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput value={inputValue} onChange={setInputValue}/>
            <SearchButton/>
        </form>
    )
}

export default Search