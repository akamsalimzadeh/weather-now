import styles from "./apiError.module.css"
import iconError from "./../../../assets/images/icon-error.svg"
import iconRetry from "./../../../assets/images/icon-retry.svg"

type ApiErrorProps = {
    onRetry: () => void
}

function ApiError ({onRetry}: ApiErrorProps) {

    return (
        <div className={styles.apiError}>
            <img className={styles.apiError__icon} src={iconError} alt="error-icon" />
            <h1 className={styles.apiError__title}>
                Somthing went wrong
            </h1>
            <p className={styles.apiError__description}>
                We couldn't connect to the server (API error). Please try again in a few moments.
            </p>
            <button className={styles.apiError__btn} onClick={onRetry}>
                <img className={styles.apiError__btnIcon} src={iconRetry} alt="retry-icon" />
                Retry
            </button>
        </div>
    )
}

export default ApiError