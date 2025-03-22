import { z } from 'zod';

/**
 * Zod schema for validating camelCase strings with numbers.
 *
 * This schema ensures that:
 * - The string follows **camelCase** naming convention.
 * - The first character **must be a lowercase letter (`a-z`)**.
 * - Each subsequent word **must start with an uppercase letter (`A-Z`)**.
 * - Numbers (`0-9`) are allowed **anywhere except as the first character**.
 * - No spaces, underscores, dashes, or other separators are allowed.
 * - Example valid values: `"helloWorld"`, `"thisIsCamelCase"`, `"variable123"`, `"count1Item"`, `"userID42"`.
 * - Example invalid values:
 *   - `"HelloWorld"` ❌ (starts with an uppercase letter)
 *   - `"snake_case"` ❌ (contains an underscore)
 *   - `"kebab-case"` ❌ (contains a dash)
 *   - `"hello_world"` ❌ (contains an underscore)
 *   - `"UPPERCASE"` ❌ (all uppercase letters)
 *   - `"123camelCase"` ❌ (starts with a number)
 *
 * @example
 * camelCaseStringSchema.parse("helloWorld"); // ✅ Valid
 * camelCaseStringSchema.parse("variable123"); // ✅ Valid
 * camelCaseStringSchema.parse("count1Item"); // ✅ Valid
 * camelCaseStringSchema.parse("userID42"); // ✅ Valid
 * camelCaseStringSchema.parse("123camelCase"); // ❌ Invalid (must start with a letter)
 * camelCaseStringSchema.parse("snake_case"); // ❌ Invalid (underscore not allowed)
 *
 * @throws ZodError if the string is not in camelCase format.
 */
export const camelCaseStringSchema = z
  .string()
  .regex(/^[a-z0-9]+([A-Z][a-z0-9]*)*$/, {
    message:
      'String must be in camelCase format (starting with a letter, no separators).',
  })
  .describe(
    'A string following camelCase format with numbers (e.g., "helloWorld", "count1Item").',
  );
