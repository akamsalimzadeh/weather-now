import styles from "./displayLoading.module.css"

function DisplayLoading() {

    return (
        <div className={styles.displayLoadingWrapper}>
            <div className={styles.loader}>
                <span className={styles.loader__circle}></span>
                <span className={styles.loader__circle}></span>
                <span className={styles.loader__circle}></span>
            </div>
            <span className={styles.displayLoading__text}> Loading... </span>
        </div>
    )
}

export default DisplayLoading