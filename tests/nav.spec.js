const { assert } = require('chai');
const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Nav Bar', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
    // Add code here
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {});

  it('should open support page', () => {
    browser.url('');

    LoginPage.login(username, password);

    NavPage.burgerMenu.click();

    NavPage.supportLink.click();

    browser.switchWindow('https://glitchitsystem.com/');

    assert.equal(browser.getUrl(), 'https://glitchitsystem.com/', 'New window url is not correct');
  });

  it('should log out', () => {
    browser.url('');

    LoginPage.login(username, password);

    NavPage.burgerMenu.click();

    NavPage.logoutLink.click();

    assert.equal(NavPage.burgerMenu.isDisplayed(), false, 'Burger menu is still displayed');

    assert.equal(browser.getUrl(), configBaseUrl, 'Url is not correct');
  });
});
