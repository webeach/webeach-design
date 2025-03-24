import { DarkModeGradient, LightModeGradient } from '../../tokens/gradients';
import { getModeGradient } from '../getModeGradient';

describe('getModeGradient function', () => {
  test('should return DarkModeGradient for "dark" mode', () => {
    expect(getModeGradient('dark')).toBe(DarkModeGradient);
  });

  test('should return LightModeGradient for "light" mode', () => {
    expect(getModeGradient('light')).toBe(LightModeGradient);
  });

  test('should throw an error for an invalid mode "sun"', () => {
    // @ts-expect-error" Check the negative scenario
    expect(() => getModeGradient('sun')).toThrow();
  });
});
