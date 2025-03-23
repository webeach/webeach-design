import { DarkModeGradient, LightModeGradient } from '../gradients';

import { gradientMapSchema } from './schemas/gradientMapSchema';

describe('Gradients validation', () => {
  test('Validate DarkModeGradient', () => {
    expect(() => gradientMapSchema.parse(DarkModeGradient)).not.toThrow();
  });

  test('Validate LightModeGradient', () => {
    expect(() => gradientMapSchema.parse(LightModeGradient)).not.toThrow();
  });

  test('DarkModeGradient and LightModeGradient should have identical keys', () => {
    const darkGradientKeys = Object.keys(DarkModeGradient).sort();
    const lightGradientKeys = Object.keys(LightModeGradient).sort();

    expect(darkGradientKeys).toEqual(lightGradientKeys);
  });

  test('Snapshot DarkModeGradient', () => {
    expect(DarkModeGradient).toMatchSnapshot();
  });

  test('Snapshot LightModeGradient', () => {
    expect(LightModeGradient).toMatchSnapshot();
  });
});
