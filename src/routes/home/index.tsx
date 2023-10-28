import { useState } from 'react'
import axios from 'axios'

export function Home() {
    const [userData, setUserData] = useState(null)
    const [code, linkedInCode] = useState('')

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

    return (
        <div>
            {(() => {
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
