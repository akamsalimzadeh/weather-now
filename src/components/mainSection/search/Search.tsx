import styles from "./search.module.css"
import SearchInput from "./searchInput/SearchInput"
import SearchButton from "./searchButton/SearchButton"
import { useState } from "react"
import SearchLoading from "../../loading/searchLoading/SearchLoading"

type SearchProps = {
    onSearch: (cityName: string) => void
    loadingStatus: boolean
    error: "no-result" | "api-error" | null
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
            <form className={styles.search__form} onSubmit={handleSubmit}>
                <SearchInput value={inputValue} onChange={setInputValue} />
                <SearchButton />
            </form>
            {loadingStatus && <SearchLoading />}
            {error === "no-result" && (
                <div className={styles.search__noResultMessageWrapper}>
                    <p className={styles.search__noResultMessage}>No search result found!</p>
                </div>
            )}
        </div>

    )
}

export default Search