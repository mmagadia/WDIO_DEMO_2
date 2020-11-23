const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Create Random Monster', () => {
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

  it('should create random monster', () => {
    // ButtonsAreaPage.randomMonsterButton.click();

    // let item = MonsterListPage.monsterName(3).getText().length > 0;
    // console.log(`Item: ${item}`);

    // let description = MonsterListPage.monsterDescription(3).getText().length > 0;

    // assert.equal(MonsterListPage.monsterItemContainerList.length, 3, 'The number of monsters is not correct');

    // assert.equal(item, true, 'Name is not greater than 0');
    // assert.equal(description, true, 'decsription is not greater than 0');
    // assert.equal(MonsterListPage.monsterIcon(3).isDisplayed(), true, 'icon is missing');

    for (let i = 0; i < 10; i++) {
      ButtonsAreaPage.randomMonsterButton.click();

      let item = MonsterListPage.monsterName(i + 2).getText().length > 0;
      let description = MonsterListPage.monsterDescription(i + 2).getText().length > 0;

      assert.equal(MonsterListPage.monsterItemContainerList.length, i + 3, 'The number of monsters is not correct');

      assert.equal(item, true, 'Name is not greater than 0');
      assert.equal(description, true, 'decsription is not greater than 0');
      assert.equal(MonsterListPage.monsterIcon(i + 2).isDisplayed(), true, 'icon is missing');
      assert.equal(MonsterListPage.favoriteIcon(i + 2).isDisplayed(), false, 'random monster is favorite');
    }
  });
});
