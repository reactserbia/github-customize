import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%'
})

export const reorderItem = style({
    width: '100%',
    backgroundColor: vars.elementBackground,
    borderRadius: '4px',
    padding: '1rem',
    marginBottom: '1rem'
})
