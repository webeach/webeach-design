import { makeCssVariablesBody } from '../makeCssVariablesBody';

describe('makeCssVariablesBody', () => {
  test('should generate CSS variables for :root without extra selector', () => {
    const variables = {
      'primary-color': '#ff0000',
      'spacing-1x': '4px',
      'font-size': '16px',
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(
      ':root{--primary-color: #ff0000;--spacing-1x: 4px;--font-size: 16px}',
    );
  });

  test('should generate CSS variables with extra selector', () => {
    const variables = {
      'primary-color': '#0000ff',
      'border-radius': '8px',
    };

    const result = makeCssVariablesBody(variables, '[data-theme="dark"]');
    expect(result).toBe(
      ':root:is([data-theme="dark"]){--primary-color: #0000ff;--border-radius: 8px}',
    );
  });

  test('should handle empty variable map', () => {
    const result = makeCssVariablesBody({});
    expect(result).toBe(':root{}');
  });

  test('should handle numeric values correctly', () => {
    const variables = {
      opacity: 0.8,
      'z-index': 10,
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(':root{--opacity: 0.8;--z-index: 10}');
  });

  test('should handle special characters in keys correctly', () => {
    const variables = {
      'text-color_primary': '#333',
      'text-color-secondary': '#666',
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(
      ':root{--text-color_primary: #333;--text-color-secondary: #666}',
    );
  });
});
