const { test, expect } = require('@playwright/test');

test('Valid Login Test', async ({ page }) => {
    // 1. Open login page
    await page.goto('https://the-internet.herokuapp.com/login');

    // 2. Enter username
    await page.locator('#username').fill('tomsmith');

    // 3. Enter password
    await page.locator('#password').fill('SuperSecretPassword!');

    // 4. Click login button
    await page.locator('button[type="submit"]').click();

    // 5. Verify successful login
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Open youtube', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await expect(page).toHaveURL('https://www.youtube.com/');
});

test('Validate custom login page', async ({ page }) => {
    // open the page
    await page.goto('https://www.saucedemo.com/')

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.click('#login-button')
})

test('Invalid Login Test', async ({ page }) => {

    // 1. Open login page
    await page.goto('https://the-internet.herokuapp.com/login');
    // 2. Enter invalid username
    await page.locator('#username').fill('invalidUser');
    // 3. Enter invalid password
    await page.locator('#password').fill('invalidPass');
    // 4. Click login button
    await page.locator('button[type="submit"]').click();
    // 5. Verify error message
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});

test('Empty Credentials Test', async ({ page }) => {
    // 1. Open login page
    await page.goto('https://the-internet.herokuapp.com/login');
    // 2. Leave username and password fields empty
    await page.locator('#username').fill('');
    await page.locator('#password').fill('');
    // 3. Click login button

    await page.locator('button[type="submit"]').click();
    // 4. Verify error message
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
