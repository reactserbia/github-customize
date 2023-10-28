import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

type LoginProps = {
    setGithubAccessToken: (accessToken: string) => void
}

export function Login({ setGithubAccessToken }: LoginProps) {
    const [code, setCode] = useState('')

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')

        setCode(codeParam || '')
    }, [])

    const loginWithGitHub = () => {
        window.location.assign(
            'https://github.com/login/oauth/authorize?client_id=' +
                import.meta.env.VITE_GITHUB_CLIENT_ID +
                '&scope=user'
        )
    }

    const getAccessToken = async () => {
        try {
            const { data } = await axios.post(
                'http://localhost:3000/github/get-access-token',
                {
                    code
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (data.response?.access_token)
                setGithubAccessToken(data.response.access_token)
            localStorage.setItem(
                'gitHubAccessToken',
                data.response.access_token
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {(() => {
                if (code)
                    return (
                        <button onClick={getAccessToken}>
                            Get Access Token
                        </button>
                    )

                return (
                    <>
                        <h1>GitHub Enhancer</h1>
                        <p>by React Serbia</p>
                        <div>
                            <a href='https://vitejs.dev' target='_blank'>
                                <img
                                    src={viteLogo}
                                    className='logo'
                                    alt='Vite logo'
                                />
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
                            <button onClick={loginWithGitHub}>
                                Login with GitHub
                            </button>
                            <p className='read-the-docs'>
                                Login with GitHub in order to enter the
                                application.
                            </p>
                        </div>
                    </>
                )
            })()}
        </div>
    )
}