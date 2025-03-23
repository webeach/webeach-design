import {
  DarkModeColor,
  DarkModeColorKey,
  DarkModeColorType,
  LightModeColor,
  LightModeColorKey,
  LightModeColorType,
} from './colors';

export const DarkModeGradient = {
  primary1: [DarkModeColor.secondary1, DarkModeColor.primary1],
  primary2: [DarkModeColor.secondary2, DarkModeColor.primary2],
  primary3: [DarkModeColor.secondary3, DarkModeColor.primary3],
  primary4: [DarkModeColor.secondary4, DarkModeColor.primary4],
  primary5: [DarkModeColor.secondary5, DarkModeColor.primary5],
  primary6: [DarkModeColor.secondary6, DarkModeColor.primary6],
  primary7: [DarkModeColor.secondary7, DarkModeColor.primary7],
  primary8: [DarkModeColor.secondary8, DarkModeColor.primary8],
  primary9: [DarkModeColor.secondary9, DarkModeColor.primary9],
  primary10: [DarkModeColor.secondary10, DarkModeColor.primary10],
} satisfies Record<
  string,
  [DarkModeColorType[DarkModeColorKey], DarkModeColorType[DarkModeColorKey]]
>;

export const LightModeGradient = {
  primary1: [LightModeColor.secondary1, LightModeColor.primary1],
  primary2: [LightModeColor.secondary2, LightModeColor.primary2],
  primary3: [LightModeColor.secondary3, LightModeColor.primary3],
  primary4: [LightModeColor.secondary4, LightModeColor.primary4],
  primary5: [LightModeColor.secondary5, LightModeColor.primary5],
  primary6: [LightModeColor.secondary6, LightModeColor.primary6],
  primary7: [LightModeColor.secondary7, LightModeColor.primary7],
  primary8: [LightModeColor.secondary8, LightModeColor.primary8],
  primary9: [LightModeColor.secondary9, LightModeColor.primary9],
  primary10: [LightModeColor.secondary10, LightModeColor.primary10],
} satisfies Record<
  string,
  [LightModeColorType[LightModeColorKey], LightModeColorType[LightModeColorKey]]
>;

export type DarkModeGradientType = Readonly<typeof DarkModeGradient>;
export type DarkModeGradientKey = keyof DarkModeGradientType;

export type LightModeGradientType = Readonly<typeof LightModeGradient>;
export type LightModeGradientKey = keyof LightModeGradientType;

export type GradientKey = DarkModeGradientKey & LightModeGradientKey;
