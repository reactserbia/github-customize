import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

export const loggedInContainer = style({
    padding: '1rem',
    backgroundColor: vars.elementBackground,
    borderRadius: 8,
    marginBottom: '1rem'
})
