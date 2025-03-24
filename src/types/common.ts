import { MODE_TYPES } from '../constants/common';

export type HSLValue =
  | `hsl(${number} ${number}% ${number}%)`
  | `hsl(${number} ${number}% ${number}% / ${number})`;

export type ModeTypeKey = (typeof MODE_TYPES)[number];
