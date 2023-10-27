import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const loginWithGitHub = () => {
        window.location.assign(
            'https://github.com/login/oauth/authorize?client_id=' +
                import.meta.env.VITE_GITHUB_CLIENT_ID +
                '&scope=user'
        )
    }

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
                <button onClick={loginWithGitHub}>Login with GitHub</button>
                <p className='read-the-docs'>
                    Login with GitHub in order to enter the application.
                </p>
            </div>
        </>
    )
}

export default App
