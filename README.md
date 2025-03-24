# `@webeach/design`

`@webeach/design` is a unified design tokens package used across the `webeach` ecosystem, including in `@webeach/uikit`.

It provides a standardized foundation for building visually consistent user interfaces with full support for both light and dark modes.

---

<!-- TOC -->
* [`@webeach/design`](#webeachdesign)
  * [📦 Installation](#-installation)
  * [🎨 Colors](#-colors)
    * [Light Mode Colors](#light-mode-colors)
    * [Dark Mode Colors](#dark-mode-colors)
    * [Mode Colors](#mode-colors)
  * [🌈 Gradients](#-gradients)
    * [Light Mode Gradients](#light-mode-gradients)
    * [Dark Mode Gradients](#dark-mode-gradients)
    * [Mode Gradients](#mode-gradients)
  * [📐 Sizes](#-sizes)
    * [Base Sizes](#base-sizes)
    * [Spacing Sizes](#spacing-sizes)
    * [Roundings](#roundings)
    * [Border Sizes](#border-sizes)
  * [✍️ Typography](#-typography)
  * [🎛️ Mode Switching](#-mode-switching)
  * [💡 Examples](#-examples)
    * [Colors](#colors)
    * [Gradients](#gradients)
    * [Sizes](#sizes)
    * [Typography](#typography)
  * [🧩 TypeScript Types](#-typescript-types)
  * [⚙️ Development](#-development)
    * [Build the library](#build-the-library)
    * [Watch mode](#watch-mode)
    * [Generate assets](#generate-assets)
  * [✅ Design Token Requirements](#-design-token-requirements)
  * [🔖 Releasing a New Version](#-releasing-a-new-version)
  * [👨‍💻 Author](#-author)
  * [📄 License](#-license)
<!-- TOC -->

---

## 📦 Installation

```sh
yarn add @webeach/design
```

---

## 🎨 Colors

Each color group includes 10 shades adapted for both light and dark modes:

- **Primary** — main brand accent colors
- **Secondary** — additional accent colors
- **Neutral** — neutral grayscale palette
- **Danger** — used for errors and critical states
- **Warning** — used for warnings and alerts
- **Success** — used for success messages and confirmations

### Light Mode Colors

The table below shows the color values for the light mode:

|                               Color                                |     Name     |              JS              |              CSS               |
|:------------------------------------------------------------------:|:------------:|:----------------------------:|:------------------------------:|
|  <img alt="" src="./assets/color-lm-neutral-1.svg" width="24px">   |  Neutral 1   |  `LightModeColor.neutral1`   |  `var(--lm-color-neutral-1)`   |
|  <img alt="" src="./assets/color-lm-neutral-2.svg" width="24px">   |  Neutral 2   |  `LightModeColor.neutral2`   |  `var(--lm-color-neutral-2)`   |
|  <img alt="" src="./assets/color-lm-neutral-3.svg" width="24px">   |  Neutral 3   |  `LightModeColor.neutral3`   |  `var(--lm-color-neutral-3)`   |
|  <img alt="" src="./assets/color-lm-neutral-4.svg" width="24px">   |  Neutral 4   |  `LightModeColor.neutral4`   |  `var(--lm-color-neutral-4)`   |
|  <img alt="" src="./assets/color-lm-neutral-5.svg" width="24px">   |  Neutral 5   |  `LightModeColor.neutral5`   |  `var(--lm-color-neutral-5)`   |
|  <img alt="" src="./assets/color-lm-neutral-6.svg" width="24px">   |  Neutral 6   |  `LightModeColor.neutral6`   |  `var(--lm-color-neutral-6)`   |
|  <img alt="" src="./assets/color-lm-neutral-7.svg" width="24px">   |  Neutral 7   |  `LightModeColor.neutral7`   |  `var(--lm-color-neutral-7)`   |
|  <img alt="" src="./assets/color-lm-neutral-8.svg" width="24px">   |  Neutral 8   |  `LightModeColor.neutral8`   |  `var(--lm-color-neutral-8)`   |
|  <img alt="" src="./assets/color-lm-neutral-9.svg" width="24px">   |  Neutral 9   |  `LightModeColor.neutral9`   |  `var(--lm-color-neutral-9)`   |
|  <img alt="" src="./assets/color-lm-neutral-10.svg" width="24px">  |  Neutral 10  |  `LightModeColor.neutral10`  |  `var(--lm-color-neutral-10)`  |
|  <img alt="" src="./assets/color-lm-primary-1.svg" width="24px">   |  Primary 1   |  `LightModeColor.primary1`   |  `var(--lm-color-primary-1)`   |
|  <img alt="" src="./assets/color-lm-primary-2.svg" width="24px">   |  Primary 2   |  `LightModeColor.primary2`   |  `var(--lm-color-primary-2)`   |
|  <img alt="" src="./assets/color-lm-primary-3.svg" width="24px">   |  Primary 3   |  `LightModeColor.primary3`   |  `var(--lm-color-primary-3)`   |
|  <img alt="" src="./assets/color-lm-primary-4.svg" width="24px">   |  Primary 4   |  `LightModeColor.primary4`   |  `var(--lm-color-primary-4)`   |
|  <img alt="" src="./assets/color-lm-primary-5.svg" width="24px">   |  Primary 5   |  `LightModeColor.primary5`   |  `var(--lm-color-primary-5)`   |
|  <img alt="" src="./assets/color-lm-primary-6.svg" width="24px">   |  Primary 6   |  `LightModeColor.primary6`   |  `var(--lm-color-primary-6)`   |
|  <img alt="" src="./assets/color-lm-primary-7.svg" width="24px">   |  Primary 7   |  `LightModeColor.primary7`   |  `var(--lm-color-primary-7)`   |
|  <img alt="" src="./assets/color-lm-primary-8.svg" width="24px">   |  Primary 8   |  `LightModeColor.primary8`   |  `var(--lm-color-primary-8)`   |
|  <img alt="" src="./assets/color-lm-primary-9.svg" width="24px">   |  Primary 9   |  `LightModeColor.primary9`   |  `var(--lm-color-primary-9)`   |
|  <img alt="" src="./assets/color-lm-primary-10.svg" width="24px">  |  Primary 10  |  `LightModeColor.primary10`  |  `var(--lm-color-primary-10)`  |
| <img alt="" src="./assets/color-lm-secondary-1.svg" width="24px">  | Secondary 1  | `LightModeColor.secondary1`  | `var(--lm-color-secondary-1)`  |
| <img alt="" src="./assets/color-lm-secondary-2.svg" width="24px">  | Secondary 2  | `LightModeColor.secondary2`  | `var(--lm-color-secondary-2)`  |
| <img alt="" src="./assets/color-lm-secondary-3.svg" width="24px">  | Secondary 3  | `LightModeColor.secondary3`  | `var(--lm-color-secondary-3)`  |
| <img alt="" src="./assets/color-lm-secondary-4.svg" width="24px">  | Secondary 4  | `LightModeColor.secondary4`  | `var(--lm-color-secondary-4)`  |
| <img alt="" src="./assets/color-lm-secondary-5.svg" width="24px">  | Secondary 5  | `LightModeColor.secondary5`  | `var(--lm-color-secondary-5)`  |
| <img alt="" src="./assets/color-lm-secondary-6.svg" width="24px">  | Secondary 6  | `LightModeColor.secondary6`  | `var(--lm-color-secondary-6)`  |
| <img alt="" src="./assets/color-lm-secondary-7.svg" width="24px">  | Secondary 7  | `LightModeColor.secondary7`  | `var(--lm-color-secondary-7)`  |
| <img alt="" src="./assets/color-lm-secondary-8.svg" width="24px">  | Secondary 8  | `LightModeColor.secondary8`  | `var(--lm-color-secondary-8)`  |
| <img alt="" src="./assets/color-lm-secondary-9.svg" width="24px">  | Secondary 9  | `LightModeColor.secondary9`  | `var(--lm-color-secondary-9)`  |
| <img alt="" src="./assets/color-lm-secondary-10.svg" width="24px"> | Secondary 10 | `LightModeColor.secondary10` | `var(--lm-color-secondary-10)` |
|   <img alt="" src="./assets/color-lm-danger-1.svg" width="24px">   |   Danger 1   |   `LightModeColor.danger1`   |   `var(--lm-color-danger-1)`   |
|   <img alt="" src="./assets/color-lm-danger-2.svg" width="24px">   |   Danger 2   |   `LightModeColor.danger2`   |   `var(--lm-color-danger-2)`   |
|   <img alt="" src="./assets/color-lm-danger-3.svg" width="24px">   |   Danger 3   |   `LightModeColor.danger3`   |   `var(--lm-color-danger-3)`   |
|   <img alt="" src="./assets/color-lm-danger-4.svg" width="24px">   |   Danger 4   |   `LightModeColor.danger4`   |   `var(--lm-color-danger-4)`   |
|   <img alt="" src="./assets/color-lm-danger-5.svg" width="24px">   |   Danger 5   |   `LightModeColor.danger5`   |   `var(--lm-color-danger-5)`   |
|   <img alt="" src="./assets/color-lm-danger-6.svg" width="24px">   |   Danger 6   |   `LightModeColor.danger6`   |   `var(--lm-color-danger-6)`   |
|   <img alt="" src="./assets/color-lm-danger-7.svg" width="24px">   |   Danger 7   |   `LightModeColor.danger7`   |   `var(--lm-color-danger-7)`   |
|   <img alt="" src="./assets/color-lm-danger-8.svg" width="24px">   |   Danger 8   |   `LightModeColor.danger8`   |   `var(--lm-color-danger-8)`   |
|   <img alt="" src="./assets/color-lm-danger-9.svg" width="24px">   |   Danger 9   |   `LightModeColor.danger9`   |   `var(--lm-color-danger-9)`   |
|  <img alt="" src="./assets/color-lm-danger-10.svg" width="24px">   |  Danger 10   |  `LightModeColor.danger10`   |  `var(--lm-color-danger-10)`   |
|  <img alt="" src="./assets/color-lm-warning-1.svg" width="24px">   |  Warning 1   |  `LightModeColor.warning1`   |  `var(--lm-color-warning-1)`   |
|  <img alt="" src="./assets/color-lm-warning-2.svg" width="24px">   |  Warning 2   |  `LightModeColor.warning2`   |  `var(--lm-color-warning-2)`   |
|  <img alt="" src="./assets/color-lm-warning-3.svg" width="24px">   |  Warning 3   |  `LightModeColor.warning3`   |  `var(--lm-color-warning-3)`   |
|  <img alt="" src="./assets/color-lm-warning-4.svg" width="24px">   |  Warning 4   |  `LightModeColor.warning4`   |  `var(--lm-color-warning-4)`   |
|  <img alt="" src="./assets/color-lm-warning-5.svg" width="24px">   |  Warning 5   |  `LightModeColor.warning5`   |  `var(--lm-color-warning-5)`   |
|  <img alt="" src="./assets/color-lm-warning-6.svg" width="24px">   |  Warning 6   |  `LightModeColor.warning6`   |  `var(--lm-color-warning-6)`   |
|  <img alt="" src="./assets/color-lm-warning-7.svg" width="24px">   |  Warning 7   |  `LightModeColor.warning7`   |  `var(--lm-color-warning-7)`   |
|  <img alt="" src="./assets/color-lm-warning-8.svg" width="24px">   |  Warning 8   |  `LightModeColor.warning8`   |  `var(--lm-color-warning-8)`   |
|  <img alt="" src="./assets/color-lm-warning-9.svg" width="24px">   |  Warning 9   |  `LightModeColor.warning9`   |  `var(--lm-color-warning-9)`   |
|  <img alt="" src="./assets/color-lm-warning-10.svg" width="24px">  |  Warning 10  |  `LightModeColor.warning10`  |  `var(--lm-color-warning-10)`  |
|  <img alt="" src="./assets/color-lm-success-1.svg" width="24px">   |  Success 1   |  `LightModeColor.success1`   |  `var(--lm-color-success-1)`   |
|  <img alt="" src="./assets/color-lm-success-2.svg" width="24px">   |  Success 2   |  `LightModeColor.success2`   |  `var(--lm-color-success-2)`   |
|  <img alt="" src="./assets/color-lm-success-3.svg" width="24px">   |  Success 3   |  `LightModeColor.success3`   |  `var(--lm-color-success-3)`   |
|  <img alt="" src="./assets/color-lm-success-4.svg" width="24px">   |  Success 4   |  `LightModeColor.success4`   |  `var(--lm-color-success-4)`   |
|  <img alt="" src="./assets/color-lm-success-5.svg" width="24px">   |  Success 5   |  `LightModeColor.success5`   |  `var(--lm-color-success-5)`   |
|  <img alt="" src="./assets/color-lm-success-6.svg" width="24px">   |  Success 6   |  `LightModeColor.success6`   |  `var(--lm-color-success-6)`   |
|  <img alt="" src="./assets/color-lm-success-7.svg" width="24px">   |  Success 7   |  `LightModeColor.success7`   |  `var(--lm-color-success-7)`   |
|  <img alt="" src="./assets/color-lm-success-8.svg" width="24px">   |  Success 8   |  `LightModeColor.success8`   |  `var(--lm-color-success-8)`   |
|  <img alt="" src="./assets/color-lm-success-9.svg" width="24px">   |  Success 9   |  `LightModeColor.success9`   |  `var(--lm-color-success-9)`   |
|  <img alt="" src="./assets/color-lm-success-10.svg" width="24px">  |  Success 10  |  `LightModeColor.success10`  |  `var(--lm-color-success-10)`  |

### Dark Mode Colors

The table below shows the color values for the dark mode:

|                               Color                                |     Name     |             JS              |              CSS               |
|:------------------------------------------------------------------:|:------------:|:---------------------------:|:------------------------------:|
|  <img alt="" src="./assets/color-dm-neutral-1.svg" width="24px">   |  Neutral 1   |  `DarkModeColor.neutral1`   |  `var(--dm-color-neutral-1)`   |
|  <img alt="" src="./assets/color-dm-neutral-2.svg" width="24px">   |  Neutral 2   |  `DarkModeColor.neutral2`   |  `var(--dm-color-neutral-2)`   |
|  <img alt="" src="./assets/color-dm-neutral-3.svg" width="24px">   |  Neutral 3   |  `DarkModeColor.neutral3`   |  `var(--dm-color-neutral-3)`   |
|  <img alt="" src="./assets/color-dm-neutral-4.svg" width="24px">   |  Neutral 4   |  `DarkModeColor.neutral4`   |  `var(--dm-color-neutral-4)`   |
|  <img alt="" src="./assets/color-dm-neutral-5.svg" width="24px">   |  Neutral 5   |  `DarkModeColor.neutral5`   |  `var(--dm-color-neutral-5)`   |
|  <img alt="" src="./assets/color-dm-neutral-6.svg" width="24px">   |  Neutral 6   |  `DarkModeColor.neutral6`   |  `var(--dm-color-neutral-6)`   |
|  <img alt="" src="./assets/color-dm-neutral-7.svg" width="24px">   |  Neutral 7   |  `DarkModeColor.neutral7`   |  `var(--dm-color-neutral-7)`   |
|  <img alt="" src="./assets/color-dm-neutral-8.svg" width="24px">   |  Neutral 8   |  `DarkModeColor.neutral8`   |  `var(--dm-color-neutral-8)`   |
|  <img alt="" src="./assets/color-dm-neutral-9.svg" width="24px">   |  Neutral 9   |  `DarkModeColor.neutral9`   |  `var(--dm-color-neutral-9)`   |
|  <img alt="" src="./assets/color-dm-neutral-10.svg" width="24px">  |  Neutral 10  |  `DarkModeColor.neutral10`  |  `var(--dm-color-neutral-10)`  |
|  <img alt="" src="./assets/color-dm-primary-1.svg" width="24px">   |  Primary 1   |  `DarkModeColor.primary1`   |  `var(--dm-color-primary-1)`   |
|  <img alt="" src="./assets/color-dm-primary-2.svg" width="24px">   |  Primary 2   |  `DarkModeColor.primary2`   |  `var(--dm-color-primary-2)`   |
|  <img alt="" src="./assets/color-dm-primary-3.svg" width="24px">   |  Primary 3   |  `DarkModeColor.primary3`   |  `var(--dm-color-primary-3)`   |
|  <img alt="" src="./assets/color-dm-primary-4.svg" width="24px">   |  Primary 4   |  `DarkModeColor.primary4`   |  `var(--dm-color-primary-4)`   |
|  <img alt="" src="./assets/color-dm-primary-5.svg" width="24px">   |  Primary 5   |  `DarkModeColor.primary5`   |  `var(--dm-color-primary-5)`   |
|  <img alt="" src="./assets/color-dm-primary-6.svg" width="24px">   |  Primary 6   |  `DarkModeColor.primary6`   |  `var(--dm-color-primary-6)`   |
|  <img alt="" src="./assets/color-dm-primary-7.svg" width="24px">   |  Primary 7   |  `DarkModeColor.primary7`   |  `var(--dm-color-primary-7)`   |
|  <img alt="" src="./assets/color-dm-primary-8.svg" width="24px">   |  Primary 8   |  `DarkModeColor.primary8`   |  `var(--dm-color-primary-8)`   |
|  <img alt="" src="./assets/color-dm-primary-9.svg" width="24px">   |  Primary 9   |  `DarkModeColor.primary9`   |  `var(--dm-color-primary-9)`   |
|  <img alt="" src="./assets/color-dm-primary-10.svg" width="24px">  |  Primary 10  |  `DarkModeColor.primary10`  |  `var(--dm-color-primary-10)`  |
| <img alt="" src="./assets/color-dm-secondary-1.svg" width="24px">  | Secondary 1  | `DarkModeColor.secondary1`  | `var(--dm-color-secondary-1)`  |
| <img alt="" src="./assets/color-dm-secondary-2.svg" width="24px">  | Secondary 2  | `DarkModeColor.secondary2`  | `var(--dm-color-secondary-2)`  |
| <img alt="" src="./assets/color-dm-secondary-3.svg" width="24px">  | Secondary 3  | `DarkModeColor.secondary3`  | `var(--dm-color-secondary-3)`  |
| <img alt="" src="./assets/color-dm-secondary-4.svg" width="24px">  | Secondary 4  | `DarkModeColor.secondary4`  | `var(--dm-color-secondary-4)`  |
| <img alt="" src="./assets/color-dm-secondary-5.svg" width="24px">  | Secondary 5  | `DarkModeColor.secondary5`  | `var(--dm-color-secondary-5)`  |
| <img alt="" src="./assets/color-dm-secondary-6.svg" width="24px">  | Secondary 6  | `DarkModeColor.secondary6`  | `var(--dm-color-secondary-6)`  |
| <img alt="" src="./assets/color-dm-secondary-7.svg" width="24px">  | Secondary 7  | `DarkModeColor.secondary7`  | `var(--dm-color-secondary-7)`  |
| <img alt="" src="./assets/color-dm-secondary-8.svg" width="24px">  | Secondary 8  | `DarkModeColor.secondary8`  | `var(--dm-color-secondary-8)`  |
| <img alt="" src="./assets/color-dm-secondary-9.svg" width="24px">  | Secondary 9  | `DarkModeColor.secondary9`  | `var(--dm-color-secondary-9)`  |
| <img alt="" src="./assets/color-dm-secondary-10.svg" width="24px"> | Secondary 10 | `DarkModeColor.secondary10` | `var(--dm-color-secondary-10)` |
|   <img alt="" src="./assets/color-dm-danger-1.svg" width="24px">   |   Danger 1   |   `DarkModeColor.danger1`   |   `var(--dm-color-danger-1)`   |
|   <img alt="" src="./assets/color-dm-danger-2.svg" width="24px">   |   Danger 2   |   `DarkModeColor.danger2`   |   `var(--dm-color-danger-2)`   |
|   <img alt="" src="./assets/color-dm-danger-3.svg" width="24px">   |   Danger 3   |   `DarkModeColor.danger3`   |   `var(--dm-color-danger-3)`   |
|   <img alt="" src="./assets/color-dm-danger-4.svg" width="24px">   |   Danger 4   |   `DarkModeColor.danger4`   |   `var(--dm-color-danger-4)`   |
|   <img alt="" src="./assets/color-dm-danger-5.svg" width="24px">   |   Danger 5   |   `DarkModeColor.danger5`   |   `var(--dm-color-danger-5)`   |
|   <img alt="" src="./assets/color-dm-danger-6.svg" width="24px">   |   Danger 6   |   `DarkModeColor.danger6`   |   `var(--dm-color-danger-6)`   |
|   <img alt="" src="./assets/color-dm-danger-7.svg" width="24px">   |   Danger 7   |   `DarkModeColor.danger7`   |   `var(--dm-color-danger-7)`   |
|   <img alt="" src="./assets/color-dm-danger-8.svg" width="24px">   |   Danger 8   |   `DarkModeColor.danger8`   |   `var(--dm-color-danger-8)`   |
|   <img alt="" src="./assets/color-dm-danger-9.svg" width="24px">   |   Danger 9   |   `DarkModeColor.danger9`   |   `var(--dm-color-danger-9)`   |
|  <img alt="" src="./assets/color-dm-danger-10.svg" width="24px">   |  Danger 10   |  `DarkModeColor.danger10`   |  `var(--dm-color-danger-10)`   |
|  <img alt="" src="./assets/color-dm-warning-1.svg" width="24px">   |  Warning 1   |  `DarkModeColor.warning1`   |  `var(--dm-color-warning-1)`   |
|  <img alt="" src="./assets/color-dm-warning-2.svg" width="24px">   |  Warning 2   |  `DarkModeColor.warning2`   |  `var(--dm-color-warning-2)`   |
|  <img alt="" src="./assets/color-dm-warning-3.svg" width="24px">   |  Warning 3   |  `DarkModeColor.warning3`   |  `var(--dm-color-warning-3)`   |
|  <img alt="" src="./assets/color-dm-warning-4.svg" width="24px">   |  Warning 4   |  `DarkModeColor.warning4`   |  `var(--dm-color-warning-4)`   |
|  <img alt="" src="./assets/color-dm-warning-5.svg" width="24px">   |  Warning 5   |  `DarkModeColor.warning5`   |  `var(--dm-color-warning-5)`   |
|  <img alt="" src="./assets/color-dm-warning-6.svg" width="24px">   |  Warning 6   |  `DarkModeColor.warning6`   |  `var(--dm-color-warning-6)`   |
|  <img alt="" src="./assets/color-dm-warning-7.svg" width="24px">   |  Warning 7   |  `DarkModeColor.warning7`   |  `var(--dm-color-warning-7)`   |
|  <img alt="" src="./assets/color-dm-warning-8.svg" width="24px">   |  Warning 8   |  `DarkModeColor.warning8`   |  `var(--dm-color-warning-8)`   |
|  <img alt="" src="./assets/color-dm-warning-9.svg" width="24px">   |  Warning 9   |  `DarkModeColor.warning9`   |  `var(--dm-color-warning-9)`   |
|  <img alt="" src="./assets/color-dm-warning-10.svg" width="24px">  |  Warning 10  |  `DarkModeColor.warning10`  |  `var(--dm-color-warning-10)`  |
|  <img alt="" src="./assets/color-dm-success-1.svg" width="24px">   |  Success 1   |  `DarkModeColor.success1`   |  `var(--dm-color-success-1)`   |
|  <img alt="" src="./assets/color-dm-success-2.svg" width="24px">   |  Success 2   |  `DarkModeColor.success2`   |  `var(--dm-color-success-2)`   |
|  <img alt="" src="./assets/color-dm-success-3.svg" width="24px">   |  Success 3   |  `DarkModeColor.success3`   |  `var(--dm-color-success-3)`   |
|  <img alt="" src="./assets/color-dm-success-4.svg" width="24px">   |  Success 4   |  `DarkModeColor.success4`   |  `var(--dm-color-success-4)`   |
|  <img alt="" src="./assets/color-dm-success-5.svg" width="24px">   |  Success 5   |  `DarkModeColor.success5`   |  `var(--dm-color-success-5)`   |
|  <img alt="" src="./assets/color-dm-success-6.svg" width="24px">   |  Success 6   |  `DarkModeColor.success6`   |  `var(--dm-color-success-6)`   |
|  <img alt="" src="./assets/color-dm-success-7.svg" width="24px">   |  Success 7   |  `DarkModeColor.success7`   |  `var(--dm-color-success-7)`   |
|  <img alt="" src="./assets/color-dm-success-8.svg" width="24px">   |  Success 8   |  `DarkModeColor.success8`   |  `var(--dm-color-success-8)`   |
|  <img alt="" src="./assets/color-dm-success-9.svg" width="24px">   |  Success 9   |  `DarkModeColor.success9`   |  `var(--dm-color-success-9)`   |
|  <img alt="" src="./assets/color-dm-success-10.svg" width="24px">  |  Success 10  |  `DarkModeColor.success10`  |  `var(--dm-color-success-10)`  |

### Mode Colors

The table below shows color values that adapt to both light and dark modes:

|                             Light Mode                             |                             Dark Mode                              |     Name     |             CSS             |
|:------------------------------------------------------------------:|:------------------------------------------------------------------:|:------------:|:---------------------------:|
|  <img alt="" src="./assets/color-lm-neutral-1.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-1.svg" width="24px">   |  Neutral 1   |  `var(--color-neutral-1)`   |
|  <img alt="" src="./assets/color-lm-neutral-2.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-2.svg" width="24px">   |  Neutral 2   |  `var(--color-neutral-2)`   |
|  <img alt="" src="./assets/color-lm-neutral-3.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-3.svg" width="24px">   |  Neutral 3   |  `var(--color-neutral-3)`   |
|  <img alt="" src="./assets/color-lm-neutral-4.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-4.svg" width="24px">   |  Neutral 4   |  `var(--color-neutral-4)`   |
|  <img alt="" src="./assets/color-lm-neutral-5.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-5.svg" width="24px">   |  Neutral 5   |  `var(--color-neutral-5)`   |
|  <img alt="" src="./assets/color-lm-neutral-6.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-6.svg" width="24px">   |  Neutral 6   |  `var(--color-neutral-6)`   |
|  <img alt="" src="./assets/color-lm-neutral-7.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-7.svg" width="24px">   |  Neutral 7   |  `var(--color-neutral-7)`   |
|  <img alt="" src="./assets/color-lm-neutral-8.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-8.svg" width="24px">   |  Neutral 8   |  `var(--color-neutral-8)`   |
|  <img alt="" src="./assets/color-lm-neutral-9.svg" width="24px">   |  <img alt="" src="./assets/color-dm-neutral-9.svg" width="24px">   |  Neutral 9   |  `var(--color-neutral-9)`   |
|  <img alt="" src="./assets/color-lm-neutral-10.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-10.svg" width="24px">  |  Neutral 10  |  `var(--color-neutral-10)`  |
|  <img alt="" src="./assets/color-lm-primary-1.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-1.svg" width="24px">   |  Primary 1   |  `var(--color-primary-1)`   |
|  <img alt="" src="./assets/color-lm-primary-2.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-2.svg" width="24px">   |  Primary 2   |  `var(--color-primary-2)`   |
|  <img alt="" src="./assets/color-lm-primary-3.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-3.svg" width="24px">   |  Primary 3   |  `var(--color-primary-3)`   |
|  <img alt="" src="./assets/color-lm-primary-4.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-4.svg" width="24px">   |  Primary 4   |  `var(--color-primary-4)`   |
|  <img alt="" src="./assets/color-lm-primary-5.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-5.svg" width="24px">   |  Primary 5   |  `var(--color-primary-5)`   |
|  <img alt="" src="./assets/color-lm-primary-6.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-6.svg" width="24px">   |  Primary 6   |  `var(--color-primary-6)`   |
|  <img alt="" src="./assets/color-lm-primary-7.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-7.svg" width="24px">   |  Primary 7   |  `var(--color-primary-7)`   |
|  <img alt="" src="./assets/color-lm-primary-8.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-8.svg" width="24px">   |  Primary 8   |  `var(--color-primary-8)`   |
|  <img alt="" src="./assets/color-lm-primary-9.svg" width="24px">   |  <img alt="" src="./assets/color-dm-primary-9.svg" width="24px">   |  Primary 9   |  `var(--color-primary-9)`   |
|  <img alt="" src="./assets/color-lm-primary-10.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-10.svg" width="24px">  |  Primary 10  |  `var(--color-primary-10)`  |
| <img alt="" src="./assets/color-lm-secondary-1.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-1.svg" width="24px">  | Secondary 1  | `var(--color-secondary-1)`  |
| <img alt="" src="./assets/color-lm-secondary-2.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-2.svg" width="24px">  | Secondary 2  | `var(--color-secondary-2)`  |
| <img alt="" src="./assets/color-lm-secondary-3.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-3.svg" width="24px">  | Secondary 3  | `var(--color-secondary-3)`  |
| <img alt="" src="./assets/color-lm-secondary-4.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-4.svg" width="24px">  | Secondary 4  | `var(--color-secondary-4)`  |
| <img alt="" src="./assets/color-lm-secondary-5.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-5.svg" width="24px">  | Secondary 5  | `var(--color-secondary-5)`  |
| <img alt="" src="./assets/color-lm-secondary-6.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-6.svg" width="24px">  | Secondary 6  | `var(--color-secondary-6)`  |
| <img alt="" src="./assets/color-lm-secondary-7.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-7.svg" width="24px">  | Secondary 7  | `var(--color-secondary-7)`  |
| <img alt="" src="./assets/color-lm-secondary-8.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-8.svg" width="24px">  | Secondary 8  | `var(--color-secondary-8)`  |
| <img alt="" src="./assets/color-lm-secondary-9.svg" width="24px">  | <img alt="" src="./assets/color-dm-secondary-9.svg" width="24px">  | Secondary 9  | `var(--color-secondary-9)`  |
| <img alt="" src="./assets/color-lm-secondary-10.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-10.svg" width="24px"> | Secondary 10 | `var(--color-secondary-10)` |
|   <img alt="" src="./assets/color-lm-danger-1.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-1.svg" width="24px">   |   Danger 1   |   `var(--color-danger-1)`   |
|   <img alt="" src="./assets/color-lm-danger-2.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-2.svg" width="24px">   |   Danger 2   |   `var(--color-danger-2)`   |
|   <img alt="" src="./assets/color-lm-danger-3.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-3.svg" width="24px">   |   Danger 3   |   `var(--color-danger-3)`   |
|   <img alt="" src="./assets/color-lm-danger-4.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-4.svg" width="24px">   |   Danger 4   |   `var(--color-danger-4)`   |
|   <img alt="" src="./assets/color-lm-danger-5.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-5.svg" width="24px">   |   Danger 5   |   `var(--color-danger-5)`   |
|   <img alt="" src="./assets/color-lm-danger-6.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-6.svg" width="24px">   |   Danger 6   |   `var(--color-danger-6)`   |
|   <img alt="" src="./assets/color-lm-danger-7.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-7.svg" width="24px">   |   Danger 7   |   `var(--color-danger-7)`   |
|   <img alt="" src="./assets/color-lm-danger-8.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-8.svg" width="24px">   |   Danger 8   |   `var(--color-danger-8)`   |
|   <img alt="" src="./assets/color-lm-danger-9.svg" width="24px">   |   <img alt="" src="./assets/color-dm-danger-9.svg" width="24px">   |   Danger 9   |   `var(--color-danger-9)`   |
|  <img alt="" src="./assets/color-lm-danger-10.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-10.svg" width="24px">   |  Danger 10   |  `var(--color-danger-10)`   |
|  <img alt="" src="./assets/color-lm-warning-1.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-1.svg" width="24px">   |  Warning 1   |  `var(--color-warning-1)`   |
|  <img alt="" src="./assets/color-lm-warning-2.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-2.svg" width="24px">   |  Warning 2   |  `var(--color-warning-2)`   |
|  <img alt="" src="./assets/color-lm-warning-3.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-3.svg" width="24px">   |  Warning 3   |  `var(--color-warning-3)`   |
|  <img alt="" src="./assets/color-lm-warning-4.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-4.svg" width="24px">   |  Warning 4   |  `var(--color-warning-4)`   |
|  <img alt="" src="./assets/color-lm-warning-5.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-5.svg" width="24px">   |  Warning 5   |  `var(--color-warning-5)`   |
|  <img alt="" src="./assets/color-lm-warning-6.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-6.svg" width="24px">   |  Warning 6   |  `var(--color-warning-6)`   |
|  <img alt="" src="./assets/color-lm-warning-7.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-7.svg" width="24px">   |  Warning 7   |  `var(--color-warning-7)`   |
|  <img alt="" src="./assets/color-lm-warning-8.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-8.svg" width="24px">   |  Warning 8   |  `var(--color-warning-8)`   |
|  <img alt="" src="./assets/color-lm-warning-9.svg" width="24px">   |  <img alt="" src="./assets/color-dm-warning-9.svg" width="24px">   |  Warning 9   |  `var(--color-warning-9)`   |
|  <img alt="" src="./assets/color-lm-warning-10.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-10.svg" width="24px">  |  Warning 10  |  `var(--color-warning-10)`  |
|  <img alt="" src="./assets/color-lm-success-1.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-1.svg" width="24px">   |  Success 1   |  `var(--color-success-1)`   |
|  <img alt="" src="./assets/color-lm-success-2.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-2.svg" width="24px">   |  Success 2   |  `var(--color-success-2)`   |
|  <img alt="" src="./assets/color-lm-success-3.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-3.svg" width="24px">   |  Success 3   |  `var(--color-success-3)`   |
|  <img alt="" src="./assets/color-lm-success-4.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-4.svg" width="24px">   |  Success 4   |  `var(--color-success-4)`   |
|  <img alt="" src="./assets/color-lm-success-5.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-5.svg" width="24px">   |  Success 5   |  `var(--color-success-5)`   |
|  <img alt="" src="./assets/color-lm-success-6.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-6.svg" width="24px">   |  Success 6   |  `var(--color-success-6)`   |
|  <img alt="" src="./assets/color-lm-success-7.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-7.svg" width="24px">   |  Success 7   |  `var(--color-success-7)`   |
|  <img alt="" src="./assets/color-lm-success-8.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-8.svg" width="24px">   |  Success 8   |  `var(--color-success-8)`   |
|  <img alt="" src="./assets/color-lm-success-9.svg" width="24px">   |  <img alt="" src="./assets/color-dm-success-9.svg" width="24px">   |  Success 9   |  `var(--color-success-9)`   |
|  <img alt="" src="./assets/color-lm-success-10.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-10.svg" width="24px">  |  Success 10  |  `var(--color-success-10)`  |

---

## 🌈 Gradients

Currently, there is one gradient variation, available in 10 shades for each mode. Gradients are used for decorative elements and to emphasize visual hierarchy.

### Light Mode Gradients

The table below shows the gradients for the light mode:

|                                Color                                |    Name    |              JS               |               CSS               |
|:-------------------------------------------------------------------:|:----------:|:-----------------------------:|:-------------------------------:|
| <img alt="" src="./assets/gradient-lm-primary-1.svg" width="24px">  | Primary 1  | `LightModeGradient.primary1`  | `var(--lm-gradient-primary-1)`  |
| <img alt="" src="./assets/gradient-lm-primary-2.svg" width="24px">  | Primary 2  | `LightModeGradient.primary2`  | `var(--lm-gradient-primary-2)`  |
| <img alt="" src="./assets/gradient-lm-primary-3.svg" width="24px">  | Primary 3  | `LightModeGradient.primary3`  | `var(--lm-gradient-primary-3)`  |
| <img alt="" src="./assets/gradient-lm-primary-4.svg" width="24px">  | Primary 4  | `LightModeGradient.primary4`  | `var(--lm-gradient-primary-4)`  |
| <img alt="" src="./assets/gradient-lm-primary-5.svg" width="24px">  | Primary 5  | `LightModeGradient.primary5`  | `var(--lm-gradient-primary-5)`  |
| <img alt="" src="./assets/gradient-lm-primary-6.svg" width="24px">  | Primary 6  | `LightModeGradient.primary6`  | `var(--lm-gradient-primary-6)`  |
| <img alt="" src="./assets/gradient-lm-primary-7.svg" width="24px">  | Primary 7  | `LightModeGradient.primary7`  | `var(--lm-gradient-primary-7)`  |
| <img alt="" src="./assets/gradient-lm-primary-8.svg" width="24px">  | Primary 8  | `LightModeGradient.primary8`  | `var(--lm-gradient-primary-8)`  |
| <img alt="" src="./assets/gradient-lm-primary-9.svg" width="24px">  | Primary 9  | `LightModeGradient.primary9`  | `var(--lm-gradient-primary-9)`  |
| <img alt="" src="./assets/gradient-lm-primary-10.svg" width="24px"> | Primary 10 | `LightModeGradient.primary10` | `var(--lm-gradient-primary-10)` |

### Dark Mode Gradients

The table below shows the gradients for the dark mode:

|                                Color                                |    Name    |              JS              |               CSS               |
|:-------------------------------------------------------------------:|:----------:|:----------------------------:|:-------------------------------:|
| <img alt="" src="./assets/gradient-dm-primary-1.svg" width="24px">  | Primary 1  | `DarkModeGradient.primary1`  | `var(--dm-gradient-primary-1)`  |
| <img alt="" src="./assets/gradient-dm-primary-2.svg" width="24px">  | Primary 2  | `DarkModeGradient.primary2`  | `var(--dm-gradient-primary-2)`  |
| <img alt="" src="./assets/gradient-dm-primary-3.svg" width="24px">  | Primary 3  | `DarkModeGradient.primary3`  | `var(--dm-gradient-primary-3)`  |
| <img alt="" src="./assets/gradient-dm-primary-4.svg" width="24px">  | Primary 4  | `DarkModeGradient.primary4`  | `var(--dm-gradient-primary-4)`  |
| <img alt="" src="./assets/gradient-dm-primary-5.svg" width="24px">  | Primary 5  | `DarkModeGradient.primary5`  | `var(--dm-gradient-primary-5)`  |
| <img alt="" src="./assets/gradient-dm-primary-6.svg" width="24px">  | Primary 6  | `DarkModeGradient.primary6`  | `var(--dm-gradient-primary-6)`  |
| <img alt="" src="./assets/gradient-dm-primary-7.svg" width="24px">  | Primary 7  | `DarkModeGradient.primary7`  | `var(--dm-gradient-primary-7)`  |
| <img alt="" src="./assets/gradient-dm-primary-8.svg" width="24px">  | Primary 8  | `DarkModeGradient.primary8`  | `var(--dm-gradient-primary-8)`  |
| <img alt="" src="./assets/gradient-dm-primary-9.svg" width="24px">  | Primary 9  | `DarkModeGradient.primary9`  | `var(--dm-gradient-primary-9)`  |
| <img alt="" src="./assets/gradient-dm-primary-10.svg" width="24px"> | Primary 10 | `DarkModeGradient.primary10` | `var(--dm-gradient-primary-10)` |

### Mode Gradients

The table below shows gradients that adapt to both light and dark modes.

|                             Light Mode                              |                              Dark Mode                              |    Name    |             CSS              |
|:-------------------------------------------------------------------:|:-------------------------------------------------------------------:|:----------:|:----------------------------:|
| <img alt="" src="./assets/gradient-lm-primary-1.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-1.svg" width="24px">  | Primary 1  | `var(--gradient-primary-1)`  |
| <img alt="" src="./assets/gradient-lm-primary-2.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-2.svg" width="24px">  | Primary 2  | `var(--gradient-primary-2)`  |
| <img alt="" src="./assets/gradient-lm-primary-3.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-3.svg" width="24px">  | Primary 3  | `var(--gradient-primary-3)`  |
| <img alt="" src="./assets/gradient-lm-primary-4.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-4.svg" width="24px">  | Primary 4  | `var(--gradient-primary-4)`  |
| <img alt="" src="./assets/gradient-lm-primary-5.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-5.svg" width="24px">  | Primary 5  | `var(--gradient-primary-5)`  |
| <img alt="" src="./assets/gradient-lm-primary-6.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-6.svg" width="24px">  | Primary 6  | `var(--gradient-primary-6)`  |
| <img alt="" src="./assets/gradient-lm-primary-7.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-7.svg" width="24px">  | Primary 7  | `var(--gradient-primary-7)`  |
| <img alt="" src="./assets/gradient-lm-primary-8.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-8.svg" width="24px">  | Primary 8  | `var(--gradient-primary-8)`  |
| <img alt="" src="./assets/gradient-lm-primary-9.svg" width="24px">  | <img alt="" src="./assets/gradient-dm-primary-9.svg" width="24px">  | Primary 9  | `var(--gradient-primary-9)`  |
| <img alt="" src="./assets/gradient-lm-primary-10.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-10.svg" width="24px"> | Primary 10 | `var(--gradient-primary-10)` |

---

## 📐 Sizes

The design tokens package also includes size groups, consisting of both base and semantic values.

- **Base Sizes** — foundational size values (e.g., container width/height)
- **Spacing** — gaps between elements
- **Rounding** — border radius values
- **Border Sizes** — border thickness values

### Base Sizes

Below is a table of all available base sizes:

| Name |  Value  |       JS       |        CSS         |
|:----:|:-------:|:--------------:|:------------------:|
|  1x  |  `4px`  |  `Size['1x']`  |  `var(--size-1x)`  |
|  2x  |  `8px`  |  `Size['2x']`  |  `var(--size-2x)`  |
|  3x  | `12px`  |  `Size['3x']`  |  `var(--size-3x)`  |
|  4x  | `16px`  |  `Size['4x']`  |  `var(--size-4x)`  |
| 4.5x | `18px`  | `Size['4.5x']` | `var(--size-4-5x)` |
|  5x  | `20px`  |  `Size['5x']`  |  `var(--size-5x)`  |
|  6x  | `24px`  |  `Size['6x']`  |  `var(--size-6x)`  |
|  7x  | `28px`  |  `Size['7x']`  |  `var(--size-7x)`  |
|  8x  | `32px`  |  `Size['8x']`  |  `var(--size-8x)`  |
| 10x  | `40px`  | `Size['10x']`  | `var(--size-10x)`  |
| 12x  | `48px`  | `Size['12x']`  | `var(--size-12x)`  |
| 16x  | `64px`  | `Size['16x']`  | `var(--size-16x)`  |
| 24x  | `96px`  | `Size['24x']`  | `var(--size-24x)`  |
| 32x  | `128px` | `Size['32x']`  | `var(--size-32x)`  |

### Spacing Sizes

The table below shows all available spacing sizes.

| Name | Value  |        JS         |          CSS          |
|:----:|:------:|:-----------------:|:---------------------:|
| 0.5x | `2px`  | `Spacing['0.5x']` | `var(--spacing-0-5x)` |
|  1x  | `4px`  |  `Spacing['1x']`  |  `var(--spacing-1x)`  |
|  2x  | `8px`  |  `Spacing['2x']`  |  `var(--spacing-2x)`  |
|  3x  | `12px` |  `Spacing['3x']`  |  `var(--spacing-3x)`  |
|  4x  | `16px` |  `Spacing['4x']`  |  `var(--spacing-4x)`  |
|  5x  | `20px` |  `Spacing['5x']`  |  `var(--spacing-5x)`  |
|  6x  | `24px` |  `Spacing['6x']`  |  `var(--spacing-6x)`  |
|  7x  | `28px` |  `Spacing['7x']`  |  `var(--spacing-7x)`  |
|  8x  | `32px` |  `Spacing['8x']`  |  `var(--spacing-8x)`  |
| 10x  | `40px` | `Spacing['10x']`  | `var(--spacing-10x)`  |
| 12x  | `48px` | `Spacing['12x']`  | `var(--spacing-12x)`  |

### Roundings

Ниже приведена таблица с размерами сгруглений

| Name | Value  |         JS         |          CSS           |
|:----:|:------:|:------------------:|:----------------------:|
|  1x  | `4px`  |  `Rounding['1x']`  |  `var(--rounding-1x)`  |
| 1.5x | `6px`  | `Rounding['1.6x']` | `var(--rounding-1-5x)` |
|  2x  | `8px`  |  `Rounding['2x']`  |  `var(--rounding-2x)`  |
|  4x  | `16px` |  `Rounding['4x']`  |  `var(--rounding-4x)`  |

### Border Sizes

The table below shows all available border thickness values.

|    Name    | Value |           JS           |               CSS               |
|:----------:|:-----:|:----------------------:|:-------------------------------:|
|    Thin    | `1px` |   `BorderSize.thin`    |    `var(--border-size-thin)`    |
|  Regular   | `2px` |  `BorderSize.regular`  |  `var(--border-size-regilar)`   |
|   Medium   | `4px` |  `BorderSize.medium`   |   `var(--border-size-medium)`   |
|    Bold    | `6px` |   `BorderSize.bold`    |    `var(--border-size-bold)`    |
| Extra Bold | `8px` | `BorderSize.extraBold` | `var(--border-size-extra-bold)` |

---

## ✍️ Typography

The typography system includes styles for various levels of headings, body text, and code blocks.

Available groups:

- Headings — 5 levels with different weight variations
- Body text — multiple sizes and weights
- Monospaced style — for displaying code

⚠️ Note: Font files are not included in this package. You are responsible for importing fonts manually in your project, for example via Google Fonts.

Below is a table of all available typography styles:

| Name                        |  Font Family  | Font Size | Font Weight | Line Height |                  JS                  |                     CSS                      |
|:----------------------------|:-------------:|:---------:|:-----------:|:-----------:|:------------------------------------:|:--------------------------------------------:|
| H1 / medium                 |   `Roboto`    |  `32px`   |    `500`    |   `40px`    |        `Typography.H1.medium`        |        `var(--typography-h1-medium)`         |
| H2 / medium                 |   `Roboto`    |  `24px`   |    `500`    |   `30px`    |        `Typography.H2.medium`        |        `var(--typography-h2-medium)`         |
| H3 / regular                |   `Roboto`    |  `20px`   |    `400`    |   `24px`    |       `Typography.H3.regular`        |        `var(--typography-h3-regular)`        |
| H3 / medium                 |   `Roboto`    |  `20px`   |    `500`    |   `24px`    |        `Typography.H3.medium`        |        `var(--typography-h3-medium)`         |
| H4 / regular                |   `Roboto`    |  `18px`   |    `400`    |   `24px`    |       `Typography.H4.regular`        |        `var(--typography-h4-regular)`        |
| H4 / medium                 |   `Roboto`    |  `18px`   |    `500`    |   `24px`    |        `Typography.H4.medium`        |        `var(--typography-h4-medium)`         |
| H5 / regular                |   `Roboto`    |  `16px`   |    `400`    |   `24px`    |       `Typography.H5.regular`        |        `var(--typography-h5-regular)`        |
| H5 / medium                 |   `Roboto`    |  `16px`   |    `500`    |   `24px`    |        `Typography.H5.medium`        |        `var(--typography-h5-medium)`         |
| H5 / bold                   |   `Roboto`    |  `16px`   |    `700`    |   `24px`    |         `Typography.H5.bold`         |         `var(--typography-h5-bold)`          |
| Body / extraSmall / regular |   `Roboto`    |  `12px`   |    `400`    |   `16px`    | `Typography.Body.extraSmall.regular` | `var(--typography-body-extra-small-regular)` |
| Body / extraSmall / medium  |   `Roboto`    |  `12px`   |    `500`    |   `16px`    | `Typography.Body.extraSmall.medium`  | `var(--typography-body-extra-small-medium)`  |
| Body / small / regular      |   `Roboto`    |  `14px`   |    `400`    |   `22px`    |   `Typography.Body.small.regular`    |    `var(--typography-body-small-regular)`    |
| Body / small / medium       |   `Roboto`    |  `14px`   |    `500`    |   `22px`    |    `Typography.Body.small.medium`    |    `var(--typography-body-small-medium)`     |
| Body / small / bold         |   `Roboto`    |  `14px`   |    `700`    |   `22px`    |     `Typography.Body.small.bold`     |     `var(--typography-body-small-bold)`      |
| Body / medium / regular     |   `Roboto`    |  `16px`   |    `400`    |   `24px`    |   `Typography.Body.medium.regular`   |   `var(--typography-body-medium-regular)`    |
| Body / medium / medium      |   `Roboto`    |  `16px`   |    `500`    |   `24px`    |   `Typography.Body.medium.medium`    |    `var(--typography-body-medium-medium)`    |
| Body / medium / bold        |   `Roboto`    |  `16px`   |    `700`    |   `24px`    |    `Typography.Body.medium.bold`     |     `var(--typography-body-medium-bold)`     |
| Code / regular              | `Roboto Mono` |  `14px`   |    `400`    |   `20px`    |      `Typography.Code.regular`       |       `var(--typography-code-regular)`       |


---

## 🎛️ Mode Switching

To enable automatic mode-based styling, make sure to include the generated CSS tokens file:

```ts
import '@webeach/design/tokens.css';
```

The current mode is controlled via the `data-ui-mode` attribute on the any HTML element. You should define a default value:

```html
<html data-ui-mode="light">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

```html
<div data-ui-mode="dark">
  ...
</div>
```

You can also manually retrieve mode color and gradient maps in JavaScript:

```ts
import { getModeColor, getModeGradient } from '@wrs/design';

const Color = getModeColor('light');
const Gradient = getModeGradient('light');

console.log(Color.primary6); // "hsl(301 53% 55%)"
console.log(Gradient.primary6); // ["hsl(201 84% 55%)", "hsl(301 53% 55%)"]
```

---

## 💡 Examples

### Colors

```css
.button {
  background-color: var(--color-primary-5);
  color: var(--color-neutral-1);
}
```

### Gradients

```css
.button {
  background-image: var(--gradient-primary-6);
}
```

### Sizes

```css
.box {
  block-size: var(--size-10x);
  inline-size: var(--size-12x);
  
  padding-block: var(--size-2x);
  padding-inline: var(--size-3x);
}
```

```css
.box {
  display: flex;
  gap: var(--spacing-1x);
}
```

```css
.button {
  background-color: var(--color-neutral-1);
  border-color: var(--color-secondary-6);
  color: var(--color-neutral-10);
  
  border-style: solid;
  border-width: var(--border-size-regular);
  border-radius: var(--rounding-2x);
}
```

### Typography

```css
.heading-1 {
  font: var(--typography-h1-medium);
}

.paragraph {
  font: var(--typography-body-medium-regular);
}

.small-text {
  font: var(--typography-body-small-regular);
}

.code {
  font: var(--typography-code-regular);
}
```

---

## 🧩 TypeScript Types

This package also provides full TypeScript typings for all design token objects.

```ts
import type {
  BorderSizeKey,
  BorderSizeType,
  BorderSizeValue,
  ColorKey,
  GradientKey,
  ModeKey,
  RoundingKey,
  RoundingType,
  RoundingValue,
  SizeKey,
  SizeType,
  SizeValue,
  SpacingKey,
  SpacingType,
  SpacingValue,
  TypographyType
} from '@wrs/design';
```

These types help you maintain type safety when working with token keys or token maps in your own components, utilities, or design tooling.

---

## ⚙️ Development

### Build the library

Compiles the codebase and generates the production-ready output in the `lib` directory.

```sh
yarn run build
```

### Watch mode

Watches for file changes and rebuilds automatically.

```sh
yarn run build:watch
```

### Generate assets

Generates color and gradient preview images for use in the `README.md`.

```sh
yarn run generate:assets
```

⚠️ Note: you need to run this manually whenever you update the color or gradient token sets.

---

## ✅ Design Token Requirements

All tokens are validated during the build process. Below are the basic format requirements:

- **Key names** (`key`) must be in `camelCase` format
  - Example: `primary1`, `secondary10`, `extraRelaxed`
- **Colors** must use the `HSL` format
  - Example: `hsl(301 53% 55%)`
  - `hex`, `rgb`, `rgba`, and other formats are **not allowed**
- **Sizes** (e.g., `Size`, `Spacing`, `Rounding`) must be in `px` units
  - Example: `16px`, `24px`
  - `em`, `rem`, `%`, `auto`, `inherit`, and other units are **not allowed**
- **All values** must be explicitly defined — empty strings are **not allowed**

If any token does not meet these requirements, the build will fail with a console error.

---

## 🔖 Releasing a New Version

Releases are handled automatically using `semantic-release`.

Before publishing a new version, make sure to:

1. Commit and push all changes to the `main` branch.
2. Use commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:
  - `feat: ...` — for new features
  - `fix: ...` — for bug fixes
  - `chore: ...`, `refactor: ...`, etc.
3. Versioning is determined automatically based on the type of commits (`patch`, `minor`, `major`).
4. Update the `README.md`:
  - All tables should be updated if any tokens related to colors, sizes, or typography were changed.
  - If color or gradient tokens were changed, also run `yarn run generate:assets` to regenerate the color preview images.

---

## 👨‍💻 Author

Developed and maintained by [Ruslan Martynov](https://github.com/ruslan-mart)

If you have any suggestions or find a bug, feel free to open an issue or pull request.

---

## 📄 License

This package is licensed under the [MIT License](./LICENSE).
