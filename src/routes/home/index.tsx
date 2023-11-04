import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { loggedInContainer } from './home.css'

type LoggedInProps = {
    accessToken: string
    platform: 'github' | 'linkedin'
}

const LoggedIn = ({ accessToken, platform }: LoggedInProps) => (
    <div className={loggedInContainer}>
        <h6>
            Logged in with {platform === 'github' ? 'GitHub' : 'LinkedIn'}: ✅
        </h6>
        <p>{accessToken}</p>
    </div>
)

export function Home() {
    const [gitHubAccessToken, setGithubAccessToken] = useState<string | null>()

    useEffect(() => {
        setGithubAccessToken(localStorage.getItem('gitHubAccessToken'))
    }, [])
    const navigate = useNavigate()

    const navigateToGitHubLogin = () => navigate('/app/login/github')

    return (
        <div>
            {gitHubAccessToken ? (
                <LoggedIn accessToken={gitHubAccessToken} platform='github' />
            ) : (
                <button onClick={navigateToGitHubLogin}>
                    <GitHubLogoIcon />
                    Login with GitHub
                </button>
            )}
        </div>
    )
}
