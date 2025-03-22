import { DarkModeColor, LightModeColor } from './colors';

export const DarkModeGradient = {
  primary1: [DarkModeColor.secondary1, DarkModeColor.primary1] as const,
  primary2: [DarkModeColor.secondary2, DarkModeColor.primary2] as const,
  primary3: [DarkModeColor.secondary3, DarkModeColor.primary3] as const,
  primary4: [DarkModeColor.secondary4, DarkModeColor.primary4] as const,
  primary5: [DarkModeColor.secondary5, DarkModeColor.primary5] as const,
  primary6: [DarkModeColor.secondary6, DarkModeColor.primary6] as const,
  primary7: [DarkModeColor.secondary7, DarkModeColor.primary7] as const,
  primary8: [DarkModeColor.secondary8, DarkModeColor.primary8] as const,
  primary9: [DarkModeColor.secondary9, DarkModeColor.primary9] as const,
  primary10: [DarkModeColor.secondary10, DarkModeColor.primary10] as const,
} as const;

export const LightModeGradient = {
  primary1: [LightModeColor.secondary1, LightModeColor.primary1] as const,
  primary2: [LightModeColor.secondary2, LightModeColor.primary2] as const,
  primary3: [LightModeColor.secondary3, LightModeColor.primary3] as const,
  primary4: [LightModeColor.secondary4, LightModeColor.primary4] as const,
  primary5: [LightModeColor.secondary5, LightModeColor.primary5] as const,
  primary6: [LightModeColor.secondary6, LightModeColor.primary6] as const,
  primary7: [LightModeColor.secondary7, LightModeColor.primary7] as const,
  primary8: [LightModeColor.secondary8, LightModeColor.primary8] as const,
  primary9: [LightModeColor.secondary9, LightModeColor.primary9] as const,
  primary10: [LightModeColor.secondary10, LightModeColor.primary10] as const,
} as const;

export type DarkModeGradientType = Readonly<typeof DarkModeGradient>;
export type DarkModeGradientKey = keyof DarkModeGradientType;

export type LightModeGradientType = Readonly<typeof LightModeGradient>;
export type LightModeGradientKey = keyof LightModeGradientType;
