import { test, expect } from '@playwright/test';

test.describe('Brand Name Update Verification', () => {
  test('verify brand name update in navbar and footer', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 1. Verify Page Title
    const title = await page.title();
    expect(title).toContain('SnowPlowBot');
    console.log('Page title verified:', title);

    // 2. Capture Navbar Brand
    const navbar = page.locator('nav');
    await expect(navbar).toContainText('SnowPlowBot');
    await navbar.screenshot({ path: 'tests/screenshots/navbar-brand-update.png' });
    console.log('Navbar brand update screenshot captured.');

    // 3. Capture Footer Brand
    const footer = page.locator('footer');
    await expect(footer).toContainText('SnowPlowBot');
    // Scroll to footer first
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await footer.screenshot({ path: 'tests/screenshots/footer-brand-update.png' });
    console.log('Footer brand update screenshot captured.');

    // 4. Capture About Section (mentions SnowPlowBot)
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await aboutSection.screenshot({ path: 'tests/screenshots/about-brand-update.png' });
    console.log('About section brand update screenshot captured.');
  });
});
