import path from 'node:path';

import {
  BorderSize,
  DarkModeColor,
  DarkModeGradient,
  getThemedColor,
  getThemedGradient,
  LightModeColor,
  LightModeGradient,
  Rounding,
  Size,
  Spacing,
  ThemeKey,
  Typography,
} from '../src';
import { THEME_KEYS } from '../src/constants/common';

import { makeCssVariablesFile } from './functions/makeCssVariablesFile';
import { prepareCssGradientVariables } from './functions/prepareCssGradientVariables';
import { prepareCssTypographyVariables } from './functions/prepareCssTypographyVariables';
import { prepareCssVariables } from './functions/prepareCssVariables';

// Path to the output CSS file
const CSS_FILE_PATH = path.resolve('./lib/tokens.css');

// Mapping theme names to short aliases
const themeShortAliasMap: Record<ThemeKey, string> = {
  dark: 'dm', // Dark theme
  light: 'lm', // Light theme
};

async function generateCss() {
  await makeCssVariablesFile(
    CSS_FILE_PATH,
    [
      {
        variables: {
          // Generate CSS variables for dark and light colors
          ...prepareCssVariables(DarkModeColor, {
            keyPrefix: `color-${themeShortAliasMap.dark}`,
          }),
          ...prepareCssVariables(LightModeColor, {
            keyPrefix: `color-${themeShortAliasMap.light}`,
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

          // Generate CSS variables for gradients in dark and light themes
          ...prepareCssGradientVariables(DarkModeGradient, DarkModeColor, {
            keyPrefix: 'gradient-dm',
            colorKeyPrefix: `color-${themeShortAliasMap.dark}`,
          }),
          ...prepareCssGradientVariables(LightModeGradient, LightModeColor, {
            keyPrefix: 'gradient-lm',
            colorKeyPrefix: `color-${themeShortAliasMap.light}`,
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

      // Generate CSS variables for each theme (e.g., `data-theme="dark"`)
      ...THEME_KEYS.map((themeKey) => ({
        selector: `[data-theme="${themeKey}"]`,
        variables: {
          // Generate CSS variables for theme-specific colors
          ...prepareCssVariables(getThemedColor(themeKey), {
            keyPrefix: 'themed-color',
            linkedObject: getThemedColor(themeKey),
            linkedKeyPrefix: `color-${themeShortAliasMap[themeKey]}`,
          }),

          // Generate CSS variables for theme-specific gradients
          ...prepareCssVariables(getThemedGradient(themeKey), {
            keyPrefix: 'themed-gradient',
            linkedObject: getThemedGradient(themeKey),
            linkedKeyPrefix: `gradient-${themeShortAliasMap[themeKey]}`,
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
