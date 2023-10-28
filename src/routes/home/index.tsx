import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const [linkedInAccessToken, setLinkedInAccessToken] = useState<
        string | null
    >()

    useEffect(() => {
        setGithubAccessToken(localStorage.getItem('gitHubAccessToken'))
        setLinkedInAccessToken(localStorage.getItem('linkedInAccessToken'))
    }, [])
    const navigate = useNavigate()

    const navigateToGitHubLogin = () => navigate('/app/login/github')
    const navigateToLinkedInLogin = () => navigate('/app/login/linkedin')

    return (
        <div>
            {gitHubAccessToken ? (
                <LoggedIn accessToken={gitHubAccessToken} platform='github' />
            ) : (
                <button onClick={navigateToGitHubLogin}>
                    Login with GitHub
                </button>
            )}
            {linkedInAccessToken ? (
                <LoggedIn
                    accessToken={linkedInAccessToken}
                    platform='linkedin'
                />
            ) : (
                <button onClick={navigateToLinkedInLogin}>
                    Login with LinkedIn
                </button>
            )}
        </div>
    )
}
