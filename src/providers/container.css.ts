import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export const container = style({
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.backgroundColor
})
