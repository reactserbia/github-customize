import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'
import { MAX_WIDTH } from '../../constants'

export const container = style({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    paddingTop: 120
})

export const header = style({
    height: 50,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(9px)',
    borderBottom: `1px solid ${vars.elementBackgroundHovered}`
})

export const headerContent = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
})

export const button = style({
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    borderRadius: 100
})

export const content = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '0 auto'
})

export const heading = style({
    lineHeight: 1,
    fontSize: '3rem',
    fontWeight: 700,
    color: vars.textContrastHigh,
    margin: 0
})

export const subheading = style({
    lineHeight: 1,
    fontSize: '1.5rem',
    color: vars.textContrastHigh,
    marginBottom: '1rem'
})

export const description = style({
    lineHeight: 1.2,
    fontSize: '1rem',
    color: vars.textContrastLow,
    marginBottom: '1rem'
})

export const main = style({
    backgroundColor: vars.elementBackground,
    borderRadius: 10
})

export const octocats = style({
    width: 'auto',
    minHeight: 300,
    backgroundImage: `url('/images/octocats.jpeg')`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px 10px 0 0',
    marginTop: '4rem'
})

export const mainContent = style({
    padding: '1rem'
})
