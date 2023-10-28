import { ReactNode, useEffect, useState } from 'react'

import { container, content, button } from './container.css'
import { light, dark } from '../styles/vars.css'

export const Layout = ({ children }: { children: ReactNode }) => {
    const [themeIsLight, setThemeIsLight] = useState(true)

    useEffect(() => {
        document.querySelector('html')!.className = themeIsLight ? light : dark
    }, [themeIsLight])

    const toggleTheme = () => setThemeIsLight(theme => !theme)

    return (
        <div>
            <div className={container}>
                <div className={content}>
                    <button className={button} onClick={toggleTheme}>
                        {`${themeIsLight ? '🌚' : '🌞'}`}
                    </button>
                </div>
            </div>
            {children}
        </div>
    )
}
