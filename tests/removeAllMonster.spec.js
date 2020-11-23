const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

// This test will fail if Allure report is enabled in wdio.conf.js

describe('Test Suite: Remove All Monster', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
    browser.url('');

    LoginPage.login(username, password);
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {});

  it.skip('should remove all monster', () => {
    ButtonsAreaPage.removeMonsterButton.click();

    assert.equal(browser.getAlertText(), 'Are you sure you want to remove all monsters?', 'Alert text is not correct');

    browser.acceptAlert();

    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 0', 'Count text is not correct');

    assert.equal(MonsterListPage.monsterItemContainerList.length == 0, true, 'Monster list still exist');
  });

  it('should not remove all monster', () => {
    ButtonsAreaPage.removeMonsterButton.click();

    browser.dismissAlert();

    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 2', 'Count text is not correct');

    assert.equal(MonsterListPage.monsterItemContainerList.length == 2, true, 'Monster list still exist');
  });
});
