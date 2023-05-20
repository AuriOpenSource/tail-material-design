# Tail Material Design
**What you wanted, now you have it**

Tail Material Design is a comprehensive library that brings the power of Material Design to Tailwind CSS. With Tail Material Design, you can easily add modern and visually appealing Material Design styles to your web projects. The library provides pre-defined styles for various components, allowing you to accelerate development and create aesthetically pleasing web apps.

![Logo](https://raw.githubusercontent.com/AuriOpenSource/tail-material-design/main/docs/static/GH_Social.png)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/tail-material-design?style=flat-square&logo=npm)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/tail-material-design?style=flat-square&logo=jsdelivr)
![GitHub](https://img.shields.io/github/license/realfakenerd/tail-material-design?style=flat-square&logo=github)
![Website](https://img.shields.io/website?down_message=oh%20no&style=flat-square&up_message=up%20and%20running&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftail-material-design)
![GitHub last commit](https://img.shields.io/github/last-commit/realfakenerd/tail-material-design?style=flat-square&logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/realfakenerd/tail-material-design?style=flat-square&logo=github)
![Components made](https://img.shields.io/badge/components%20ready-7-yellow?style=flat-square&logo=materialdesign&labelColor=fafafa)

## Key Features:
- Seamless integration with Tailwind CSS.
- Pre-defined Material Design styles to expedite development.
- Modern and visually appealing interface for your web app.
- Flexible customization options to meet your project's specific needs.

## Installing:
To get started with Tail Material Design, follow these steps:

1. Install Tailwind CSS in your project (if not already installed)

2. Install Tail Material Design using your preferred package manager:
```shell
pnpm add -D tail-material-design
```

3. Import and configure Tail Material Design in your Tailwind CSS configuration file (typically named tailwind.config.js):
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
Optionally, consider using the tailwind-material-colors package for a better color experience.
It will give you a better experience with colors.:

1. Install it using the package manager of your choice:
```bash
pnpm add -D tailwind-material-colors
```
2. Import and configure tailwind-material-colors along with Tail Material Design:
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

## How to Use:
Here's a simple example of how you can leverage the Material Design styles in your web app:

```html
<div class="flex items-center justify-center">
  <button class="btn btn-outlined">Click Here</button>
</div>
```

## What we have already done
Tail Material Design provides a growing collection of Material Design components. Here's an overview of what has already been implemented:
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

## Contribution
Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
