import fs from 'node:fs';

import { makeGradientRectSvgElement } from './makeGradientRectSvgElement';

/**
 * Creates an SVG file containing a rectangle with a linear gradient.
 *
 * @param {readonly [string, string]} colors - A tuple containing two colors for the gradient.
 *   - `colors[0]` is the start color (left side).
 *   - `colors[1]` is the end color (right side).
 * @param {string} filePath - The path where the SVG file will be saved.
 * @returns {Promise<void>} A promise that resolves when the file is successfully written.
 *
 * @example
 * await makeGradientRectSvgFile(["red", "blue"], "./gradient.svg");
 * // Saves an SVG file with a gradient from "red" to "blue" at "./gradient.svg"
 */
export async function makeGradientRectSvgFile(
  colors: readonly [string, string],
  filePath: string,
): Promise<void> {
  const svgElement = makeGradientRectSvgElement(colors);
  await fs.promises.writeFile(filePath, svgElement, {
    encoding: 'utf8',
  });
}
