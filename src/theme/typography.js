import { weight } from "@alef/theme/font";

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
    fontSize,
    fontWeight,
    lineHeight,
});

export const TITLE_UB = {
    ...baseStyles('1.6rem', weight.ultraBold, '2.4rem'),
    letterSpacing: '0.08rem',
}

export const TITLE_B = {
    ...baseStyles('1.7rem', weight.bold, '2.4rem'),
    letterSpacing: '0.06rem',
}

export const TX_R = {
    ...baseStyles('1.4rem', weight.regular, '2.4rem'),
    letterSpacing: '0.08rem',
}

export const TX_B = {
    ...baseStyles('1.4rem', weight.normal, '1.6rem'),
    letterSpacing: '0.05rem',
}

export const LABEL_R = {
    ...baseStyles('1.3rem', weight.regular, '1.6rem'),
    letterSpacing: '0.05rem',
}
