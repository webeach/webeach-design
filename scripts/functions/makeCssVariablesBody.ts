type VariableMap = Record<string, string | number>;

/**
 * Generates a CSS variables block from a given map of variables.
 *
 * @param {VariableMap} variableMap - An object containing key-value pairs where:
 *   - Keys represent CSS variable names (without the `--` prefix).
 *   - Values represent the corresponding CSS values.
 * @param {string} [extraSelector] - An optional additional selector to scope the variables (e.g., `[data-theme="dark"]`).
 * @returns {string} A string containing CSS variable definitions inside a `:root` or custom selector.
 *
 * @example
 * const css = makeCssVariablesBody({ 'primary-color": "#ff0000', 'spacing-1x': '4px' });
 * console.log(css);
 * // Outputs:
 * // :root {
 * //   --primary-color: #ff0000;
 * //   --spacing-1x: 4px;
 * // }
 *
 * @example
 * const darkThemeCss = makeCssVariablesBody({ 'primary-color': '#0000ff' }, '[data-theme="dark"]');
 * console.log(darkThemeCss);
 * // Outputs:
 * // :root:is([data-theme="dark"]) {
 * //   --primary-color: #0000ff;
 * // }
 */
export function makeCssVariablesBody(
  variableMap: VariableMap,
  extraSelector?: string,
): string {
  const selector = extraSelector ? `:root:is(${extraSelector})` : ':root';

  const rules = Object.entries(variableMap)
    .map(([key, value]) => {
      return `--${key}: ${value}`;
    })
    .join(';');

  return `${selector}{${rules}}`;
}
