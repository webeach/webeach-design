import { z } from 'zod';

import { borderSizeKeySchema } from './borderSizeKeySchema';
import { sizeValueSchema } from './sizeValueSchema';

/**
 * Zod schema for validating a border size mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key is a **border size key** (`borderSizeKeySchema`), one of:
 *     - `"thin"` → The smallest border size.
 *     - `"regular"` → A standard border size.
 *     - `"medium"` → A slightly thicker border.
 *     - `"bold"` → A bold border.
 *     - `"extraBold"` → The thickest border.
 *   - The value is a **size value** (`sizeValueSchema`), which must be in `"Npx"` format (e.g., `"1px"`, `"2px"`).
 *
 * @example
 * borderSizeMapSchema.parse({
 *   thin: "1px",
 *   regular: "2px",
 *   medium: "4px",
 *   bold: "6px",
 *   extraBold: "8px",
 * }); // ✅ Valid
 *
 * borderSizeMapSchema.parse({
 *   thin: "2rem", // ❌ Invalid (must be in px)
 *   regular: "4px",
 * }); // ❌ Invalid (invalid value format)
 *
 * @throws ZodError if:
 * - Any key is not a valid `borderSizeKeySchema` value.
 * - Any value is not a valid `sizeValueSchema` (`Npx` format).
 */
export const borderSizeMapSchema = z
  .record(borderSizeKeySchema, sizeValueSchema)
  .describe('Mapping of border sizes with predefined keys and pixel values.');
