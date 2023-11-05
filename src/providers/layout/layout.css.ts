import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'
import { MAX_WIDTH } from '../../constants'

export const container = style({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    padding: '120px 0 120px',
    overflow: 'hidden'
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
    padding: '0 2rem',
    backgroundColor: vars.elementBackground,
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(9px)'
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

export const banner = style({
    width: '100%',
    height: 600,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundImage: `linear-gradient(180deg, ${vars.appBackground} 0%, ${vars.elementBackground} 100%)`
})

export const content = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    padding: '0 2rem',
    margin: '0 auto'
})
