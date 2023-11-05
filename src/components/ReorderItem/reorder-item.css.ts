import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: vars.elementBackground,
    borderRadius: '4px',
    padding: '1rem',
    marginBottom: '1rem'
})

export const dragHandle = style({
    width: 36,
    display: 'flex',
    color: vars.textContrastHigh,
    backgroundColor: vars.elementBackgroundHovered,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab'
})

export const formField = style({
    width: '100%'
})

export const textarea = style({
    width: '100%',
    backgroundColor: vars.elementBackgroundHovered,
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem',
    fontSize: '1rem',
    color: vars.textContrastHigh,
    outline: 'none',
    verticalAlign: 'top',
    resize: 'none',
    margin: 0
})
