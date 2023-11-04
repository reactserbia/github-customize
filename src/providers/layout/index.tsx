import { ReactNode, useEffect, useState } from 'react'

import { container, header, headerContent, button, content } from './layout.css'
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
                {/* <img src='/images/octocats.jpeg' /> */}
                <h1>GitHub Enhancer</h1>
                <p style={{ fontStyle: 'italic', marginBottom: 40 }}>
                    by React Serbia
                </p>
                {children}
            </div>
        </div>
    )
}
