import { ui, Feature } from 'vx-front'

export default function Main() {
    return (
        <ui.Frame gap={64}>
            <h1>Feature '{Feature.featureName}'</h1>
            <p>
                You have just created a new feature for Vixen Shell.
                <br />
                All you have to do now is implement the different contents of
                this feature.
                <br />
                Happy developing!
            </p>
        </ui.Frame>
    )
}
