import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { sky, cyanDark } from '@radix-ui/colors'

export const vars = createThemeContract({
    appBackground: null,
    subtleBackground: null,

    elementBackground: null,
    elementBackgroundHovered: null,
    elementBackgroundActive: null,

    bordersNonInteractive: null,
    bordersInteractive: null,
    bordersInteractiveFocused: null,

    solidBackground: null,
    solidBackgroundHovered: null,

    textContrastLow: null,
    textContrastHigh: null
})

export const light = createTheme(vars, {
    appBackground: sky.sky1,
    subtleBackground: sky.sky2,

    elementBackground: sky.sky3,
    elementBackgroundHovered: sky.sky4,
    elementBackgroundActive: sky.sky5,

    bordersNonInteractive: sky.sky6,
    bordersInteractive: sky.sky7,
    bordersInteractiveFocused: sky.sky8,

    solidBackground: sky.sky9,
    solidBackgroundHovered: sky.sky10,

    textContrastLow: sky.sky11,
    textContrastHigh: sky.sky12
})

export const dark = createTheme(vars, {
    appBackground: cyanDark.cyan1,
    subtleBackground: cyanDark.cyan2,

    elementBackground: cyanDark.cyan3,
    elementBackgroundHovered: cyanDark.cyan4,
    elementBackgroundActive: cyanDark.cyan5,

    bordersNonInteractive: cyanDark.cyan6,
    bordersInteractive: cyanDark.cyan7,
    bordersInteractiveFocused: cyanDark.cyan8,

    solidBackground: cyanDark.cyan9,
    solidBackgroundHovered: cyanDark.cyan10,

    textContrastLow: cyanDark.cyan11,
    textContrastHigh: cyanDark.cyan12
})
