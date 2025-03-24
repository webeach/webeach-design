type VariableMap = Record<string, string | number>;

/**
 * Generates a CSS variable block from a given map of key-value pairs.
 *
 * @param {VariableMap} variableMap - An object where:
 *   - Keys are CSS variable names **without** the `--` prefix.
 *   - Values are the corresponding CSS values (string or number).
 *
 * @param {string} [selector=':root'] - An optional CSS selector to scope the variables.
 *   If provided, the selector will be used instead of `:root`.
 *
 * @returns {string} A string of CSS containing variable declarations wrapped in the specified selector.
 *
 * @example
 * const css = makeCssVariablesBody({ 'primary-color': '#ff0000', 'spacing-1x': '4px' });
 * console.log(css);
 * // Outputs:
 * // :root {
 * //   --primary-color: #ff0000;
 * //   --spacing-1x: 4px;
 * // }
 *
 * @example
 * const darkCss = makeCssVariablesBody({ 'primary-color': '#0000ff' }, '[data-ui-mode="dark"]');
 * console.log(darkCss);
 * // Outputs:
 * // [data-ui-mode="dark"] {
 * //   --primary-color: #0000ff;
 * // }
 */

export function makeCssVariablesBody(
  variableMap: VariableMap,
  selector = ':root',
): string {
  const rules = Object.entries(variableMap)
    .map(([key, value]) => {
      return `--${key}: ${value}`;
    })
    .join(';');

  return `${selector}{${rules}}`;
}
