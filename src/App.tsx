import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
        <>
            <h1>GitHub Customize</h1>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <div className='card'>
                <button onClick={() => {}}>Login with GitHub</button>
                <p className='read-the-docs'>
                    Login with GitHub in order to enter the application.
                </p>
            </div>
        </>
    )
}

export default App
