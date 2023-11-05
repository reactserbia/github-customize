import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'

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

export const description = style({
    // width: '90%',
    lineHeight: 1.2,
    fontSize: '1rem',
    color: vars.textContrastLow,
    marginBottom: '1rem'
})

export const main = style({
    backgroundColor: vars.elementBackground,
    borderRadius: 10,
    marginTop: '4rem'
})

export const octocats = style({
    width: 'auto',
    minHeight: 300,
    backgroundImage: `url('/images/octocats.jpeg')`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px 10px 0 0'
})

export const mainContent = style({
    padding: '2rem'
})
