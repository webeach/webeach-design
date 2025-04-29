import { z } from 'zod';

/**
 * Zod schema for validating color key names.
 *
 * This schema ensures that:
 * - The color key consists of lowercase letters followed by a **number from 1 to 10**.
 * - The numeric suffix must be a **single digit (1-9) or "10"**.
 * - The prefix must be **only lowercase letters** (e.g., `"primary"`, `"secondary"`).
 * - Example valid values: `"primary1"`, `"secondary5"`, `"danger10"`.
 * - Example invalid values:
 *   - `"Primary1"` ❌ (contains uppercase letters)
 *   - `"secondary0"` ❌ (zero is not allowed)
 *   - `"primary11"` ❌ (out of range, should be from `1` to `10`)
 *   - `"neutral"` ❌ (no numeric suffix)
 *
 * @example
 * colorKeySchema.parse("primary1"); // ✅ Valid
 * colorKeySchema.parse("danger5");  // ✅ Valid
 * colorKeySchema.parse("neutral10");  // ✅ Valid
 * colorKeySchema.parse("Primary1"); // ❌ Invalid (uppercase letter)
 * colorKeySchema.parse("secondary0"); // ❌ Invalid (zero is not allowed)
 * colorKeySchema.parse("primary11"); // ❌ Invalid (out of range)
 *
 * @throws ZodError if the color key string is invalid.
 */
export const colorKeySchema = z
  .string()
  .regex(/^[a-z]+(10|[1-9])$/, 'Invalid color key format')
  .describe(
    "Color key format: lowercase letters followed by a number from 1 to 10 (e.g., 'primary1', 'secondary10').",
  );
