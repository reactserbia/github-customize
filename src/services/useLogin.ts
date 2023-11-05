import { axiosInstance } from '@/api'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate()

    const loginWithGitHub = () =>
        window.location.assign(
            'https://github.com/login/oauth/authorize?client_id=' +
                import.meta.env.VITE_GITHUB_CLIENT_ID +
                '&scope=user'
        )

    const exchangeGitHubCodeForAccessToken = async (code: string) => {
        try {
            const { data } = await axiosInstance.post(
                'github/get-access-token',
                { code }
            )

            if (data.response?.access_token) {
                console.log('GOT ACCESS TOKEN', data.response.access_token)
                localStorage.setItem('accessToken', data.response.access_token)
                navigate('/app')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return { loginWithGitHub, exchangeGitHubCodeForAccessToken }
}
