import { style } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'
import { MAX_WIDTH } from '../constants'

export const container = style({
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.subtleBackground
})

export const content = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 2rem'
})
