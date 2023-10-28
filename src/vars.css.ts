import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
    backgroundColor: null,
    color: null
})

export const light = createTheme(vars, {
    backgroundColor: '#ffffff',
    color: '#213547'
})

export const dark = createTheme(vars, {
    backgroundColor: '#242424',
    color: 'rgba(255, 255, 255, 0.87)'
})
