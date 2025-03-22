import { z } from 'zod';

/**
 * Regular expression for validating HSL color strings in the strict modern format:
 * - Must be in the format: `hsl(H S% L% / alpha)`
 * - Uses spaces instead of commas (old format `hsl(H, S%, L%)` is invalid)
 * - Optional alpha value must be in the range `0.0` to `1.0`
 * - Hue (H) must be an integer from `0` to `360`
 * - Saturation (S) and Lightness (L) must be percentages from `0%` to `100%`
 */
const COLOR_HSL_PATTERN = /^hsl\((\d+) (\d+)% (\d+)%(?: \/ ([01](\.\d+)?))?\)$/;

/**
 * Zod schema for validating HSL color strings in strict format.
 *
 * This schema ensures that:
 * - The format is **strict HSL** (`hsl(H S% L% / alpha)`)
 * - Old formats like `hsl(H, S%, L%)` and `hsla(H, S%, L%, alpha)` are **invalid**
 * - Hue (H) is an integer between `0` and `360`
 * - Saturation (S) and Lightness (L) are percentages from `0%` to `100%`
 * - Alpha (optional) is a float between `0.0` and `1.0`
 *
 * @example
 * colorValueSchema.parse("hsl(200 50% 40%)"); // ✅ Valid
 * colorValueSchema.parse("hsl(120 75% 50% / 0.5)"); // ✅ Valid
 * colorValueSchema.parse("hsl(360 100% 100% / 1.0)"); // ✅ Valid
 *
 * @throws ZodError if the HSL color string is invalid.
 */
export const colorValueSchema = z
  .string()
  .refine(
    (value) => {
      // Match the string against the HSL regex pattern
      const matches = value.match(COLOR_HSL_PATTERN);

      // If there's no match, the format is invalid
      if (!matches) return false;

      // Extract numerical values from the match
      const H = Number(matches[1]); // Hue (0-360)
      const S = Number(matches[2]); // Saturation (0-100%)
      const L = Number(matches[3]); // Lightness (0-100%)
      const alpha = matches[4] !== undefined ? Number(matches[4]) : 1; // Alpha (0.0 - 1.0)

      // Validate that extracted values are within correct ranges
      return (
        H >= 0 &&
        H <= 360 &&
        S >= 0 &&
        S <= 100 &&
        L >= 0 &&
        L <= 100 &&
        alpha >= 0 &&
        alpha <= 1
      );
    },
    { message: 'Invalid HSL color value' },
  )
  .describe('HSL color string in the format "hsl(H S% L% / alpha)"');
