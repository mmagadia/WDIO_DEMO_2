const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Smoke', () => {
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

  it('should validate static contents on login page', () => {
    browser.url('');

    assert.equal(browser.getUrl(), configBaseUrl, 'URL is not correct');

    // Test that static elements are displayed
    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');
    assert.equal(LoginPage.usernameLabel.isDisplayed(), true, 'Username label is not displayed');
    assert.equal(LoginPage.usernameField.isDisplayed(), true, 'Username field is not displayed');
    assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'Password label is not displayed');
    assert.equal(LoginPage.passwordField.isDisplayed(), true, 'Password field is not displayed');

    assert.equal(LoginPage.emailErrorText.isDisplayed(), false, 'Email error text is displayed');
    assert.equal(LoginPage.passwordErrorText.isDisplayed(), false, 'Password error text is displayed');

    assert.equal(LoginPage.loginButton.isDisplayed(), true, 'Login button is not displayed');

    // Test that static element texts are correct
    assert.equal(NavPage.brand.getText(), 'Monster Dream Team', 'Brand text is not correct');
    assert.equal(NavPage.monsterNavItem.getText(), 'My Monster Team', 'Monster nav item text is not correct');

    assert.equal(LoginPage.usernameLabel.getText(), 'Username', 'Username text is not correct');
    assert.equal(LoginPage.passwordLabel.getText(), 'Password', 'Password text is not correct');

    assert.equal(LoginPage.loginButton.getText(), 'Login', 'Login button text is not correct');

    // Test default element state
    assert.equal(LoginPage.loginButton.isClickable(), false, 'Login button is clickable');
    assert.equal(LoginPage.usernameField.getValue(), '', 'Username field is not blank');
    assert.equal(LoginPage.passwordField.getValue(), '', 'Password field is not blank');

    assert.equal(
      LoginPage.usernameField.getAttribute('placeholder'),
      'example@example.com',
      'Username placeholder is not correct'
    );
  });

  it('should validate static contents on nav bar when logged in', () => {
    browser.url('');

    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');

    // Login
    LoginPage.login(username, password);
    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');
    assert.equal(NavPage.burgerMenu.isDisplayed(), true, 'Burger menu is not displayed');

    //before opening menu
    assert.equal(NavPage.supportLink.isClickable(), false, 'Support Link is clickable');
    assert.equal(NavPage.logoutLink.isClickable(), false, 'Logout Link is clickable');

    // after opening menu
    NavPage.burgerMenu.click();

    assert.equal(NavPage.supportLink.isClickable(), true, 'Support Link is not clickable');
    assert.equal(NavPage.logoutLink.isClickable(), true, 'Logout Link is not clickable');
  });

  it('should validate static buttons area buttons', () => {
    browser.url('');

    LoginPage.login(username, password);

    //  assert.equal(ButtonsAreaPage..isDisplayed(), true, ' button is not displayed');
    assert.equal(ButtonsAreaPage.newMonsterButton.isDisplayed(), true, 'New Monster button is not displayed');
    assert.equal(ButtonsAreaPage.randomMonsterButton.isDisplayed(), true, 'Random Monster button is not displayed');
    assert.equal(ButtonsAreaPage.removeMonsterButton.isDisplayed(), true, ' Remove monster button is not displayed');
    assert.equal(ButtonsAreaPage.unfavoriteMonsterButton.isDisplayed(), true, 'Unfavorite button is not displayed');
    assert.equal(
      ButtonsAreaPage.createRandomMonsterTeamButton.isDisplayed(),
      true,
      'Create random monster team button is not displayed'
    );
    assert.equal(ButtonsAreaPage.sortMonsterButton.isDisplayed(), true, 'Sort monster button is not displayed');

    assert.equal(ButtonsAreaPage.newMonsterButton.getText(), 'New Monster', 'New Monster button text is not correct');
    assert.equal(
      ButtonsAreaPage.randomMonsterButton.getText(),
      'Random Monster',
      'Random Monster button text is not correct'
    );
    assert.equal(
      ButtonsAreaPage.removeMonsterButton.getText(),
      'Remove All Monsters',
      ' Remove monster button text is not correct'
    );
    assert.equal(
      ButtonsAreaPage.unfavoriteMonsterButton.getText(),
      'Unfavorite All',
      'Unfavorite button text is not correct'
    );
    assert.equal(
      ButtonsAreaPage.createRandomMonsterTeamButton.getText(),
      'Create Random Monster Team',
      'Create random monster team button text is not correct'
    );
    assert.equal(
      ButtonsAreaPage.sortMonsterButton.getText(),
      'Sort Monsters',
      'Sort monster button text is not correct'
    );
  });

  it('should display default monster list', () => {
    browser.url('');

    LoginPage.login(username, password);

    // assert.equal(MonsterListPage..getText(), '', '');
    assert.equal(
      MonsterListPage.monsterCountText.getText(),
      'Number of monsters: 2',
      'Monster count text is not correct'
    );

    // Monster row 1
    assert.equal(MonsterListPage.monsterName(1).getText(), 'Vampire', 'Monster name 1 is not correct');

    assert.equal(
      MonsterListPage.monsterDescription(1).getText(),
      'He just wants your blood.',
      'Monster Decription row 1 is not correct'
    );
    assert.equal(
      MonsterListPage.monsterIcon(1).getAttribute('class'),
      'glyphicon ra ra-sword pull-right role',
      'Monster icon row 1 is not correct'
    );
    assert.equal(
      MonsterListPage.favoriteIcon(1).getAttribute('class'),
      'glyphicon glyphicon-heart pull-right hearted',
      'Monster favorite icon row 1 is not correct'
    );

    //Monster row 2
    assert.equal(MonsterListPage.monsterName(2).getText(), 'Swamp Creature', 'Monster name row 2 is not correct');

    assert.equal(
      MonsterListPage.monsterDescription(2).getText(),
      'He awaits you in the swamp.',
      'Monster Decription row 2 is not correct'
    );
    assert.equal(
      MonsterListPage.monsterIcon(2).getAttribute('class'),
      'glyphicon ra ra-health pull-right role',
      'Monster icon row 2 is not correct'
    );
    assert.equal(MonsterListPage.favoriteIcon(2).isDisplayed(), false, 'Monster favorite icon row 2 is displayed');
  });

  it('should validate default contents in monster card', () => {
    browser.url('');

    LoginPage.login(username, password);

    assert.equal(MonsterCardPage.selectMonstertext.isDisplayed(), true, 'Select a monster text is not displayed');
    assert.equal(
      MonsterCardPage.selectMonstertext.getText(),
      'Select a Monster to edit.',
      'Select a monster text is not displayed'
    );

    MonsterListPage.monsterItemContainer(1).click();

    assert.equal(MonsterCardPage.selectMonstertext.isDisplayed(), false, 'Select a monster text is still displayed');
    assert.equal(MonsterCardPage.monsterCard.isDisplayed(), true, ' Monster Card is not displayed');
    assert.equal(MonsterCardPage.monsterCardName.getText(), 'Vampire', ' Monster name is not displayed');
    assert.equal(
      MonsterCardPage.monsterDescription.getText(),
      'He just wants your blood.',
      'Monster Description is not correct'
    );
    assert.equal(
      MonsterCardPage.monsterIcon.getAttribute('class'),
      'glyphicon ra ra-sword pull-right role',
      'icon is not correct'
    );
    assert.equal(
      MonsterCardPage.monsterfavoriteIcon.getAttribute('class'),
      'glyphicon glyphicon-heart pull-right hearted',
      'monster favorite is not correct'
    );

    assert.equal(MonsterCardPage.manageMonsterMenu.isDisplayed(), true, 'Manage monster menu is not displayed');

    MonsterCardPage.manageMonsterMenu.click();

    assert.equal(MonsterCardPage.editMonster.isDisplayed(), true, 'Edit monster is not displayed');
    assert.equal(MonsterCardPage.deleteMonster.isDisplayed(), true, 'Delete monster is not displayed');
  });

  it('should validate static content for new or edit form', () => {
    browser.url('');

    LoginPage.login(username, password);

    ButtonsAreaPage.newMonsterButton.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine/new`, 'url is not correct');

    assert.equal(NewEditMonsterPage.saveButton.isDisplayed(), true, 'Save button is not displayed');
    assert.equal(NewEditMonsterPage.saveButton.isEnabled(), false, 'Save button is enabled');

    assert.equal(NewEditMonsterPage.cancelButton.isDisplayed(), true, 'Cancel button is not displayed');
    assert.equal(NewEditMonsterPage.cancelButton.isEnabled(), true, 'Cancel button is not enabled');

    assert.equal(NewEditMonsterPage.nameLabelText.isDisplayed(), true, 'Name label text is not correct');
    assert.equal(NewEditMonsterPage.nameField.isDisplayed(), true, 'Name field is not displayed');

    assert.equal(NewEditMonsterPage.favoriteCheckbox.isDisplayed(), true, 'is not displayed');
    assert.equal(NewEditMonsterPage.favoriteLabel.isDisplayed(), true, 'is not displayed');
    assert.equal(NewEditMonsterPage.mosterRoleLabelText.isDisplayed(), true, 'Monster Role text is not displayed');

    assert.equal(NewEditMonsterPage.soldierRadio.isDisplayed(), true, 'Soldier radio button is not displayed');
    assert.equal(NewEditMonsterPage.soldierIcon.isDisplayed(), true, 'Soldier icon is not displayed');
    assert.equal(NewEditMonsterPage.medicRadio.isDisplayed(), true, 'Medic radio is not displayed');
    assert.equal(NewEditMonsterPage.medicIcon.isDisplayed(), true, 'Medic icon is not displayed');
    assert.equal(NewEditMonsterPage.shieldRadio.isDisplayed(), true, 'Shield radio is not displayed');
    assert.equal(NewEditMonsterPage.shieldIcon.isDisplayed(), true, 'Shield icon is not displayed');
    assert.equal(NewEditMonsterPage.thiefRadio.isDisplayed(), true, 'Thief radio is not displayed');
    assert.equal(NewEditMonsterPage.thiefIcon.isDisplayed(), true, 'Thief icon is not displayed');
    assert.equal(NewEditMonsterPage.mageRadio.isDisplayed(), true, 'Mage radio is not displayed');
    assert.equal(NewEditMonsterPage.mageIcon.isDisplayed(), true, 'Mage icon is not displayed');
    assert.equal(
      NewEditMonsterPage.descriptionLabelText.isDisplayed(),
      true,
      'Description label text is not displayed'
    );
    assert.equal(NewEditMonsterPage.descriptionField.isDisplayed(), true, 'Description field is not displayed');
    assert.equal(
      NewEditMonsterPage.nameRequiredErrorText.isDisplayed(),
      false,
      'Name required error text is not displayed'
    );
    assert.equal(
      NewEditMonsterPage.decsriptionRequiredErrorText.isDisplayed(),
      false,
      'Decsription required error text is not displayed'
    );

    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Soldier', 'Soldier label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Medic', 'Medic label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Shield', 'Shield label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Thief', 'Thief label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Mage', 'Mage label is not correct');
  });
});
