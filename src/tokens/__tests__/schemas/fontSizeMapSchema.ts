import { z } from 'zod';

import { fontSizeKeySchema } from './fontSizeKeySchema';
import { sizeValueSchema } from './sizeValueSchema';

/**
 * Zod schema for validating a font size mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key is a **font size key** (`fontSizeKeySchema`), one of:
 *     - `"small"`, `"medium"`, `"large"`.
 *     - `"extraSmall"`, `"extraLarge"`, `"extraExtraSmall"`, `"extraExtraLarge"`, etc.
 *   - The value is a **size value** (`sizeValueSchema`), which must be in `"Npx"` format (e.g., `"12px"`, `"16px"`).
 *
 * @example
 * fontSizeMapSchema.parse({
 *   small: "12px",
 *   medium: "14px",
 *   large: "16px",
 *   extraSmall: "10px",
 *   extraExtraLarge: "24px",
 * }); // ✅ Valid
 *
 * fontSizeMapSchema.parse({
 *   extraMedium: "15px", // ❌ Invalid (medium cannot have "extra")
 *   large: "16rem", // ❌ Invalid (must be in px)
 *   small: "tiny", // ❌ Invalid (not a numeric px value)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not a valid `fontSizeKeySchema` value.
 * - Any value is not a valid `sizeValueSchema` (`Npx` format).
 */
export const fontSizeMapSchema = z
  .record(fontSizeKeySchema, sizeValueSchema)
  .describe(
    'Mapping of font sizes with predefined keys and pixel-based values.',
  );
