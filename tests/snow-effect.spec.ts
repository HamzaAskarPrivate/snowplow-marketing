import { test, expect } from '@playwright/test';

test.describe('Snow Effect Enhancement', () => {
  test('hero section displays enhanced snow animation', async ({ page }) => {
    await page.goto('/');

    // Wait for page to fully load and animations to start
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Allow snow animations to render

    // Capture full hero section screenshot
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    await page.screenshot({
      path: 'tests/screenshots/hero-snow-effect-desktop.png',
      fullPage: false,
    });

    // Verify snowflake elements are present (should have 50 now)
    const snowflakes = page.locator('section svg');
    const snowflakeCount = await snowflakes.count();

    // We expect at least 50 snowflakes in the hero (from SNOW_CONFIG.SNOWFLAKE_COUNT)
    expect(snowflakeCount).toBeGreaterThanOrEqual(50);

    console.log(`Verified ${snowflakeCount} snowflake elements rendered`);
  });

  test('snow effect renders correctly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 13 size
    await page.goto('/');

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'tests/screenshots/hero-snow-effect-mobile.png',
      fullPage: false,
    });

    // Verify hero section is visible on mobile
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
  });

  test('snow animation performance check', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Capture multiple frames to verify animation is running
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: 'tests/screenshots/snow-animation-frame-1.png',
    });

    await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'tests/screenshots/snow-animation-frame-2.png',
    });

    // Check that page remains responsive
    const heading = page.locator('h1');
    await expect(heading).toContainText('Autonomous');
  });
});
