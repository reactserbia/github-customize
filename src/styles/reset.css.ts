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
    backgroundColor: vars.appBackground
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

globalStyle('button', {
    padding: '0.3rem 1rem',
    border: `1px solid ${vars.bordersInteractive}`,
    borderRadius: 4,
    fontSize: '1rem',
    backgroundColor: vars.elementBackground,
    cursor: 'pointer'
})

globalStyle('button:hover', {
    border: `1px solid ${vars.bordersInteractiveFocused}`,
    backgroundColor: vars.elementBackgroundHovered
})

globalStyle('button:active', {
    border: `1px solid ${vars.bordersInteractiveFocused}`,
    backgroundColor: vars.elementBackgroundActive
})