import { z } from 'zod';

/**
 * Zod schema for validating size keys.
 *
 * This schema ensures that:
 * - The value is a **string** representing a **numeric size key**.
 * - The number can be an **integer** (e.g., `"1x"`, `"10x"`) or a **decimal** (e.g., `"1.5x"`, `"2.75x"`).
 * - The value **must end with "x"**.
 * - Only numeric characters, a **single optional decimal point**, and the `"x"` suffix are allowed.
 * - Example valid values: `"1x"`, `"2.5x"`, `"10x"`.
 * - Example invalid values: `"x1"`, `"2x5"`, `"1..5x"`, `"1.5.5x"`, `"10"` (missing `"x"`).
 *
 * @example
 * sizeKeySchema.parse("1x"); // ✅ Valid
 * sizeKeySchema.parse("2.5x"); // ✅ Valid
 * sizeKeySchema.parse("10x"); // ✅ Valid
 * sizeKeySchema.parse("1.5.5x"); // ❌ Invalid (multiple decimal points)
 * sizeKeySchema.parse("10"); // ❌ Invalid (missing "x")
 * sizeKeySchema.parse("x10"); // ❌ Invalid (incorrect format)
 *
 * @throws ZodError if the size key string is invalid.
 */
export const sizeKeySchema = z
  .string()
  .regex(/^\d+(\.\d{1,3})?x$/, 'Invalid size key format')
  .describe(
    'Size key format: numeric value followed by "x" (e.g., "1x", "2.5x").',
  );
