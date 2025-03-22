import path from 'node:path';

import { getThemedColor, getThemedGradient, ThemeKey } from '../src';
import { THEME_KEYS } from '../src/constants/common';

import { makeColoredRectSvgFile } from './functions/makeColoredRectSvgFile';
import { makeGradientRectSvgFile } from './functions/makeGradientRectSvgFile';
import { toCssKeyFormat } from './functions/toCssKeyFormat';

const ASSETS_DIR = './assets';

const themeShortAliasMap: Record<ThemeKey, string> = {
  dark: 'dm',
  light: 'lm',
};

async function generateAssets() {
  for (const themeKey of THEME_KEYS) {
    const colorMap = getThemedColor(themeKey);
    const gradientMap = getThemedGradient(themeKey);

    await Promise.all([
      ...Object.entries(colorMap).map(async ([key, color]) => {
        const fileName = `color-${themeShortAliasMap[themeKey]}-${toCssKeyFormat(key)}.svg`;
        await makeColoredRectSvgFile(color, path.resolve(ASSETS_DIR, fileName));
      }),
      ...Object.entries(gradientMap).map(async ([key, colors]) => {
        const fileName = `gradient-${themeShortAliasMap[themeKey]}-${toCssKeyFormat(key)}.svg`;
        await makeGradientRectSvgFile(
          colors,
          path.resolve(ASSETS_DIR, fileName),
        );
      }),
    ]);
  }
}

await generateAssets();
