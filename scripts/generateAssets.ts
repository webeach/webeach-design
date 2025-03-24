import path from 'node:path';

import { getModeColor, getModeGradient, ModeTypeKey } from '../src';
import { MODE_TYPES } from '../src/constants/common';

import { makeColoredRectSvgFile } from './functions/makeColoredRectSvgFile';
import { makeGradientRectSvgFile } from './functions/makeGradientRectSvgFile';
import { toCssKeyFormat } from './functions/toCssKeyFormat';

const ASSETS_DIR = './assets';

const modeTypeShortAliasMap: Record<ModeTypeKey, string> = {
  dark: 'dm',
  light: 'lm',
};

async function generateAssets() {
  for (const modeType of MODE_TYPES) {
    const colorMap = getModeColor(modeType);
    const gradientMap = getModeGradient(modeType);

    await Promise.all([
      ...Object.entries(colorMap).map(async ([key, color]) => {
        const fileName = `color-${modeTypeShortAliasMap[modeType]}-${toCssKeyFormat(key)}.svg`;
        await makeColoredRectSvgFile(color, path.resolve(ASSETS_DIR, fileName));
      }),
      ...Object.entries(gradientMap).map(async ([key, colors]) => {
        const fileName = `gradient-${modeTypeShortAliasMap[modeType]}-${toCssKeyFormat(key)}.svg`;
        await makeGradientRectSvgFile(
          colors,
          path.resolve(ASSETS_DIR, fileName),
        );
      }),
    ]);
  }
}

await generateAssets();
