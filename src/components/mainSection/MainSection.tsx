import styles from "./mainSection.module.css"
import Search from "./search/Search"
import Display from "./display/Display"

function MainSection () {

    return (
        <div className={styles.mainSection}>
            <Search/>
            <Display/>
        </div>
    )
}

export default MainSection