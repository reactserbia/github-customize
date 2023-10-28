import { useState, useEffect } from 'react'
import axios from 'axios'

export function Home() {
    const [userData, setUserData] = useState(null)
    const [code, setCode] = useState('')
    const [linkedInAccessToken, setLinkedInAccessToken] = useState('')

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')

        setCode(codeParam || '')
    }, [])

    const getUserData = async () => {
        const githubAccessToken = localStorage.getItem('gitHubAccessToken')

        try {
            const { data } = await axios.post(
                'https://api.github.com/user',
                {},
                {
                    headers: {
                        Accept: 'application/vnd.github+json',
                        Authorization: `Bearer ${githubAccessToken}`,
                        'Content-Type': 'application/json',
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                }
            )

            setUserData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const linkedInSSO = () => {
        window.location.assign(
            `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
                import.meta.env.VITE_LINKEDIN_CLIENT_ID
            }&redirect_uri=http://localhost:5173/&scope=profile%20email%20w_member_social`
        )
    }

    const getLinkedInAccessToken = async () => {
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

            console.log(data)

            if (data.response?.access_token)
                setLinkedInAccessToken(data.response.access_token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {(() => {
                if (linkedInAccessToken) <div>{linkedInAccessToken}</div>
                if (code)
                    return (
                        <button onClick={getLinkedInAccessToken}>
                            Get Access Token
                        </button>
                    )
                if (userData)
                    return (
                        <pre style={{ textAlign: 'left' }}>
                            {JSON.stringify(userData, null, 2)}
                        </pre>
                    )

                return <button onClick={linkedInSSO}>LinkedIn SSO</button>
                return <button onClick={getUserData}>Get User Data</button>
            })()}
        </div>
    )
}
