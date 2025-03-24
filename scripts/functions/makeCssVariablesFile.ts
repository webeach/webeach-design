import fs from 'node:fs';
import prettier from 'prettier';
import stylelint, { Config } from 'stylelint';

import { makeCssVariablesBody } from './makeCssVariablesBody';

type VariableMap = Record<string, string | number>;

interface Options {
  /** Whether to format the generated CSS with Prettier (default: `false`). */
  format?: boolean;
}

interface VariableSection {
  /** Optional selector to scope the CSS variables (e.g., `[data-ui-mode="dark"]`). */
  selector?: string;
  /** Key-value pairs representing CSS variables in kebab-case. */
  variables: VariableMap;
}

/** Stylelint configuration used for validating the generated CSS. */
const stylelintConfig: Config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'hue-degree-notation': 'number',
  },
};

/**
 * Formats a CSS string using Prettier.
 *
 * @param {string} cssBody - The CSS string to format.
 * @returns {Promise<string>} A promise resolving to the formatted CSS string.
 */
async function formatCss(cssBody: string): Promise<string> {
  return await prettier.format(cssBody, {
    parser: 'css',
  });
}

/**
 * Lints a CSS string using Stylelint and throws an error if linting fails.
 *
 * @param {string} cssBody - The CSS string to lint.
 * @throws {Error} If linting errors are found.
 */
async function lintCss(cssBody: string): Promise<void> {
  const linterResult = await stylelint.lint({
    code: cssBody,
    config: stylelintConfig,
  });

  if (linterResult.errored) {
    const errorList = linterResult.results.flatMap(({ warnings }) => {
      return warnings.map(
        (warningItem) =>
          `[${warningItem.line}:${warningItem.column}] ${warningItem.text} (${warningItem.rule})`,
      );
    });

    if (errorList.length > 0) {
      throw new Error(`Generate CSS Error: \n${errorList.join('\n')}`);
    }

    throw new Error(`Generate CSS Error: ${linterResult.report}`);
  }
}

/**
 * Generates a CSS file with CSS variable definitions.
 *
 * @param {string} filePath - The path where the CSS file will be saved.
 * @param {ReadonlyArray<VariableSection>} variableSections - An array of sections containing CSS variables.
 * @param {Options} [options] - Optional settings (e.g., whether to format the CSS output).
 * @returns {Promise<void>} A promise that resolves when the file is successfully written.
 *
 * @example
 * await makeCssVariablesFile("styles.css", [
 *   {
 *     selector: "[data-ui-mode='dark']",
 *     variables: { "primary-color": "#000", "secondary-color": "#333" },
 *   },
 *   {
 *     selector: "[data-ui-mode='light']",
 *     variables: { "primary-color": "#fff", "secondary-color": "#ccc" },
 *   },
 * ], { format: true });
 */
export async function makeCssVariablesFile(
  filePath: string,
  variableSections: ReadonlyArray<VariableSection>,
  options: Options = {},
): Promise<void> {
  const { format = false } = options;

  const cssBody = variableSections
    .map((section) => {
      return makeCssVariablesBody(section.variables, section.selector);
    })
    .join('\n\n');

  const finalCssBody = format ? await formatCss(cssBody) : cssBody;

  await lintCss(finalCssBody);

  await fs.promises.writeFile(filePath, finalCssBody, {
    encoding: 'utf8',
  });
}
