import styles from "./searchButton.module.css"

function SearchButton () {

    return (
        <div className={styles.searchButton__wrapper}>
            <button className={styles.searchButton} type="submit"> Search </button>
        </div>
    )
}

export default SearchButton