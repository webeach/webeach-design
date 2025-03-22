import { z } from 'zod';

import { camelCaseStringSchema } from './camelCaseStringSchema';

/**
 * Zod schema for validating a font family mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key follows the **camelCase** naming convention (`camelCaseStringSchema`).
 *   - The value is a **non-empty string** representing the font family name.
 * - The font family name must be explicitly defined (empty strings are **not allowed**).
 * - Example valid values: `"primary": "Roboto, sans-serif"`, `"monospace": "Menlo, monospace"`.
 *
 * @example
 * fontFamilyMapSchema.parse({
 *   primary: "Roboto, sans-serif",
 *   secondary: "'Open Sans', sans-serif",
 *   monospace: "Menlo, monospace"
 * }); // ✅ Valid
 *
 * fontFamilyMapSchema.parse({
 *   "PrimaryFont": "Arial", // ❌ Invalid (must be camelCase)
 *   "code_font": "Courier New", // ❌ Invalid (must be camelCase)
 *   "secondary": "" // ❌ Invalid (empty string not allowed)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not in camelCase format.
 * - Any font family value is an empty string.
 */
export const fontFamilyMapSchema = z
  .record(camelCaseStringSchema, z.string().nonempty())
  .describe(
    'Mapping of font families with camelCase keys and non-empty string values.',
  );
