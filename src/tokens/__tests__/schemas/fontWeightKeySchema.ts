import { z } from 'zod';

/**
 * Zod schema for validating font weight keys.
 *
 * This schema ensures that:
 * - The value is one of the predefined **font weight keys**.
 * - Allowed values are:
 *   - `"thin"` → The lightest font weight.
 *   - `"extraLight"` → Slightly heavier than `"thin"`, but still very light.
 *   - `"light"` → A light font weight.
 *   - `"regular"` → The standard font weight (typically `400`).
 *   - `"medium"` → A weight between `"normal"` and `"bold"` (typically `500`).
 *   - `"semiBold"` → Slightly bolder than `"medium"` (typically `600`).
 *   - `"bold"` → A bold font weight (typically `700`).
 *   - `"extraBold"` → Heavier than `"bold"` (typically `800`).
 *   - `"black"` → The heaviest font weight (typically `900`).
 *
 * @example
 * fontWeightKeySchema.parse("thin"); // ✅ Valid
 * fontWeightKeySchema.parse("bold"); // ✅ Valid
 * fontWeightKeySchema.parse("extraBold"); // ✅ Valid
 * fontWeightKeySchema.parse("heaviest"); // ❌ Invalid (not in the enum)
 *
 * @throws ZodError if the font weight key is not one of the allowed values.
 */
export const fontWeightKeySchema = z
  .enum([
    'thin',
    'extraLight',
    'light',
    'regular',
    'medium',
    'semiBold',
    'bold',
    'extraBold',
    'black',
  ])
  .describe(
    'Allowed font weight keys: "thin", "extraLight", "light", "regular", "medium", "semiBold", "bold", "extraBold", "black".',
  );
