import { z } from 'zod';

import { colorKeySchema } from './colorKeySchema';
import { gradientValueSchema } from './gradientValueSchema';

/**
 * Zod schema for validating a gradient color map.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key follows the `colorKeySchema` format (e.g., `"primary1"`, `"secondary5"`).
 *   - The value is a **tuple** of two HSL color strings validated by `gradientValueSchema`.
 * - The key structure enforces a naming convention for colors.
 * - The values ensure each gradient consists of exactly **two HSL colors**.
 *
 * @example
 * gradientMapSchema.parse({
 *   primary1: ["hsl(200 50% 40%)", "hsl(220 60% 50%)"], // ✅ Valid
 *   secondary3: ["hsl(120 75% 50% / 0.5)", "hsl(300 80% 40%)"], // ✅ Valid
 * });
 *
 * @throws ZodError if:
 * - Any key does not follow the `colorKeySchema` format.
 * - Any value is not a valid gradient (tuple of two HSL color strings).
 */
export const gradientMapSchema = z
  .record(colorKeySchema, gradientValueSchema)
  .describe('Map of gradient colors with validated keys and values');
