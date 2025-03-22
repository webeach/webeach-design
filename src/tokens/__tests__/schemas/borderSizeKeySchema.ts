import { z } from 'zod';

/**
 * Zod schema for validating border size keys.
 *
 * This schema ensures that:
 * - The value is one of the predefined **border size keys**.
 * - Allowed values are:
 *   - `"thin"` → The smallest border size.
 *   - `"regular"` → A standard border size.
 *   - `"medium"` → A slightly thicker border.
 *   - `"bold"` → A bold border.
 *   - `"extraBold"` → The thickest border.
 *
 * @example
 * borderSizeKeySchema.parse("thin"); // ✅ Valid
 * borderSizeKeySchema.parse("bold"); // ✅ Valid
 * borderSizeKeySchema.parse("extraBold"); // ✅ Valid
 * borderSizeKeySchema.parse("heavy"); // ❌ Invalid (not in the enum)
 *
 * @throws ZodError if the border size key is not one of the allowed values.
 */
export const borderSizeKeySchema = z
  .enum(['thin', 'regular', 'medium', 'bold', 'extraBold'])
  .describe(
    'Allowed border size keys: "thin", "regular", "medium", "bold", "extraBold".',
  );
