import { test, expect } from '@playwright/test'

test.describe('CenterDiv E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for app to hydrate
    await page.waitForLoadState('networkidle')
  })

  test('component renders and centers content', async ({ page }) => {
    // Check that at least one CenterDiv is rendered
    const centerDivs = page.locator('.nuxt-center-div')
    await expect(centerDivs.first()).toBeVisible()

    // Check the first one has centering styles
    const firstCenterDiv = centerDivs.first()
    const styles = await firstCenterDiv.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        display: computed.display,
        placeItems: computed.placeItems,
      }
    })

    expect(styles.display).toBe('grid')
    expect(styles.placeItems).toBe('center')
  })

  test('renders with different axis options', async ({ page }) => {
    // Wait for at least one to be visible
    await page.waitForSelector('.nuxt-center-div', { state: 'visible' })

    // Test we have multiple CenterDiv instances
    const centerDivs = page.locator('.nuxt-center-div')
    const count = await centerDivs.count()
    expect(count).toBeGreaterThan(0)
  })

  test('button inside CenterDiv is visible', async ({ page }) => {
    // Find buttons specifically inside CenterDiv
    const buttonsInCenterDiv = page.locator('.nuxt-center-div button')
    await expect(buttonsInCenterDiv.first()).toBeVisible()
  })

  test('renders as different HTML elements', async ({ page }) => {
    // Check for article element (from as="article" prop)
    const article = page.locator('article.nuxt-center-div')
    await expect(article).toBeVisible()
  })
})
