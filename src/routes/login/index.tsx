import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './login.css'

export function Login() {
    const [code, setCode] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')

        setCode(codeParam || '')
    }, [])

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

            if (data.response?.access_token) {
                // save token
                localStorage.setItem(
                    'gitHubAccessToken',
                    data.response.access_token
                )
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button onClick={getAccessToken}>Get Access Token</button>
        </div>
    )
}
