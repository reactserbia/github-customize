import { style } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'

export const container = style({
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.subtleBackground
})
