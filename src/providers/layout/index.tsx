import { ReactNode, useEffect, useState } from 'react'

import {
    container,
    header,
    headerContent,
    button,
    content,
    heading,
    subheading,
    description,
    octocats
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
            <div className={content}>
                <h1 className={heading}>GitHub Enhancer</h1>
                <h2 className={subheading}>Tailor Your GitHub Experience</h2>
                <p className={description}>
                    Elevate your GitHub experience with GitHub Enhancer, the
                    ultimate tool for personalizing your GitHub profile and
                    enhancing your coding projects.
                </p>
                <div className={octocats} />
                {children}
            </div>
        </div>
    )
}
