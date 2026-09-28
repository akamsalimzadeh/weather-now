import searchIcon from "./../../../../assets/images/icon-search.svg"
import styles from "./searchInput.module.css"

function SearchInput () {
    
    return (
        <div className={styles.searchInput}>
            <label className={styles.searchInput__label} htmlFor="searchInput"> How's the sky looking today? </label>
            <div className={styles.searchInput__wrapper}>
                <img className={styles.searchInput__icon} src={searchIcon} />
                <input className={styles.searchInput__box} type="text" name="place" id="searchInput" placeholder="Search for a place..." />
            </div>
        </div>
    )
}

export default SearchInput