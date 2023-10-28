import { ReactNode, useEffect, useState } from 'react'

import { GitHubLogin } from '../../routes/github-login'

export function LoginGuard({ children }: { children: ReactNode }) {
    const [githubAccessToken, setGithubAccessToken] = useState<string | null>(
        null
    )

    useEffect(() => {
        setGithubAccessToken(localStorage.getItem('gitHubAccessToken'))
    }, [])

    return githubAccessToken ? <div>{children}</div> : <GitHubLogin />
}
