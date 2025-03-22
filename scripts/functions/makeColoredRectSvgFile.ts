import fs from 'node:fs';

import { makeColoredRectSvgElement } from './makeColoredRectSvgElement';

/**
 * Creates an SVG file containing a colored rectangle.
 *
 * @param {string} color - The fill color of the rectangle (any valid CSS color).
 * @param {string} filePath - The path where the SVG file will be saved.
 * @returns {Promise<void>} A promise that resolves when the file is successfully written.
 *
 * @example
 * await makeColoredRectSvgFile("blue", "./rect.svg");
 * // Saves an SVG file with a blue rectangle at "./rect.svg"
 */
export async function makeColoredRectSvgFile(
  color: string,
  filePath: string,
): Promise<void> {
  const svgElement = makeColoredRectSvgElement(color);
  await fs.promises.writeFile(filePath, svgElement, {
    encoding: 'utf8',
  });
}
