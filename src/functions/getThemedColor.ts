import { DarkModeColor, LightModeColor } from '../tokens/colors';
import type { ThemeKey } from '../types/common';

/**
 * Returns the color palette based on the selected theme.
 *
 * @param {ThemeKey} theme - The theme key (`"dark"` or `"light"`).
 * @returns {typeof DarkModeColor | typeof LightModeColor} The corresponding color set.
 * @throws {TypeError} If an unknown theme is provided.
 *
 * @example
 * const colors = getThemedColors('dark'); // Returns DarkModeColors
 * const colors = getThemedColors('light'); // Returns LightModeColors
 */
export function getThemedColor(theme: ThemeKey) {
  switch (theme) {
    case 'dark':
      return DarkModeColor;
    case 'light':
      return LightModeColor;
    default:
      throw new TypeError(`Unknown theme: ${theme}`);
  }
}
