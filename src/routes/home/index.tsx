import { useNavigate } from 'react-router-dom'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function Home() {
    const navigate = useNavigate()

    const navigateToGitHubLogin = () => navigate('/app/login/github')

    return (
        <div>
            <p>
                To utilize the application, authentication with GitHub is a
                mandatory step.
            </p>
            <button onClick={navigateToGitHubLogin}>
                <GitHubLogoIcon />
                Login with GitHub
            </button>
        </div>
    )
}
