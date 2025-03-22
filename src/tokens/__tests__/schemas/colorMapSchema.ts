import { z } from 'zod';

import { colorKeySchema } from './colorKeySchema';
import { colorValueSchema } from './colorValueSchema';

/**
 * Zod schema for validating a color mapping object.
 *
 * This schema ensures that:
 * - The object keys follow the **color key format** (`colorKeySchema`):
 *   - Must be lowercase letters followed by a three-digit number.
 *   - Example: `"primary100"`, `"secondary2"`, `"danger5"`.
 * - The object values follow the **HSL color format** (`colorValueSchema`):
 *   - Must be in strict `hsl(H S% L% / alpha)` format.
 *   - Example: `"hsl(200 50% 40%)"`, `"hsl(120 75% 50% / 0.5)"`.
 *
 * @example
 * colorMapSchema.parse({
 *   primary1: "hsl(200 50% 40%)",
 *   danger5: "hsl(120 75% 50% / 0.5)"
 * }); // ✅ Valid
 *
 * colorMapSchema.parse({
 *   Primary1: "hsl(200, 50%, 40%)", // ❌ Invalid key (uppercase + comma format)
 *   secondary0: "hsl(180 30% 60%)" // ❌ Invalid key (leading zero in number)
 * }); // ❌ Throws a validation error
 *
 * @throws ZodError if any key or value does not conform to the expected format.
 */
export const colorMapSchema = z
  .record(colorKeySchema, colorValueSchema)
  .describe('Object mapping color keys to HSL values in strict format.');
