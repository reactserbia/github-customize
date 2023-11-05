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

    // background: '-webkit-linear-gradient(300deg, #93f5ec 20%, #a77bf3 70%)',
    // WebkitBackgroundClip: 'text',
    // backgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
    // WebkitBoxDecorationBreak: 'clone'
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
    flexWrap: 'wrap',
    gap: '1rem',
    margin: '4rem 0 1rem'
})

export const reorderItem = style({
    width: '100%',
    backgroundColor: vars.elementBackground,
    borderRadius: '4px',
    padding: '1rem',
    marginBottom: '1rem'
})
