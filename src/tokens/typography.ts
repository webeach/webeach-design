export const FontFamily = {
  primary: '"Roboto", sans-serif',
  monospace: '"Roboto Mono", monospace',
} as const;

export const FontSize = {
  extraSmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  extraLarge: '20px',
  extraExtraLarge: '24px',
  extraExtraExtraLarge: '32px',
} as const;

export const FontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const LineHeight = {
  compact: '16px',
  tight: '20px',
  dense: '22px',
  normal: '24px',
  relaxed: '30px',
  extraRelaxed: '40px',
} as const;

export const Typography = {
  H1: {
    // "Roboto" 32px/40px 500
    medium: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.extraExtraExtraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.extraRelaxed,
    },
  },
  H2: {
    // "Roboto" 24px/30px 500
    medium: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.extraExtraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.relaxed,
    },
  },
  H3: {
    // "Roboto" 20px/24px 400
    regular: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.extraLarge,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.normal,
    },
    // "Roboto" 20px/24px 500
    medium: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.extraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.normal,
    },
  },
  H4: {
    // "Roboto" 18px/24px 400
    regular: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.large,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.normal,
    },
    // "Roboto" 18px/24px 500
    medium: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.large,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.normal,
    },
  },
  H5: {
    // Roboto 16px/24px 400
    regular: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.medium,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.normal,
    },
    // "Roboto" 16px/24px 500
    medium: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.medium,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.normal,
    },
    // "Roboto" 16px/24px 700
    bold: {
      fontFamily: FontFamily.primary,
      fontSize: FontSize.medium,
      fontWeight: FontWeight.bold,
      lineHeight: LineHeight.normal,
    },
  },
  Body: {
    extraSmall: {
      // "Roboto" 12px/26px 400
      regular: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.extraSmall,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.compact,
      },
      // "Roboto" 12px/26px 500
      medium: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.extraSmall,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.compact,
      },
    },
    small: {
      // "Roboto" 14px/22px 400
      regular: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.small,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.dense,
      },
      // "Roboto" 14px/22px 500
      medium: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.small,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.dense,
      },
      // "Roboto" 14px/22px 700
      bold: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.small,
        fontWeight: FontWeight.bold,
        lineHeight: LineHeight.dense,
      },
    },
    medium: {
      // "Roboto" 16px/24px 400
      regular: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.medium,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.normal,
      },
      // "Roboto" 16px/24px 500
      medium: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.medium,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.normal,
      },
      // "Roboto" 16px/24px 700
      bold: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.medium,
        fontWeight: FontWeight.bold,
        lineHeight: LineHeight.normal,
      },
    },
  },
  Code: {
    // "Roboto Mono" 14px/20px 400
    regular: {
      fontFamily: FontFamily.monospace,
      fontSize: FontSize.small,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.tight,
    },
  },
} as const;

export type TypographyType = Readonly<typeof Typography>;
