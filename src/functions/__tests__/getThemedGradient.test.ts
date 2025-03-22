import { DarkModeGradient, LightModeGradient } from '../../tokens/gradients';
import { getThemedGradient } from '../getThemedGradient';

describe('getThemedGradient function', () => {
  test('should return DarkModeGradient for "dark" theme', () => {
    expect(getThemedGradient('dark')).toBe(DarkModeGradient);
  });

  test('should return LightModeGradient for "light" theme', () => {
    expect(getThemedGradient('light')).toBe(LightModeGradient);
  });

  test('should throw an error for an invalid theme "sun"', () => {
    // @ts-expect-error" Check the negative scenario
    expect(() => getThemedGradient('sun')).toThrow();
  });
});
