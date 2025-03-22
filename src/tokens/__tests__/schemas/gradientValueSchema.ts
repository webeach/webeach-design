import { z } from 'zod';

import { colorValueSchema } from './colorValueSchema';

/**
 * Zod schema for validating gradient color values.
 *
 * This schema ensures that:
 * - The value is a **tuple** consisting of **exactly two HSL color strings**.
 * - Each color in the tuple must conform to the `colorValueSchema` (strict HSL format).
 * - The format of each color must be `hsl(H S% L% / alpha)`.
 * - Old HSL formats like `hsl(H, S%, L%)` or `hsla(H, S%, L%, alpha)` are **invalid**.
 *
 * @example
 * gradientValueSchema.parse(["hsl(200 50% 40%)", "hsl(220 60% 50%)"]); // ✅ Valid
 * gradientValueSchema.parse(["hsl(120 75% 50% / 0.5)", "hsl(300 80% 40%)"]); // ✅ Valid
 *
 * @throws ZodError if the gradient value is not a tuple of two valid HSL colors.
 */
export const gradientValueSchema = z
  .tuple([colorValueSchema, colorValueSchema])
  .describe('Gradient color value as a tuple of two HSL color strings');
