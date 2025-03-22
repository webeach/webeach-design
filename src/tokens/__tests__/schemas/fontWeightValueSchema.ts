import { z } from 'zod';

/**
 * Zod schema for validating font weight values.
 *
 * This schema ensures that:
 * - The value is a **number** representing a valid CSS font weight.
 * - The number must be **between 100 and 900**, inclusive.
 * - The number must be a **multiple of 100** (i.e., `100, 200, 300, ... 900`).
 * - Values outside this range or non-multiples of `100` are **invalid**.
 *
 * @example
 * fontWeightValueSchema.parse(100); // ✅ Valid
 * fontWeightValueSchema.parse(400); // ✅ Valid
 * fontWeightValueSchema.parse(900); // ✅ Valid
 * fontWeightValueSchema.parse(450); // ❌ Invalid (not a multiple of 100)
 * fontWeightValueSchema.parse(50); // ❌ Invalid (out of range)
 * fontWeightValueSchema.parse(1000); // ❌ Invalid (out of range)
 *
 * @throws ZodError if the font weight value is not between `100` and `900` or not a multiple of `100`.
 */
export const fontWeightValueSchema = z
  .number()
  .refine((value) => value >= 100 && value <= 900 && value % 100 === 0, {
    message: 'Font weight must be a multiple of 100 between 100 and 900.',
  })
  .describe(
    'Font weight value must be a multiple of 100 in the range 100–900.',
  );
