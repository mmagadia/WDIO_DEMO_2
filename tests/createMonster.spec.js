const CreateMonsterPage = require('../pages/newEditMonster.page');
const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Create Monster', () => {
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

  it('should create new monster', () => {
    let row = 3;
    let name = 'Nemesis';
    let description = 'The Pursuer or the Chaser';

    ButtonsAreaPage.newMonsterButton.click();
    CreateMonsterPage.nameField.setValue(name);
    CreateMonsterPage.favoriteCheckbox.click();
    CreateMonsterPage.thiefRadio.click();
    CreateMonsterPage.descriptionField.setValue(description);
    CreateMonsterPage.saveButton.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine`, 'url is not correct');
    assert.equal(
      MonsterListPage.monsterCountText.getText(),
      'Number of monsters: ' + row,
      'Monster count text is not correct'
    );
    assert.equal(MonsterListPage.monsterItemContainer(row).isDisplayed(), true, 'Monster Item does not exist');
    assert.equal(MonsterListPage.monsterName(row).getText(), name, 'Monster name is not correct');
    assert.equal(MonsterListPage.monsterDescription(row).getText(), description, 'Monster Description is not correct');
    assert.equal(
      MonsterListPage.monsterIcon(row).getAttribute('class'),
      'glyphicon ra ra-kunai pull-right role',
      'Monster icon is not correct'
    );
    assert.equal(MonsterListPage.favoriteIcon(row).isDisplayed(), true, 'Favorite icon is missing.');
  });

  it('should display error message when mandatory fields are empty', () => {
    ButtonsAreaPage.newMonsterButton.click();
    CreateMonsterPage.nameField.click();
    CreateMonsterPage.descriptionField.click();

    assert.equal(CreateMonsterPage.nameRequiredErrorText.isDisplayed(), true, 'name error text is not displayed');
    assert.equal(
      CreateMonsterPage.nameRequiredErrorText.getText(),
      'Name is required',
      'name error text is not correct'
    );

    CreateMonsterPage.nameField.click();
    assert.equal(
      CreateMonsterPage.decsriptionRequiredErrorText.isDisplayed(),
      true,
      'Description error text is not doisplayed'
    );
    assert.equal(
      CreateMonsterPage.decsriptionRequiredErrorText.getText(),
      'Description is required',
      'Description error text is not correct'
    );

    assert.equal(CreateMonsterPage.saveButton.isEnabled(), false, 'Save button is enabled');
  });
});
