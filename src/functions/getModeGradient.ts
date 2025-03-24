import { DarkModeGradient, LightModeGradient } from '../tokens/gradients';
import type { ModeTypeKey } from '../types/common';

/**
 * Returns the gradient set based on the selected mode.
 *
 * @param {ModeTypeKey} mode - The mode key (`"dark"` or `"light"`).
 * @returns {typeof DarkModeGradient | typeof LightModeGradient} The corresponding gradient set.
 * @throws {Error} If an unknown mode is provided.
 *
 * @example
 * const gradients = getModeGradient('dark'); // Returns DarkModeGradients
 * const gradients = getModeGradient('light'); // Returns LightModeGradients
 */
export function getModeGradient(mode: ModeTypeKey) {
  switch (mode) {
    case 'dark':
      return DarkModeGradient;
    case 'light':
      return LightModeGradient;
    default:
      throw new Error(`Unknown mode: ${mode}`);
  }
}
