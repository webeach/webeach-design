const HEIGHT = 16;
const WIDTH = 24;

/**
 * Generates an SVG string representing a rectangle with a linear gradient.
 *
 * @param {readonly [string, string]} colors - A tuple containing two colors for the gradient.
 *   - `colors[0]` is the start color (left side).
 *   - `colors[1]` is the end color (right side).
 * @returns {string} An SVG string containing a `<rect>` element with a linear gradient fill.
 *
 * @example
 * const svg = makeGradientRectSvgElement(["red", "blue"]);
 * console.log(svg);
 * // Outputs:
 * // <svg height="16" width="24" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
 * //   <defs>
 * //     <linearGradient id="gradient" x1="0%" x2="100%">
 * //       <stop offset="0%" stop-color="red" />
 * //       <stop offset="100%" stop-color="blue" />
 * //     </linearGradient>
 * //   </defs>
 * //   <rect fill="url(#gradient)" height="16" width="24" />
 * // </svg>
 */
export function makeGradientRectSvgElement(
  colors: readonly [string, string],
): string {
  return `
    <svg height="${HEIGHT}" width="${WIDTH}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" x2="100%">
          <stop offset="0%" stop-color="${colors[0]}" />
          <stop offset="100%" stop-color="${colors[1]}" />
        </linearGradient>
      </defs>
      <rect fill="url(#gradient)" height="${HEIGHT}" width="${WIDTH}" />
    </svg>
  `;
}
