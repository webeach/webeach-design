import { toCssKeyFormat } from './toCssKeyFormat';

interface Options<LinkedObject extends object> {
  /**
   * A prefix to prepend to each generated CSS variable key.
   * This is useful for grouping variables under a namespace.
   *
   * @example "lm"
   */
  keyPrefix?: string;

  /**
   * A prefix to prepend to linked CSS variables when referencing values from `linkedObject`.
   * This helps distinguish between different groups of variables.
   *
   * @example "alt"
   */
  linkedKeyPrefix?: string;

  /**
   * An optional object containing predefined CSS variables.
   * If a value in `targetObject` matches a value in `linkedObject`,
   * it will be replaced with `var(--linked-key)`.
   *
   * @example
   * const linkedColors = { altPrimary: "#ff0000", altSecondary: "#00ff00" };
   * prepareCssVariables(colors, { linkedObject: linkedColors, linkedKeyPrefix: "alt" });
   * // => { "primary-color": "var(--alt-alt-primary)", "secondary-color": "var(--alt-alt-secondary)" }
   */
  linkedObject?: LinkedObject | null;

  /**
   * Whether to wrap the CSS variable values in quotes.
   * Useful for font-family definitions or string-based values.
   *
   * @default false
   */
  withQuotes?: boolean;
}

/**
 * Generates a set of CSS variables by converting object keys to kebab-case.
 * Optionally, it can reference values from another object (`linkedObject`),
 * replacing matching values with `var(--linked-key)`.
 *
 * @param {TargetObject} targetObject - The object containing the CSS variables to process.
 * @param {Options<TargetObject, LinkedObject>} [options] - Optional configuration.
 * @returns {Record<string, string | number>} The formatted CSS variable map.
 *
 * @example
 * const colors = { primaryColor: "#ff0000", secondaryColor: "#00ff00" };
 *
 * prepareCssVariables(colors);
 * // => { "primary-color": "#ff0000", "secondary-color": "#00ff00" }
 *
 * @example
 * prepareCssVariables(colors, { keyPrefix: "lm" });
 * // => { "lm-primary-color": "#ff0000", "lm-secondary-color": "#00ff00" }
 *
 * @example
 * const linked = { altPrimary: "#ff0000", altSecondary: "#00ff00" };
 *
 * prepareCssVariables(colors, { linkedObject: linked, linkedKeyPrefix: "alt" });
 * // => { "primary-color": "var(--alt-alt-primary)", "secondary-color": "var(--alt-alt-secondary)" }
 *
 * @example
 * const fonts = { primaryFont: "Roboto, sans-serif" };
 *
 * prepareCssVariables(fonts, { withQuotes: true });
 * // => { "primary-font": "'Roboto, sans-serif'" }
 */
export function prepareCssVariables<
  TargetObject extends object,
  LinkedObject extends object,
>(
  targetObject: TargetObject,
  options: Options<LinkedObject> = {},
): Record<string, string | number> {
  const { keyPrefix = '', linkedKeyPrefix = '', linkedObject = null } = options;

  // Create a map for quick lookup of values in linkedObject
  const linkedObjectValueKeyMap = new Map(
    linkedObject !== null
      ? Object.entries(linkedObject).map(([key, value]) => [value, key])
      : [],
  );

  return Object.fromEntries(
    Object.entries(targetObject).map(([key, value]) => {
      const keyFormatted = toCssKeyFormat(key);

      // Check if this value exists in linkedObject
      const linkedKey = linkedObjectValueKeyMap.get(value) ?? null;

      const linkedKeyFormatted =
        linkedKey !== null ? toCssKeyFormat(linkedKey) : null;

      // Add a prefix to the linked key if needed
      const linkedKeyWithPrefix =
        linkedKeyFormatted !== null && linkedKeyPrefix !== ''
          ? `${linkedKeyPrefix}-${linkedKeyFormatted}`
          : linkedKeyFormatted;

      // If a linked key exists, replace value with a CSS variable reference
      const linkedKeyWithVar =
        linkedKeyWithPrefix !== null ? `var(--${linkedKeyWithPrefix})` : null;

      // Convert the key to kebab-case and apply the prefix if specified
      const finalKey =
        keyPrefix !== '' ? `${keyPrefix}-${keyFormatted}` : keyFormatted;

      const finalValue = linkedKeyWithVar ?? value;

      return [finalKey, finalValue] as const;
    }),
  );
}
