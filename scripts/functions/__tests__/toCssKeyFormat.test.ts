import { toCssKeyFormat } from '../toCssKeyFormat';

describe('toCssKeyFormat', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(toCssKeyFormat('fooBar')).toBe('foo-bar');
    expect(toCssKeyFormat('someVariableName')).toBe('some-variable-name');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(toCssKeyFormat('FooBar')).toBe('foo-bar');
    expect(toCssKeyFormat('AnotherTestString')).toBe('another-test-string');
  });

  test('should insert hyphen before numbers', () => {
    expect(toCssKeyFormat('neutral1')).toBe('neutral-1');
    expect(toCssKeyFormat('version42')).toBe('version-42');
    expect(toCssKeyFormat('fontSize24')).toBe('font-size-24');
  });

  test('should handle numbers with decimals', () => {
    expect(toCssKeyFormat('1.5x')).toBe('1-5x');
    expect(toCssKeyFormat('3.14value')).toBe('3-14value');
  });

  test('should keep single character prefixes unchanged', () => {
    expect(toCssKeyFormat('1x')).toBe('1x');
    expect(toCssKeyFormat('4y')).toBe('4y');
  });

  test('should replace dots with hyphens', () => {
    expect(toCssKeyFormat('some.value')).toBe('some-value');
    expect(toCssKeyFormat('file.name.extension')).toBe('file-name-extension');
  });

  test('should replace slashes with hyphens', () => {
    expect(toCssKeyFormat('some/value')).toBe('some-value');
    expect(toCssKeyFormat('path/to/file')).toBe('path-to-file');
    expect(toCssKeyFormat('nested\\folder\\file')).toBe('nested-folder-file');
  });

  test('should remove leading and trailing hyphens', () => {
    expect(toCssKeyFormat('-SomeValue-')).toBe('some-value');
    expect(toCssKeyFormat('--Another--Test--')).toBe('another-test');
  });

  test('should replace multiple consecutive hyphens with a single hyphen', () => {
    expect(toCssKeyFormat('some--value')).toBe('some-value');
    expect(toCssKeyFormat('foo---bar')).toBe('foo-bar');
  });

  test('should replace underscores with hyphens', () => {
    expect(toCssKeyFormat('some_value')).toBe('some_value');
    expect(toCssKeyFormat('__underscore__test__')).toBe('_underscore_test');
  });

  test('should remove special characters', () => {
    expect(toCssKeyFormat('weird@@case!')).toBe('weirdcase');
    expect(toCssKeyFormat('test#value$%^')).toBe('testvalue');
    expect(toCssKeyFormat('hello@world.com')).toBe('helloworld-com');
  });

  test('should return lowercase output', () => {
    expect(toCssKeyFormat('MixedCASE')).toBe('mixed-case');
    expect(toCssKeyFormat('UPPERCASESTRING')).toBe('uppercasestring');
  });

  test('should handle empty strings gracefully', () => {
    expect(toCssKeyFormat('')).toBe('');
  });
});
