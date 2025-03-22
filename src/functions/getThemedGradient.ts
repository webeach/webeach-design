import { DarkModeGradient, LightModeGradient } from '../tokens/gradients';
import type { ThemeKey } from '../types/common';

/**
 * Returns the gradient set based on the selected theme.
 *
 * @param {ThemeKey} theme - The theme key (`"dark"` or `"light"`).
 * @returns {typeof DarkModeGradient | typeof LightModeGradient} The corresponding gradient set.
 * @throws {Error} If an unknown theme is provided.
 *
 * @example
 * const gradients = getThemedGradients('dark'); // Returns DarkModeGradients
 * const gradients = getThemedGradients('light'); // Returns LightModeGradients
 */
export function getThemedGradient(theme: ThemeKey) {
  switch (theme) {
    case 'dark':
      return DarkModeGradient;
    case 'light':
      return LightModeGradient;
    default:
      throw new Error(`Unknown theme: ${theme}`);
  }
}
