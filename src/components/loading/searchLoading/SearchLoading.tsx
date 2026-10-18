import styles from "./searchLoading.module.css"

function SearchLoading() {

    return (
        <div className={styles.searchLoading}>
            <div className={styles.sk__fading__circle}>
                <div className={`${styles.sk__circle1} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle2} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle3} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle4} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle5} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle6} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle7} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle8} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle9} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle10} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle11} ${styles.sk__circle}`}></div>
                <div className={`${styles.sk__circle12} ${styles.sk__circle}`}></div>
            </div>
            <span className={styles.searchLoading__text}>
                Search in progress
            </span>
        </div>
    )
}

export default SearchLoading