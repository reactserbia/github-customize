import { useEffect } from 'react'

import { useLogin } from '@/services'

import './login.css'

export function Login() {
    const { exchangeGitHubCodeForAccessToken } = useLogin()

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')

        if (codeParam) {
            exchangeGitHubCodeForAccessToken(codeParam)
        }
    }, [exchangeGitHubCodeForAccessToken])

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}
