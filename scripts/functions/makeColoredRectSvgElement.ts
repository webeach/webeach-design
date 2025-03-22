const HEIGHT = 16;
const WIDTH = 24;

/**
 * Generates an SVG string representing a colored rectangle.
 *
 * @param {string} color - The fill color of the rectangle (any valid CSS color).
 * @returns {string} An SVG string containing a `<rect>` element with the specified color.
 *
 * @example
 * const svg = makeColoredRectSvgElement("red");
 * console.log(svg);
 * // Outputs:
 * // <svg height="16" width="24" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
 * //   <rect fill="red" height="16" width="24" />
 * // </svg>
 */
export function makeColoredRectSvgElement(color: string): string {
  return `
    <svg height="${HEIGHT}" width="${WIDTH}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect fill="${color}" height="${HEIGHT}" width="${WIDTH}" />
    </svg>
  `;
}
