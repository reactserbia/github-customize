import './login.css'
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
                    <div className='card'>
                        <button onClick={loginWithGitHub}>
                            Login with GitHub
                        </button>
                    </div>
                )
            })()}
        </div>
    )
}
