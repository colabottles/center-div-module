# Nuxt CenterDiv

- Name: Nuxt CenterDiv
- Package name: center-div-module
- Description: A simple, accessible primitive for vertical and horizontal centering.

## Why?

Centering in Nuxt often involves repeating the same Grid/Flexbox boilerplate. This component standardizes the "Perfect Center" while remaining polymorphic (`as` prop) and accessible.

## Key Features

- **CSS Grid Power:** Uses `place-items: center` for zero-fuss alignment.
- **A11y First:** Verified for keyboard navigation and screen reader semantics.
- **SSR Ready:** Optimized for Nuxt 3 hydration.

## Development

- `pnpm dev` - Start dev server
- `pnpm test:e2e` - Run Playwright suite (15 tests)

## Component

```html
<CenterDiv minHeight="50vh">
  Hello world!
</CenterDiv>
```

## `<CenterDiv>`

| Prop | Type | Type | Type | Default |
| ---- | ---- | ---- | ---- | ---- |
| axis | 'both' | horizontal | vertical | both |
| as | string | string | string | section |
| minHeight | string | string | string | - |

## `v-center`

```vue
<div v-center />
<div v-center: horizontal />
```

## Accessibility & Standards

This module uses:

- CSS Grid (`place-items`)
- CSS Logical Properties (`min-block-size`)
- No absolute positioning
- No DOM reordering

It complies with WCAG 2.2 requirements for:

- Reflow
- Keyboard navigation
- Focus order
- Meaningful sequence

This module **never modifies ARIA, roles, or focus behaviors**.

Center Div is a layout utility, not a behavior modifier.

## What it does

- Centers content visually
- Preserves DOM order
- Respects writing modes
- Respects zoom and reflow

## What it does **not** do

- Trap focus
- Change semantics
- Add ARIA
- Alter keyboard navigation

## DevTools

---
Open Nuxt DevTools -> Center Div tab top inspect:

- Defaults
- Active usage
- Runtime config

## My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add my-module
```

That's it! You can now use My Module in your Nuxt app ✨

## Contribution

### Local development

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
