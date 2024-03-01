---
title: Get Started
---

## What is Tail Material Design?

Tail Material Design is a comprehensive library that brings the power of Material Design to Tailwind CSS.
With Tail Material Design, you can easily add modern and visually appealing Material Design styles to
your web projects. The library provides pre-defined styles for various components, allowing you to
accelerate development and create aesthetically pleasing web apps.

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

```typescript ln
import tmd from "tail-material-design";
import type { Config } from "tailwindcss";

export default {
  plugins: [tmd],

  // rest of your config...
} satisfies Config;
```

4. Optional if you don't want to use tailwindcss, you can still use the components from a CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tail-material-design/dist/components/<COMPONENT_NAME>.min.css"
/>
<!-- or you can use the link with all components -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tail-material-design/dist/components.min.css"
/>
```

```css
/* As an alternative, you can install the package and import on your css file */
@import url("https://cdn.jsdelivr.net/npm/tail-material-design/dist/components.min.css");
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

```typescript ln
import { withMaterialColors } from 'tailwind-material-colors'
import tmd from 'tail-material-design';
export default withMaterialColors({
  // Here, your tailwind config.
  // (Do not specify theme.colors or theme.extend.colors
  // as they will be overwritten).
  plugins: [tmd]
}, {
  // Here, your base colors as HEX values
  // primary is required
  primary: '#ff0000',
  // secondary and/or tertiary are optional,
  // if not set they will be derived from the primary color
  secondary: '#ffff00',
  tertiary: '#0000ff',
  // extra named colors may also be included
  green: '#00ff00'
  blue: '#0000ff'
});
```

## How to Use:

Here's a simple example of how you can leverage the Material Design styles in your web app:

```svelte live async title=Button.svelte
  <button class="btn btn-primary">Click Here</button>
  <style>
    @import url("https://cdn.jsdelivr.net/gh/AuriOpenSource/tail-material-design@master/dist/components/actions/btn.min.css");
  </style>
```

## What we have already done

Tail Material Design provides a growing collection of Material Design components. Here's an overview of what has already been implemented:

### Action

- :+1: Common Buttons
- ❌ Extended FABs
- :+1: Fabs
- :+1: Icon Buttons
- ❌ Segmented Button

### Communication

- ❌ Badges
- ❌ Progress Indicator
- ❌ Snackbar

### Containment

- :+1: Bottom Sheet
- :+1: Cards
- ❌ Carousel
- ❌ Dialogs
- :+1: Dividers
- :+1: Lists
- ❌ Side Sheets
- ❌ Tooltips

### Navigation

- :+1: Bottom App Bar
- ❌ Navigation Bar
- ❌ Navigation Drawer
- :+1: Navigation Rail
- ❌ Search
- ❌ Tabs
- ❌ Top App Bar

### Selection

- :+1: Checkbox
- :+1: Chips
- ❌ Date Pickers
- ❌ Menus
- :+1: Radio Buttons
- :+1: Sliders
- :+1: Switch

### Text Inputs

- ❌ Text Fields

## Contribution

Contributions are welcome! If you encounter any [issues](https://github.com/AuriOpenSource/tail-material-design/issues/new) or have suggestions for improvements, feel free to open an issue or submit a [pull request](https://github.com/AuriOpenSource/tail-material-design/pulls).

## License

This project is licensed under the [MIT License](https://github.com/AuriOpenSource/tail-material-design/blob/main/LICENSE).
