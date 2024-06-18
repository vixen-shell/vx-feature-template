import styles from './index.module.css'
import { Feature } from 'vx-front'

export default function Main() {
    return (
        <div className={styles.main_wrapper}>
            <h1>Feature '{Feature.featureName}'</h1>
            <p>
                You have just created a new feature for Vixen Shell.
                <br />
                All you have to do now is implement the different contents of
                this feature.
                <br />
                Happy developing!
            </p>
        </div>
    )
}
