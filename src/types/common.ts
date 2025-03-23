import { THEME_KEYS } from '../constants/common';

export type HSLValue =
  | `hsl(${number} ${number}% ${number}%)`
  | `hsl(${number} ${number}% ${number}% / ${number})`;

export type ThemeKey = (typeof THEME_KEYS)[number];
