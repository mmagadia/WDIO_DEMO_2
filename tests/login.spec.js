const { assert } = require('chai');
const LoginPage = require('../pages/login.page');

describe('Test Suite: Login', () => {
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

  it('should display error when fields are blank', () => {
    browser.url('');

    LoginPage.usernameField.click();
    LoginPage.passwordField.click();
    assert.equal(LoginPage.emailErrorText.isDisplayed(), true, 'Email required error text is not displayed');
    assert.equal(
      LoginPage.emailErrorText.getText(),
      'Username is required',
      'Email required error text is not correct'
    );

    LoginPage.usernameField.click();
    assert.equal(LoginPage.passwordErrorText.isDisplayed(), true, 'Password error text is not dipslayed');
    assert.equal(LoginPage.passwordErrorText.getText(), 'Password is required', 'Password error text is not correct');
  });

  it('should display error when email is invalid', () => {
    let emails = ['bob', 'bob@', 'bob@bob.'];

    for (let i = 0; i < emails.length; i++) {
      browser.url('');
      LoginPage.usernameField.click();
      LoginPage.usernameField.setValue(emails[i]);
      LoginPage.passwordField.click();
      assert.equal(LoginPage.emailErrorText.isDisplayed(), true, 'Email invalid error text is not displayed');
      assert.equal(
        LoginPage.emailErrorText.getText(),
        'Username needs to be a valid email',
        'Email format error text is not correct'
      );
    }
  });

  it('should display error when username or password is invalid', () => {
    let logins = [
      {
        email: 'bob@bob.com',
        password: 'fakepass'
      },
      {
        email: 'fake@bob.com',
        password: 'Test123'
      }
    ];

    for (let i = 0; i < logins.length; i++) {
      browser.url('');
      LoginPage.usernameField.setValue(logins[i].email);
      LoginPage.passwordField.click();
      LoginPage.passwordField.setValue(logins[i].password);
      LoginPage.loginButton.click();

      assert.equal(LoginPage.invalidErrorText.isDisplayed(), true, 'Invalid login text is not displayed');
      assert.equal(
        LoginPage.invalidErrorText.getText(),
        'Invalid username or password',
        'Invalid login text is not correct'
      );
    }
  });

  it('should login', () => {
    let username = 'bob@bob.com';
    let password = 'Test123';

    browser.url('');

    LoginPage.usernameField.setValue(username);
    LoginPage.passwordField.setValue(password);

    assert.equal(LoginPage.loginButton.isClickable(), true, 'Login button is not enabled');

    LoginPage.loginButton.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine`, 'Url is not correct');
  });

  it('should not route to mine page when not logged in', () => {
    browser.url('/mine');

    assert.equal(browser.getUrl(), `${configBaseUrl}`, 'App route to mine');
  });
});
