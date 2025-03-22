import { DarkModeColor, LightModeColor } from '../../tokens/colors';
import { getThemedColor } from '../getThemedColor';

describe('getThemedColor function', () => {
  test('should return DarkModeColor for "dark" theme', () => {
    expect(getThemedColor('dark')).toBe(DarkModeColor);
  });

  test('should return LightModeColor for "light" theme', () => {
    expect(getThemedColor('light')).toBe(LightModeColor);
  });

  test('should throw an error for an invalid theme "sun"', () => {
    // @ts-expect-error" Check the negative scenario
    expect(() => getThemedColor('sun')).toThrow();
  });
});
