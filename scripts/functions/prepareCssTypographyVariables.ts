import { toCssKeyFormat } from './toCssKeyFormat';

type FontObject = Record<string, FontProperties>;

/**
 * Font properties describing a single typography style.
 */
interface FontProperties {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}

/**
 * Options for generating CSS variables.
 */
interface Options {
  /**
   * Optional prefix to prepend to each CSS variable key.
   * @example "typography"
   */
  keyPrefix?: string;
}

/**
 * Generates a record of CSS variables from a font object.
 *
 * Each value will be a valid CSS font shorthand in the format:
 * `"{font-weight} {font-size}/{line-height} {font-family}"`
 *
 * @param fontObject - A map of keys to font definitions (family, size, weight, line height)
 * @param options - Optional settings, such as a `keyPrefix` for variable names
 * @returns An object of CSS variable definitions ready to be used in `font: var(--...)`
 *
 * @example
 * prepareCssTypographyVariables({
 *   medium: {
 *     fontFamily: 'Roboto',
 *     fontSize: '32px',
 *     fontWeight: 500,
 *     lineHeight: '40px',
 *   }
 * }, { keyPrefix: 'typography-h1' })
 *
 * // Returns:
 * // {
 * //   'typography-h1-medium': '500 32px/40px Roboto'
 * // }
 */
export function prepareCssTypographyVariables(
  fontObject: FontObject,
  options: Options = {},
) {
  const { keyPrefix = '' } = options;

  return Object.fromEntries(
    Object.entries(fontObject).map(([key, fontProperties]) => {
      const { fontFamily, fontSize, fontWeight, lineHeight } = fontProperties;

      const keyFormatted = toCssKeyFormat(key);

      // Convert key to kebab-case and apply prefix if specified
      const finalKey =
        keyPrefix !== '' ? `${keyPrefix}-${keyFormatted}` : keyFormatted;

      const finalValue = `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;

      return [finalKey, finalValue] as const;
    }),
  );
}
