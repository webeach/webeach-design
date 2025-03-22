import { z } from 'zod';

import { fontWeightKeySchema } from './fontWeightKeySchema';
import { fontWeightValueSchema } from './fontWeightValueSchema';

/**
 * Zod schema for validating a font weight mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key is a **font weight key** (`fontWeightKeySchema`), one of:
 *     - `"thin"`, `"extraLight"`, `"light"`, `"normal"`, `"medium"`, `"semiBold"`, `"bold"`, `"extraBold"`, `"black"`.
 *   - The value is a **font weight number** (`fontWeightValueSchema`), which must be:
 *     - A **multiple of 100** (`100, 200, ..., 900`).
 *     - In the **range 100–900**.
 *
 * @example
 * fontWeightMapSchema.parse({
 *   thin: 100,
 *   extraLight: 200,
 *   light: 300,
 *   normal: 400,
 *   medium: 500,
 *   semiBold: 600,
 *   bold: 700,
 *   extraBold: 800,
 *   black: 900,
 * }); // ✅ Valid
 *
 * fontWeightMapSchema.parse({
 *   thin: 50, // ❌ Invalid (must be between 100 and 900)
 *   extraBold: 850, // ❌ Invalid (must be a multiple of 100)
 *   customWeight: 400, // ❌ Invalid (unknown key)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not a valid `fontWeightKeySchema` value.
 * - Any value is not a valid `fontWeightValueSchema` (must be a multiple of `100` and within `100–900`).
 */
export const fontWeightMapSchema = z
  .record(fontWeightKeySchema, fontWeightValueSchema)
  .describe(
    'Mapping of font weights with predefined keys and numeric values (100–900).',
  );
