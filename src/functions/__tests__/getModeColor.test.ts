import { DarkModeColor, LightModeColor } from '../../tokens/colors';
import { getModeColor } from '../getModeColor';

describe('getModeColor function', () => {
  test('should return DarkModeColor for "dark" mode', () => {
    expect(getModeColor('dark')).toBe(DarkModeColor);
  });

  test('should return LightModeColor for "light" mode', () => {
    expect(getModeColor('light')).toBe(LightModeColor);
  });

  test('should throw an error for an invalid mode "sun"', () => {
    // @ts-expect-error" Check the negative scenario
    expect(() => getModeColor('sun')).toThrow();
  });
});
