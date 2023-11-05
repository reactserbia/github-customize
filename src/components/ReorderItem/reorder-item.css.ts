import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: vars.elementBackgroundHovered,
    borderRadius: 8,
    padding: '1rem',
    marginBottom: '1rem'
})

export const dragHandle = style({
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    color: vars.textContrastHigh,
    backgroundColor: vars.elementBackground,
    cursor: 'grab'
})

export const formField = style({
    width: '100%'
})

export const textarea = style({
    width: '100%',
    backgroundColor: vars.subtleBackground,
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
