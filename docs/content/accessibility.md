# Accessibility

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

## Accessibility Testing

This module is tested with axe-core to ensure:

- No WCAG violations introduced
- No DOM rendering
- No focus manipulation
- No ARIA misuse
- Reflow-safe layout

Accessibility regressions fail CI.
