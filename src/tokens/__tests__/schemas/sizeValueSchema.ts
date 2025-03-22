import { z } from 'zod';

/**
 * Zod schema for validating size values.
 *
 * This schema ensures that:
 * - The value is a **string** representing a numeric size in pixels.
 * - The number must be a **positive integer (≥1)** (e.g., `"4px"`, `"10px"`).
 * - The value **must end with "px"** (other units like `%`, `rem`, `em` are **not allowed**).
 * - **Zero (`0px`) is not allowed**.
 * - **Decimals are not allowed** (e.g., `"2.5px"` is invalid).
 * - Only numeric characters and the `"px"` suffix are allowed.
 * - Example valid values: `"4px"`, `"10px"`, `"32px"`.
 * - Example invalid values:
 *   - `"0px"` ❌ (zero is not allowed)
 *   - `"2.5px"` ❌ (decimals not allowed)
 *   - `"4%"` ❌ (percentage not allowed)
 *   - `"10rem"` ❌ (`rem` unit not allowed)
 *   - `"8em"` ❌ (`em` unit not allowed)
 *   - `"16"` ❌ (missing `"px"`)
 *
 * @example
 * sizeValueSchema.parse("4px"); // ✅ Valid
 * sizeValueSchema.parse("10px"); // ✅ Valid
 * sizeValueSchema.parse("32px"); // ✅ Valid
 * sizeValueSchema.parse("0px"); // ❌ Invalid (zero is not allowed)
 * sizeValueSchema.parse("2.5px"); // ❌ Invalid (decimals not allowed)
 * sizeValueSchema.parse("4%"); // ❌ Invalid (percentage not allowed)
 * sizeValueSchema.parse("10rem"); // ❌ Invalid (`rem` unit not allowed)
 * sizeValueSchema.parse("8em"); // ❌ Invalid (`em` unit not allowed)
 * sizeValueSchema.parse("16"); // ❌ Invalid (missing `"px"`)
 *
 * @throws ZodError if the size value string is invalid.
 */
export const sizeValueSchema = z
  .string()
  .regex(
    /^[1-9]\d*px$/,
    'Invalid size value format. Must be a positive integer followed by "px".',
  )
  .describe(
    'Size value format: positive integer followed by "px" (e.g., "4px", "10px").',
  );
