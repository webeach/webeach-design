import { DarkModeColor, LightModeColor } from '../colors';

import { colorMapSchema } from './schemas/colorMapSchema';

describe('Colors validation', () => {
  test('Validate DarkModeColor', () => {
    expect(() => colorMapSchema.parse(DarkModeColor)).not.toThrow();
  });

  test('Validate LightModeColor', () => {
    expect(() => colorMapSchema.parse(LightModeColor)).not.toThrow();
  });

  test('DarkModeColor and LightModeColor should have identical keys', () => {
    const darkColorKeys = Object.keys(DarkModeColor).sort();
    const lightColorKeys = Object.keys(LightModeColor).sort();

    expect(darkColorKeys).toEqual(lightColorKeys);
  });

  test('Snapshot DarkModeColor', () => {
    expect(DarkModeColor).toMatchSnapshot();
  });

  test('Snapshot LightModeColor', () => {
    expect(LightModeColor).toMatchSnapshot();
  });
});
