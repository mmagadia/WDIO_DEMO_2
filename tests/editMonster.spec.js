const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Edit Monster', () => {
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

  afterEach(() => {
    // Add code here
  });

  it('should edit a monster', () => {
    let name = 'The Burning Man';
    let description = 'This guy is on fire';

    MonsterListPage.monsterItemContainer(1).click();

    MonsterCardPage.manageMonsterMenu.click();
    MonsterCardPage.editMonster.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine/0/edit`, 'Url is not correct');

    NewEditMonsterPage.nameField.setValue(name);
    NewEditMonsterPage.favoriteCheckbox.click();
    NewEditMonsterPage.mageRadio.click();
    NewEditMonsterPage.descriptionField.setValue(description);
    NewEditMonsterPage.saveButton.click();

    assert.equal(MonsterListPage.monsterName(1).getText(), name, 'monster name is not correct');
    assert.equal(MonsterListPage.monsterDescription(1).getText(), description, 'Description is not correct');
    assert.equal(
      MonsterListPage.monsterIcon(1).getAttribute('class'),
      'glyphicon ra ra-laser-blast pull-right role',
      'icon is not correct'
    );
    assert.equal(MonsterListPage.favoriteIcon(1).isDisplayed(), false, 'monster row 1 is still favorite');

    assert.equal(MonsterCardPage.monsterCardName.getText(), name, 'monster name is not correct');
    assert.equal(MonsterCardPage.monsterDescription.getText(), description, 'Description is not correct');
    assert.equal(
      MonsterCardPage.monsterIcon.getAttribute('class'),
      'glyphicon ra ra-laser-blast pull-right role',
      'icon is not correct'
    );
  });
});
