export const Size = {
  '1x': '4px',
  '1.5x': '6px',
  '2x': '8px',
  '3x': '12px',
  '4x': '16px',
  '4.5x': '18px',
  '5x': '20px',
  '6x': '24px',
  '7x': '28px',
  '8x': '32px',
  '10x': '40px',
  '12x': '48px',
  '16x': '64px',
  '24x': '96px',
  '32x': '128px',
} as const;

export const BorderSize = {
  thin: '1px',
  regular: '2px',
  medium: Size['1x'],
  bold: Size['1.5x'],
  extraBold: Size['2x'],
} as const;

export const Rounding = {
  '1x': Size['1x'],
  '1.5x': Size['1.5x'],
  '2x': Size['2x'],
  '4x': Size['4x'],
} as const;

export const Spacing = {
  '0.5x': '2px',
  '1x': Size['1x'],
  '1.5x': Size['1.5x'],
  '2x': Size['2x'],
  '3x': Size['3x'],
  '4x': Size['4x'],
  '5x': Size['5x'],
  '6x': Size['6x'],
  '7x': Size['7x'],
  '8x': Size['8x'],
  '10x': Size['10x'],
  '12x': Size['12x'],
} as const;

export type SizeType = Readonly<typeof Size>;
export type SizeKey = keyof SizeType;
export type SizeValue = SizeType[SizeKey];

export type BorderSizeType = Readonly<typeof BorderSize>;
export type BorderSizeKey = keyof BorderSizeType;
export type BorderSizeValue = BorderSizeType[BorderSizeKey];

export type RoundingType = Readonly<typeof Rounding>;
export type RoundingKey = keyof RoundingType;
export type RoundingValue = RoundingType[RoundingKey];

export type SpacingType = Readonly<typeof Spacing>;
export type SpacingKey = keyof SpacingType;
export type SpacingValue = SpacingType[SpacingKey];
