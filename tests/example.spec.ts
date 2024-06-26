import { test, expect } from '@playwright/test';

import { _electron as electron } from 'playwright-core';

const baseURL = 'http://www.amazon.com';
let homeDir = process.env.HOME;

test('Open Electron App', async () => {
  // Launch Electron app.
  const path = homeDir.concat(
    '/dani-new-react-app/release/build/mac/ElectronReact.app/Contents/MacOS/ElectronReact',
  );
  console.log('Attempting to launch Electron app at: ', path);
  const electronApp = await electron.launch({ executablePath: path });
  // // Evaluation expression in the Electron context.
  // const appPath = await electronApp.evaluate(async ({ app }) => {
  //   // This runs in the main Electron process, parameter here is always
  //   // the result of the require('electron') in the main app script.
  //   return app.getAppPath();
  // });
  // console.log(appPath);

  // Get the first window that the app opens, wait if necessary.)
  const window = await electronApp.firstWindow();
  // Print the title.
  console.log(window.title);
  // Capture a screenshot.
  await window.screenshot({ path: 'intro.png' });
  // Direct Electron console to Node terminal.
  window.on('console', console.log);
  // Click button.
  await window.click('text=Order');
  // Exit app.
  await electronApp.close();
});

test('Open Electron App Intentional Failure', async () => {
  // Launch Electron app.
  const path = homeDir.concat(
    '/dani-new-react-app/release/build/mac/ElectronReact.app/Contents/MacOS/ElectronReact',
  );
  console.log('Attempting to launch Electron app at: ', path);
  const electronApp = await electron.launch({ executablePath: path });
  // // Evaluation expression in the Electron context.
  // const appPath = await electronApp.evaluate(async ({ app }) => {
  //   // This runs in the main Electron process, parameter here is always
  //   // the result of the require('electron') in the main app script.
  //   return app.getAppPath();
  // });
  // console.log(appPath);

  // Get the first window that the app opens, wait if necessary.)
  const window = await electronApp.firstWindow();
  // Print the title.
  console.log(window.title);
  // Capture a screenshot.
  await window.screenshot({ path: 'intro.png' });
  // Direct Electron console to Node terminal.
  window.on('console', console.log);
  // Click button.
  await window.click('text=Nothinggggg');
  // Exit app.
  await electronApp.close();
});


test('Amazon has title', async ({ page }) => {
  await page.goto(baseURL);

  await expect(page).toHaveTitle(/Amazon/);
});

test('Amazon has search button', async ({ page }) => {
  await page.goto(baseURL);

  await expect(page.getByRole('button', { name: 'Go' })).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
