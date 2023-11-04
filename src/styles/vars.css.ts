import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { iris, irisDark } from '@radix-ui/colors'

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
    appBackground: iris.iris1,
    subtleBackground: iris.iris2,

    elementBackground: iris.iris3,
    elementBackgroundHovered: iris.iris4,
    elementBackgroundActive: iris.iris5,

    bordersNonInteractive: iris.iris6,
    bordersInteractive: iris.iris7,
    bordersInteractiveFocused: iris.iris8,

    solidBackground: iris.iris9,
    solidBackgroundHovered: iris.iris10,

    textContrastLow: iris.iris11,
    textContrastHigh: iris.iris12
})

export const dark = createTheme(vars, {
    appBackground: irisDark.iris1,
    subtleBackground: irisDark.iris2,

    elementBackground: irisDark.iris3,
    elementBackgroundHovered: irisDark.iris4,
    elementBackgroundActive: irisDark.iris5,

    bordersNonInteractive: irisDark.iris6,
    bordersInteractive: irisDark.iris7,
    bordersInteractiveFocused: irisDark.iris8,

    solidBackground: irisDark.iris9,
    solidBackgroundHovered: irisDark.iris10,

    textContrastLow: irisDark.iris11,
    textContrastHigh: irisDark.iris12
})
