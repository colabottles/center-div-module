# @colabottles/center-div

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> A simple, accessible primitive for vertical and horizontal centering in Nuxt.

## Why?

Centering content in Nuxt often involves repeating the same CSS Grid or Flexbox boilerplate. This module provides a standardized, accessible way to center content with zero hydration issues.

## ✨ Features

- 🎯 **Zero Hydration Issues** - Uses `beforeMount` and computed styles
- ♿ **Accessibility First** - WCAG 2.2 AA/AAA compliant, no ARIA manipulation
- 🎨 **CSS Grid Powered** - Uses `place-items: center` for perfect centering
- 🔄 **SSR Ready** - Optimized for Nuxt 4 server-side rendering
- 📱 **Responsive** - Supports logical properties (`min-block-size`)
- 🎭 **Polymorphic** - Render as any HTML element via `as` prop
- 📦 **Tiny Bundle** - Minimal runtime footprint
- 🧪 **100% Tested** - Full unit and E2E test coverage

## 🚀 Quick Setup

```bash
npx nuxi module add @colabottles/center-div
```

Add to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@colabottles/center-div']
})
```

## 📖 Usage

### Component

```vue
<template>
  <!-- Basic centering -->
  <CenterDiv min-block-size="100vh">
    <button>Perfectly Centered</button>
  </CenterDiv>

  <!-- Horizontal only -->
  <CenterDiv axis="horizontal" min-block-size="50vh">
    <p>Centered horizontally</p>
  </CenterDiv>

  <!-- Vertical only -->
  <CenterDiv axis="vertical" min-block-size="50vh">
    <p>Centered vertically</p>
  </CenterDiv>

  <!-- Custom element -->
  <CenterDiv as="article" min-block-size="100vh">
    <h1>Article Content</h1>
  </CenterDiv>
</template>
```

### Directive

```vue
<template>
  <!-- Full viewport centering -->
  <div v-center>
    Content centered in viewport
  </div>
</template>
```

## 🎛️ API

### `<CenterDiv>` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------||
| `axis` | `'horizontal' \| 'vertical' \| 'both'` | `'both'` | Centering axis |
| `as` | `keyof HTMLElementTagNameMap` | `'section'` | HTML element to render |
| `minBlockSize` | `string` | `undefined` | Minimum height (uses logical properties) |

### `v-center` Directive

Applies full-viewport centering to any element:

- Sets `display: grid`
- Sets `place-items: center`
- Sets `height: 100dvh`
- Sets `width: 100%`

## ♿ Accessibility

This module follows WCAG 2.2 Level AA/AAA guidelines:

### ✅ What it does

- Centers content visually using CSS Grid
- Preserves DOM order and reading sequence
- Respects writing modes and text direction
- Supports zoom and reflow (up to 400%)
- Uses semantic HTML via `as` prop

### ✅ What it does NOT do

- Does not trap focus
- Does not add ARIA attributes
- Does not change keyboard navigation
- Does not modify semantics
- Does not reorder DOM elements

### Standards Compliance

- **WCAG 1.3.2** - Meaningful Sequence: DOM order preserved
- **WCAG 1.4.10** - Reflow: No horizontal scrolling at 400% zoom
- **WCAG 2.4.3** - Focus Order: Natural tab order maintained

**Technique:** Pure CSS Grid with logical properties. No JavaScript DOM manipulation.

## 🧪 Testing

```bash
# Run all tests
pnpm test              # Unit tests (7 tests)
pnpm test:e2e          # E2E tests (4 tests)
pnpm test:types        # TypeScript checks
pnpm lint              # ESLint

# Development
pnpm dev               # Start playground
pnpm test:watch        # Watch mode for unit tests
pnpm test:e2e:ui       # E2E with Playwright UI
```

### Test Coverage

- ✅ Unit tests with Vitest + Vue Test Utils
- ✅ E2E tests with Playwright
- ✅ Accessibility tests with vitest-axe
- ✅ TypeScript type checking
- ✅ ESLint code quality

## 🏗️ How It Works

### No Hydration Issues

The module prevents hydration mismatches by:

1. **Component** - Uses computed styles applied during render
2. **Directive** - Uses `beforeMount` hook (before hydration completes)
3. **No DOM manipulation** - Only inline styles via Vue's `:style` binding

### Architecture

```md
src/
├── module.ts                    # Module registration
└── runtime/
    ├── components/
    │   └── CenterDiv.vue       # Main component
    ├── plugin.ts               # v-center directive
    └── types.ts                # TypeScript definitions
```

## 🤝 Contributing

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test
pnpm test:e2e

# Lint
pnpm lint

# Build for production
pnpm prepack
```

## 📝 License

[MIT License](./LICENSE)

## 🙏 Credits

Created for the Nuxt community with accessibility and developer experience in mind.

---

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@colabottles/center-div/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@colabottles/center-div
[npm-downloads-src]: https://img.shields.io/npm/dm/@colabottles/center-div.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@colabottles/center-div
[license-src]: https://img.shields.io/npm/l/@colabottles/center-div.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@colabottles/center-div
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js&logoColor=00DC82
[nuxt-href]: https://nuxt.com
