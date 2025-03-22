import { z } from 'zod';

import { sizeKeySchema } from './sizeKeySchema';
import { sizeValueSchema } from './sizeValueSchema';

/**
 * Zod schema for validating size mappings.
 *
 * This schema ensures that:
 * - The key is a **size key** in the format `"Nx"` (e.g., `"1x"`, `"2x"`, `"3x"`).
 * - The value is a **pixel value** (`"4px"`, `"8px"`, `"12px"`).
 * - The value must be **exactly `key * 4px`**.
 *
 * @example
 * sizeMapSchema.parse({ "1x": "4px", "2x": "8px" }); // ✅ Valid
 * sizeMapSchema.parse({ "3x": "10px" }); // ❌ Invalid (should be `"12px"`)
 *
 * @throws ZodError if any key-value pair does not follow the `Nx -> N*4px` rule.
 */
export const sizeMapSchema = z
  .record(sizeKeySchema, sizeValueSchema)
  .refine((obj) => {
    return Object.entries(obj).every(([key, value]) => {
      const parsedKey = Number.parseFloat(key);
      const parsedValue = Number.parseFloat(value);

      if (Number.isNaN(parsedKey) || Number.isNaN(parsedValue)) {
        return false;
      }

      return parsedKey * 4 === parsedValue;
    });
  }, 'Invalid size mapping: each value must be exactly key * 4px');
