import styles from "./search.module.css"
import SearchInput from "./searchInput/SearchInput"
import SearchButton from "./searchButton/SearchButton"
import { useState } from "react"
import SearchLoading from "../../loading/searchLoading/SearchLoading"

type SearchProps = {
    onSearch: (cityName: string) => void
    loadingStatus: boolean
    error: "result-error" | "api-error" | null
}

function Search({ onSearch, loadingStatus, error }: SearchProps) {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cityName = inputValue.trim()

        onSearch(cityName)
    }

    return (
        <div className={styles.search}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <SearchInput value={inputValue} onChange={setInputValue} />
                <SearchButton />
            </form>
            {loadingStatus && <SearchLoading />}
            {!loadingStatus && error === "result-error" && (
                <span>No search result found!</span>
            )}
        </div>

    )
}

export default Search