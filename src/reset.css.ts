import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('*', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
})

globalStyle('body', {
    minWidth: '320px',
    minHeight: '100vh',
    backgroundColor: vars.backgroundColor
})

globalStyle(':root', {
    lineHeight: 1.5,
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%'
})
