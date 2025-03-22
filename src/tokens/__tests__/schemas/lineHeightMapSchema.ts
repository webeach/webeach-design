import { z } from 'zod';

import { camelCaseStringSchema } from './camelCaseStringSchema';
import { sizeValueSchema } from './sizeValueSchema';

/**
 * Zod schema for validating a line height mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key follows the **camelCase** naming convention (`camelCaseStringSchema`).
 *   - The value is a **size value** (`sizeValueSchema`), which must be in `"Npx"` format (e.g., `"16px"`, `"24px"`).
 * - Line height values **must be explicitly defined** (empty strings are **not allowed**).
 *
 * @example
 * lineHeightMapSchema.parse({
 *   compact: "16px",
 *   tight: "20px",
 *   dense: "22px",
 *   normal: "24px",
 *   relaxed: "30px",
 *   extraRelaxed: "40px",
 * }); // ✅ Valid
 *
 * lineHeightMapSchema.parse({
 *   Compact: "16px",       // ❌ Invalid (must be camelCase)
 *   extra_relaxed: "40px", // ❌ Invalid (must be camelCase)
 *   normal: "",            // ❌ Invalid (empty string not allowed)
 *   relaxed: "2em",        // ❌ Invalid (must be in px)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not in camelCase format.
 * - Any value is not a valid `sizeValueSchema` (`Npx` format).
 * - Any value is an empty string.
 */
export const lineHeightMapSchema = z
  .record(camelCaseStringSchema, sizeValueSchema)
  .describe(
    'Mapping of line heights with camelCase keys and pixel-based values.',
  );
