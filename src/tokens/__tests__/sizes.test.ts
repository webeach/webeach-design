import { BorderSize, Rounding, Size, Spacing } from '../sizes';

import { borderSizeMapSchema } from './schemas/borderSizeMapSchema';
import { sizeMapSchema } from './schemas/sizeMapSchema';

describe('Sizes validation', () => {
  test('Validate Size', () => {
    expect(() => sizeMapSchema.parse(Size)).not.toThrow();
  });

  test('Validate BorderSize', () => {
    expect(() => borderSizeMapSchema.parse(BorderSize)).not.toThrow();
  });

  test('Validate Rounding', () => {
    expect(() => sizeMapSchema.parse(Rounding)).not.toThrow();
  });

  test('Validate Spacing', () => {
    expect(() => sizeMapSchema.parse(Spacing)).not.toThrow();
  });

  test('Snapshot Size', () => {
    expect(Size).toMatchSnapshot();
  });

  test('Snapshot BorderSize', () => {
    expect(BorderSize).toMatchSnapshot();
  });

  test('Snapshot Rounding', () => {
    expect(Rounding).toMatchSnapshot();
  });

  test('Snapshot Spacing', () => {
    expect(Spacing).toMatchSnapshot();
  });
});
