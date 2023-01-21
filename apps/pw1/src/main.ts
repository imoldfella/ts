import { chromium } from 'playwright'

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://native-land.ca/');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();