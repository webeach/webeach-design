import path from 'node:path';

import {
  BorderSize,
  DarkModeColor,
  DarkModeGradient,
  getModeColor,
  getModeGradient,
  LightModeColor,
  LightModeGradient,
  ModeTypeKey,
  Rounding,
  Size,
  Spacing,
  Typography,
} from '../src';
import { MODE_TYPES } from '../src/constants/common';

import { makeCssVariablesFile } from './functions/makeCssVariablesFile';
import { prepareCssGradientVariables } from './functions/prepareCssGradientVariables';
import { prepareCssTypographyVariables } from './functions/prepareCssTypographyVariables';
import { prepareCssVariables } from './functions/prepareCssVariables';

// Path to the output CSS file
const CSS_FILE_PATH = path.resolve('./lib/tokens.css');

// Mapping mode type names to short aliases
const modeTypeShortAliasMap: Record<ModeTypeKey, string> = {
  dark: 'dm', // Dark mode
  light: 'lm', // Light mode
};

async function generateCss() {
  await makeCssVariablesFile(
    CSS_FILE_PATH,
    [
      {
        variables: {
          // Generate CSS variables for dark and light colors
          ...prepareCssVariables(DarkModeColor, {
            keyPrefix: `${modeTypeShortAliasMap.dark}-color`,
          }),
          ...prepareCssVariables(LightModeColor, {
            keyPrefix: `${modeTypeShortAliasMap.light}-color`,
          }),

          // Generate CSS variables for sizes
          ...prepareCssVariables(Size, {
            keyPrefix: 'size',
          }),

          // Generate CSS variables for border sizes linked to size values
          ...prepareCssVariables(BorderSize, {
            keyPrefix: 'border-size',
            linkedObject: Size,
            linkedKeyPrefix: 'size',
          }),

          // Generate CSS variables for rounding linked to size values
          ...prepareCssVariables(Rounding, {
            keyPrefix: 'rounding',
            linkedObject: Size,
            linkedKeyPrefix: 'size',
          }),

          // Generate CSS variables for spacing linked to size values
          ...prepareCssVariables(Spacing, {
            keyPrefix: 'spacing',
            linkedObject: Size,
            linkedKeyPrefix: 'size',
          }),

          // Generate CSS variables for gradients in dark and light modes
          ...prepareCssGradientVariables(DarkModeGradient, DarkModeColor, {
            keyPrefix: `${modeTypeShortAliasMap.dark}-gradient`,
            colorKeyPrefix: `${modeTypeShortAliasMap.dark}-color`,
          }),
          ...prepareCssGradientVariables(LightModeGradient, LightModeColor, {
            keyPrefix: `${modeTypeShortAliasMap.light}-gradient`,
            colorKeyPrefix: `${modeTypeShortAliasMap.light}-color`,
          }),

          // Generate CSS variables for typography
          ...prepareCssTypographyVariables(Typography.H1, {
            keyPrefix: 'typography-h1',
          }),
          ...prepareCssTypographyVariables(Typography.H2, {
            keyPrefix: 'typography-h2',
          }),
          ...prepareCssTypographyVariables(Typography.H3, {
            keyPrefix: 'typography-h3',
          }),
          ...prepareCssTypographyVariables(Typography.H4, {
            keyPrefix: 'typography-h4',
          }),
          ...prepareCssTypographyVariables(Typography.H5, {
            keyPrefix: 'typography-h5',
          }),
          ...prepareCssTypographyVariables(Typography.Body.extraSmall, {
            keyPrefix: 'typography-body-extra-small',
          }),
          ...prepareCssTypographyVariables(Typography.Body.small, {
            keyPrefix: 'typography-body-small',
          }),
          ...prepareCssTypographyVariables(Typography.Body.medium, {
            keyPrefix: 'typography-body-medium',
          }),
          ...prepareCssTypographyVariables(Typography.Code, {
            keyPrefix: 'typography-code',
          }),
        },
      },

      // Generate CSS variables for each mode (e.g., `data-ui-mode="dark"`)
      ...MODE_TYPES.map((modeType) => ({
        selector: `[data-ui-mode="${modeType}"]`,
        variables: {
          // Generate CSS variables for mode-specific colors
          ...prepareCssVariables(getModeColor(modeType), {
            keyPrefix: 'color',
            linkedObject: getModeColor(modeType),
            linkedKeyPrefix: `${modeTypeShortAliasMap[modeType]}-color`,
          }),

          // Generate CSS variables for mode-specific gradients
          ...prepareCssVariables(getModeGradient(modeType), {
            keyPrefix: 'gradient',
            linkedObject: getModeGradient(modeType),
            linkedKeyPrefix: `${modeTypeShortAliasMap[modeType]}-gradient`,
          }),
        },
      })),
    ],
    {
      format: true, // Automatically format the CSS before saving
    },
  );
}

// Run the CSS generation process
await generateCss();
