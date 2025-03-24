import { DarkModeColor, LightModeColor } from '../tokens/colors';
import type { ModeTypeKey } from '../types/common';

/**
 * Returns the color palette based on the selected mode.
 *
 * @param {ModeTypeKey} mode - The mode key (`"dark"` or `"light"`).
 * @returns {typeof DarkModeColor | typeof LightModeColor} The corresponding color set.
 * @throws {TypeError} If an unknown mode is provided.
 *
 * @example
 * const colors = getModeColor('dark'); // Returns DarkModeColors
 * const colors = getModeColor('light'); // Returns LightModeColors
 */
export function getModeColor(mode: ModeTypeKey) {
  switch (mode) {
    case 'dark':
      return DarkModeColor;
    case 'light':
      return LightModeColor;
    default:
      throw new TypeError(`Unknown mode: ${mode}`);
  }
}
