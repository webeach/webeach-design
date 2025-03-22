import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Typography,
} from '../typography';

import { fontFamilyMapSchema } from './schemas/fontFamilyMapSchema';
import { fontSizeMapSchema } from './schemas/fontSizeMapSchema';
import { fontWeightMapSchema } from './schemas/fontWeightMapSchema';
import { lineHeightMapSchema } from './schemas/lineHeightMapSchema';
import { typographyMapSchema } from './schemas/typographyMapSchema';

describe('Typography validation', () => {
  test('Validate FontFamily', () => {
    expect(() => fontFamilyMapSchema.parse(FontFamily)).not.toThrow();
  });

  test('Validate FontSize', () => {
    expect(() => fontSizeMapSchema.parse(FontSize)).not.toThrow();
  });

  test('Validate FontWeight', () => {
    expect(() => fontWeightMapSchema.parse(FontWeight)).not.toThrow();
  });

  test('Validate LineHeight', () => {
    expect(() => lineHeightMapSchema.parse(LineHeight)).not.toThrow();
  });

  test('Validate Typography', () => {
    expect(() => typographyMapSchema.parse(Typography)).not.toThrow();
  });

  test('Snapshot FontFamily', () => {
    expect(FontFamily).toMatchSnapshot();
  });

  test('Snapshot FontSize', () => {
    expect(FontFamily).toMatchSnapshot();
  });

  test('Snapshot FontWeight', () => {
    expect(FontWeight).toMatchSnapshot();
  });

  test('Snapshot LineHeight', () => {
    expect(LineHeight).toMatchSnapshot();
  });

  test('Snapshot Typography', () => {
    expect(Typography).toMatchSnapshot();
  });
});
