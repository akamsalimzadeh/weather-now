import searchIcon from "./../../../../assets/images/icon-search.svg"
import styles from "./searchInput.module.css"

type SearchInputProps = {
    value: string
    onChange: (value: string) => void
}

function SearchInput({ value, onChange }: SearchInputProps) {

    return (
        <div className={styles.searchInput}>
            <label className={styles.searchInput__label} htmlFor="searchInput"> How's the sky looking today? </label>
            <div className={styles.searchInput__wrapper}>

                {!value && (
                    <img className={styles.searchInput__icon} src={searchIcon} alt="" />
                )}
                <input className={styles.searchInput__box}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                    name="city"
                    id="searchInput"
                    placeholder="Search for a place..." />
            </div>
        </div>
    )
}

export default SearchInput