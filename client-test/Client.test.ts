require('expect-puppeteer');

describe('General', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display "buy today and get 10% off" text on page', async () => {
    await expect(page).toMatch('buy today and get 10% off');
  });
});
