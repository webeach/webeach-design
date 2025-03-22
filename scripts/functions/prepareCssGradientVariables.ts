import { toCssKeyFormat } from './toCssKeyFormat';

interface Options {
  /**
   * A prefix to prepend to each generated CSS gradient variable key.
   * Helps organize and namespace variables.
   *
   * @example "theme"
   */
  keyPrefix?: string;

  /**
   * A prefix to prepend to color keys when referencing values from `colorMap`.
   * Helps distinguish between different groups of variables.
   *
   * @example "alt"
   */
  colorKeyPrefix?: string;
}

/**
 * Generates a set of CSS linear gradient variables by converting object keys to kebab-case.
 * It replaces color values with references to existing CSS color variables when possible.
 *
 * @param {GradientMap} gradientMap - The object containing gradient definitions.
 * Each gradient is a tuple of two color values.
 * @param {ColorMap} colorMap - The object mapping colors to their respective values.
 * Used to replace direct values with `var(--color-key)`.
 * @param {Options} [options] - Optional configuration.
 * @returns {Record<string, string>} The formatted CSS gradient variable map.
 *
 * @example
 * const gradients = {
 *   primaryGradient: ['#ff0000', '#0000ff'],
 * };
 * const colors = {
 *   primaryRed: '#ff0000',
 *   primaryBlue: '#0000ff',
 * };
 *
 * prepareCssGradientVariables(gradients, colors);
 * // => { "primary-gradient": "linear-gradient(to right, #ff0000, #0000ff)" }
 *
 * @example
 * prepareCssGradientVariables(gradients, colors, { keyPrefix: "theme" });
 * // => { "theme-primary-gradient": "linear-gradient(to right, #ff0000, #0000ff)" }
 *
 * @example
 * prepareCssGradientVariables(gradients, colors, { colorKeyPrefix: "alt" });
 * // => { "primary-gradient": "linear-gradient(to right, var(--alt-primary-red), var(--alt-primary-blue))" }
 */
export function prepareCssGradientVariables<
  GradientMap extends Record<string, readonly [string, string]>,
  ColorMap extends Record<string, string>,
>(
  gradientMap: GradientMap,
  colorMap: ColorMap,
  options: Options = {},
): Record<string, string> {
  const { keyPrefix = '', colorKeyPrefix = '' } = options;

  // Create a lookup map for color values
  const colorValueKeyMap = new Map(
    Object.entries(colorMap).map(([key, value]) => [value, key]),
  );

  return Object.fromEntries(
    Object.entries(gradientMap).map(([key, values]) => {
      const keyFormatted = toCssKeyFormat(key);

      // Convert key to kebab-case and apply prefix if specified
      const finalKey =
        keyPrefix !== '' ? `${keyPrefix}-${keyFormatted}` : keyFormatted;

      // Convert color values to CSS variables if they exist in colorMap
      const gradientColors = values.map((colorValue) => {
        const linkedKey = colorValueKeyMap.get(colorValue) ?? null;
        const linkedKeyFormatted =
          linkedKey !== null ? toCssKeyFormat(linkedKey) : linkedKey;

        return linkedKeyFormatted !== null
          ? `var(--${colorKeyPrefix !== '' ? `${colorKeyPrefix}-${linkedKeyFormatted}` : linkedKeyFormatted})`
          : colorValue;
      });

      // Generate the final CSS gradient value
      const finalValue = `linear-gradient(to right, ${gradientColors.join(', ')})`;

      return [finalKey, finalValue] as const;
    }),
  );
}
