import { Feature } from 'vx-front'
import { useState } from 'react'
import vixenLogo from '/vixen.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'

function Main() {
    const [count, setCount] = useState(0)
    const frames = Feature.Use.Frames()
    const firefox = Feature.Use.Task({ name: 'firefox' })

    return (
        <div className="main-wrapper">
            <div className="title">
                <h2>Feature: {Feature.featureName}</h2>
                <div>
                    <img
                        src={vixenLogo}
                        className="logo vixen"
                        alt="Vixen logo"
                        onClick={() => {
                            frames.open('docs')
                        }}
                    />
                    <img
                        src={viteLogo}
                        className="logo vite"
                        alt="Vite logo"
                        onClick={() => {
                            firefox.run(['https://vitejs.dev'])
                        }}
                    />
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                        onClick={() => {
                            firefox.run(['https://react.dev'])
                        }}
                    />
                </div>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    You have just created a new feature for Vixen Shell.
                    <br />
                    All you have to do now is implement the different contents
                    of this feature.
                    <br />
                    Edit <code>src/feature/Main/index.jsx</code> and save to
                    test HMR
                    <br />
                    <br />
                    Happy developing!
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vixen, Vite and React logos to learn more
            </p>
        </div>
    )
}

export default Main
