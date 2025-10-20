// tests/test-sauce.js
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('SauceDemo Automation', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Sukses Login', async function () {
    await driver.get('https://www.saucedemo.com');
    await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
    await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
    await driver.findElement(By.css('[data-test="login-button"]')).click();

    const title = await driver.getTitle();
    assert.strictEqual(title, 'Swag Labs');
  });

  it('Urutkan Produk dari A-Z', async function () {
    await driver.get('https://www.saucedemo.com/inventory.html');
    const sortDropdown = await driver.findElement(By.css('.product_sort_container'));
    await sortDropdown.sendKeys('Name (A to Z)');

    const firstItem = await driver.findElement(By.css('.inventory_item_name'));
    const itemText = await firstItem.getText();
    assert.ok(itemText); // validasi nama produk muncul
  });
});