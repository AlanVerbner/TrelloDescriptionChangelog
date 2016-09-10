import path from 'path';
import webdriver from 'selenium-webdriver';
import {
  expect
} from 'chai';
import {
  startChromeDriver,
  buildWebDriver
} from '../func';

describe('inject page (in trello.com)', function test() {
  let driver;
  this.timeout(15000);

  before(async() => {
    await startChromeDriver();
    const extPath = path.resolve('build');
    driver = buildWebDriver(extPath);
  });

  beforeEach(async() => {
    await driver.get('https://trello.com/b/j5ucRwpF/sample-board');
  });

  after(async() => driver.quit());

  it('should render inject app', async() => {
    await driver.wait(
      () => driver.findElements(webdriver.By.className('trello-history'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app not found'
    );
  });

  it('should find `View History` button', async() => {
    driver.findElement(webdriver.By.css('a[href*="this-is-a-card"]')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('.show-trello-history'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app `Open TodoApp` button not found'
    );
  });

  it('should show history once `View History` button is clicked', async() => {
    driver.findElement(webdriver.By.css('a[href*="this-is-a-card"]')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('.show-trello-history'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app `Open TodoApp` button not found'
    );
    driver.findElement(webdriver.By.css('.show-trello-history')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('#history-container'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app container didn\'t open'
    );
  });

  it('should show history items for a card with history', async() => {
    driver.findElement(webdriver.By.css('a[href*="this-is-a-card"]')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('.show-trello-history'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app `Open TodoApp` button not found'
    );
    driver.findElement(webdriver.By.css('.show-trello-history')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('#history-container'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app container didn\'t open'
    );
    driver.findElements(webdriver.By.css('#history-container .mod-comment-type'))
      .then(elems => elems.length === 4);
  });

  it('should show no items title for a card without history', async() => {
    driver.findElement(webdriver.By.css('a[href*="asdasd"]')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('.show-trello-history'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app `Open TodoApp` button not found'
    );
    driver.findElement(webdriver.By.css('.show-trello-history')).click();
    await driver.wait(
      () => driver.findElements(webdriver.By.css('#history-container'))
      .then(elems => elems.length > 0),
      100000,
      'Inject app container didn\'t open'
    );
    driver.findElements(webdriver.By.css('#no-items-title'))
      .then(elems => elems.length === 4);
  });
});
