const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Delete Monster', () => {
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

  it('should delete a monster', () => {
    MonsterListPage.monsterItemContainer(1).click();

    MonsterCardPage.manageMonsterMenu.click();

    MonsterCardPage.deleteMonster.click();

    assert.equal(MonsterCardPage.deleteMonsterModal.isDisplayed(), true, 'Delete modal is not displayed');
    assert.equal(
      MonsterCardPage.deleteMonsterModalText.getText(),
      'Are you sure you want to delete this monster?',
      'text is not correct'
    );

    MonsterCardPage.deleteMonsterModalYes.click();

    assert.equal(MonsterListPage.monsterItemContainer(1).isDisplayed(), true, 'item 1 does not exist');
    assert.equal(MonsterListPage.monsterName(1).getText() !== 'Vampire', true, 'Vampire still exist');
  });

  it('should not delete a monster', () => {
    MonsterListPage.monsterItemContainer(1).click();

    MonsterCardPage.manageMonsterMenu.click();

    MonsterCardPage.deleteMonster.click();

    MonsterCardPage.deleteMonsterModalNo.click();

    assert.equal(MonsterListPage.monsterItemContainer(2).isDisplayed(), true, 'item 2 does not exist');
    assert.equal(MonsterListPage.monsterName(1).getText() == 'Vampire', true, 'Vampire does not exist');
  });
});
