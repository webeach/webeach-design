/**
 * Adds a hyphen before an uppercase letter that follows a lowercase letter or a number.
 * Example: "fooBar" → "foo-Bar", "neutral1" → "neutral-1"
 */
const CAMEL_TO_KEBAB_PATTERN = /[a-z](?=[A-Z\d])|[a-zA-Z](?=\d)/g;

/**
 * Replaces dots (.), forward slashes (/), and backslashes (\) with a hyphen.
 * Example: "some.value" → "some-value", "path/to/file" → "path-to-file"
 */
const SLASHES_TO_HYPHEN_PATTERN = /[./\\]/g;

/**
 * Removes unwanted characters:
 * - Special characters except hyphens and underscores
 * - Leading or trailing hyphens/underscores
 * - Consecutive hyphens/underscores
 */
const EXCLUDE_INVALID_CHARS_PATTERN = /[^\w-]+|([_-]+$)|(^-+)|-(?=-)|_(?=_)/g;

/**
 * Converts a string to a CSS-compatible key format (kebab-case).
 *
 * This function:
 * - Converts camelCase or PascalCase to kebab-case (`fooBar` → `foo-bar`, `FooBar` → `foo-bar`).
 * - Inserts a hyphen before numbers (`neutral1` → `neutral-1`).
 * - Replaces dots (`.`), forward slashes (`/`), and backslashes (`\`) with hyphens (`some.value` → `some-value`).
 * - Removes special characters except underscores and hyphens.
 * - Removes redundant or trailing hyphens/underscores.
 * - Converts the final result to lowercase.
 *
 * @param {string} value - The input string to convert.
 * @returns {string} The transformed string in kebab-case.
 *
 * @example
 * toCssKeyFormat('fooBar');       // 'foo-bar'
 * toCssKeyFormat('FooBar');       // 'foo-bar'
 * toCssKeyFormat('neutral1');     // 'neutral-1'
 * toCssKeyFormat('1x');           // '1x'
 * toCssKeyFormat('1.5x');         // '1-5x'
 * toCssKeyFormat('some/value');   // 'some-value'
 * toCssKeyFormat('path\\to\\file'); // 'path-to-file'
 * toCssKeyFormat('-Some--Value-'); // 'some-value'
 * toCssKeyFormat('some_value');   // 'some-value'
 * toCssKeyFormat('weird@@case!'); // 'weird-case'
 * toCssKeyFormat('_privateKey'); // '_private-key'
 */
export function toCssKeyFormat(value: string): string {
  return value
    .replace(CAMEL_TO_KEBAB_PATTERN, '$&-') // Convert camelCase/PascalCase to kebab-case
    .replace(SLASHES_TO_HYPHEN_PATTERN, '-') // Replace ".", "/", "\" with "-"
    .replace(EXCLUDE_INVALID_CHARS_PATTERN, '') // Remove invalid characters
    .toLowerCase();
}
