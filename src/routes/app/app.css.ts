import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%'
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
    fontWeight: 400,
    color: vars.textContrastHigh,
    marginBottom: '2rem'
})

export const buttonsContainer = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
})

export const reorderItem = style({
    width: '100%',
    backgroundColor: vars.elementBackground,
    borderRadius: '4px',
    padding: '1rem',
    marginBottom: '1rem'
})
