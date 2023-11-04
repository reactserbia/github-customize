import { useNavigate } from 'react-router-dom'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import {
    heading,
    subheading,
    description,
    main,
    octocats,
    mainContent
} from './home.css'

export function Home() {
    const navigate = useNavigate()

    const navigateToGitHubLogin = () => navigate('/app/login/github')

    return (
        <>
            <h1 className={heading}>GitHub Enhancer</h1>
            <h2 className={subheading}>Tailor Your GitHub Experience</h2>
            <p className={description}>
                Elevate your GitHub experience and presence with GitHub
                Enhancer, the ultimate all-in-one solution tool for
                personalizing your GitHub profile.
            </p>
            <p className={description}>
                Stand out in the developer community by customizing your
                profile, create eye-catching READMEs, and enjoy a more
                intuitive, productive GitHub journey.
            </p>
            <main className={main}>
                <div className={octocats} />
                <div className={mainContent}>
                    <p>
                        To utilize the application, authentication with GitHub
                        is a mandatory step.
                    </p>
                    <button onClick={navigateToGitHubLogin}>
                        <GitHubLogoIcon />
                        Login with GitHub
                    </button>
                </div>
            </main>
        </>
    )
}
