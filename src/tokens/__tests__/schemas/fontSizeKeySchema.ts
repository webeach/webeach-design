import { z } from 'zod';

/**
 * Zod schema for validating font size keys.
 *
 * This schema ensures that:
 * - The key is a **string** representing a predefined font size category.
 * - Allowed values are:
 *   - `"small"` → A small font size.
 *   - `"medium"` → A standard font size.
 *   - `"large"` → A large font size.
 *   - `"extraSmall"` → A size smaller than `"small"`.
 *   - `"extraLarge"` → A size larger than `"large"`.
 *   - `"extraExtraSmall"`, `"extraExtraExtraSmall"`, etc. → Multiple `"extra"` prefixes are valid.
 *   - `"extraExtraLarge"`, `"extraExtraExtraLarge"`, etc. → Multiple `"extra"` prefixes are valid.
 * - **`extraMedium` is invalid** because `"medium"` cannot be modified with `"extra"`.
 * - The pattern **does not allow undefined or arbitrary values**.
 *
 * @example
 * fontSizeKeySchema.parse("small"); // ✅ Valid
 * fontSizeKeySchema.parse("medium"); // ✅ Valid
 * fontSizeKeySchema.parse("large"); // ✅ Valid
 * fontSizeKeySchema.parse("extraSmall"); // ✅ Valid
 * fontSizeKeySchema.parse("extraExtraLarge"); // ✅ Valid
 * fontSizeKeySchema.parse("extraExtraExtraLarge"); // ✅ Valid
 * fontSizeKeySchema.parse("extraMedium"); // ❌ Invalid (cannot modify "medium")
 * fontSizeKeySchema.parse("tiny"); // ❌ Invalid (not in the allowed values)
 *
 * @throws ZodError if the font size key is not one of the predefined values.
 */
export const fontSizeKeySchema = z
  .string()
  .regex(/^medium|small|large|(extra(Extra)*(Small|Large))$/, {
    message:
      'Invalid font size key. Must be one of: "small", "medium", "large", "extraSmall", "extraLarge", "extraExtraSmall", "extraExtraLarge", etc.',
  })
  .describe(
    'Font size key format: predefined sizes such as "small", "medium", "large", or variations with "extra".',
  );
