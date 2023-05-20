# Tail Material Design
**What you wanted, now you have it**

![Logo](https://raw.githubusercontent.com/AuriOpenSource/tail-material-design/main/docs/static/GH_Social.png)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/tail-material-design?style=flat-square&logo=npm)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/tail-material-design?style=flat-square&logo=jsdelivr)
![GitHub](https://img.shields.io/github/license/realfakenerd/tail-material-design?style=flat-square&logo=github)
![Website](https://img.shields.io/website?down_message=oh%20no&style=flat-square&up_message=up%20and%20running&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftail-material-design)
![GitHub last commit](https://img.shields.io/github/last-commit/realfakenerd/tail-material-design?style=flat-square&logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/realfakenerd/tail-material-design?style=flat-square&logo=github)
![Components made](https://img.shields.io/badge/components%20ready-7-yellow?style=flat-square&logo=materialdesign&labelColor=fafafa)

## Installing and how to use
```bash
pnpm add -D tail-material-design
```

```typescript
import tmd from 'tail-material-design';
import type { Config } from 'tailwindcss';

export default {
    plugins: [tmd]
    
    // rest of your config...
} satisfies Config;
```
### We sugest you use the tailwind-material-colors package
[Tailwind-Material-Colors repo](https://github.com/JavierM42/tailwind-material-colors)

It will give you a better experience with colors.

```bash
pnpm add -D tailwind-material-colors
```

```typescript
import { withMaterialColors } from 'tailwind-material-colors'
import tmd from 'tail-material-design';
export default withMaterialColors({
  // Here, your tailwind config.
  // (Do not specify theme.colors or theme.extend.colors as they will be overwritten).
  plugins: [tmd]
}, {
  // Here, your base colors as HEX values
  // primary is required
  primary: '#ff0000',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color
  secondary: '#ffff00',
  tertiary: '#0000ff',
  // extra named colors may also be included
  green: '#00ff00'
  blue: '#0000ff'
});
```

## What we have already done
- Action
    - 👍 Common Buttons
    - ❌ Extended FABs
    - 👍 Fabs
    - ❌ Icon Buttons
    - ❌ Segmented Button
 - Communication
    - ❌ Badges
    - ❌ Progress Indicator
    - ❌ Snackbar
- Containment
    - ❌ Bottom Sheet
    - ❌ Cards
    - ❌ Carousel
    - ❌ Dialogs
    - ❌ Dividers
    - 👍 Lists
    - ❌ Side Sheets
    - ❌ Tooltips
- Navigation
    - ❌ Bottom App Bar
    - ❌ Navigation Bar
    - ❌ Navigation Drawer
    - ❌ Navigation Rail
    - ❌ Search
    - ❌ Tabs
    - ❌ Top App Bar
- Selection
    - ❌ Checkbox
    - ❌ Chips
    - ❌ Date Pickers
    - ❌ Menus
    - ❌ Radio Buttons
    - ❌ Sliders
    - ❌ Switch
- Text Inputs
    - ❌ Text Fields
