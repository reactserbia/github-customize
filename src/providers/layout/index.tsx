import { ReactNode, useEffect, useState } from 'react'

import {
    container,
    header,
    headerContent,
    button,
    banner,
    content,
    heading,
    subheading,
    description,
    main,
    octocats,
    mainContent
} from './layout.css'
import { light, dark } from '../../styles/vars.css'

export const Layout = ({ children }: { children: ReactNode }) => {
    const [themeIsLight, setThemeIsLight] = useState(false)

    useEffect(() => {
        document.querySelector('html')!.className = themeIsLight ? light : dark
    }, [themeIsLight])

    const toggleTheme = () => setThemeIsLight(theme => !theme)

    return (
        <div className={container}>
            <header className={header}>
                <div className={headerContent}>
                    <button className={button} onClick={toggleTheme}>
                        {`${themeIsLight ? '🌚' : '🌞'}`}
                    </button>
                </div>
            </header>
            <div className={banner} />
            <div className={content}>
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
                    intuitive, productive GitHub journey. Elevate your GitHub
                    presence with GitHub Enhancer.
                </p>
                <main className={main}>
                    <div className={octocats} />
                    <div className={mainContent}>{children}</div>
                </main>
            </div>
        </div>
    )
}
