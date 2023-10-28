import { ReactNode, useEffect, useState } from 'react'

import { Login } from '../../routes/login'

export function LoginGuard({ children }: { children: ReactNode }) {
    const [githubAccessToken, setGithubAccessToken] = useState<string | null>(
        null
    )

    useEffect(() => {
        setGithubAccessToken(localStorage.getItem('gitHubAccessToken'))
    }, [])

    return githubAccessToken ? (
        <div>{children}</div>
    ) : (
        <Login setGithubAccessToken={setGithubAccessToken} />
    )
}
