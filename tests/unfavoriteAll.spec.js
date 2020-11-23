const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCard = require('../pages/monsterCard.page');
const newEditMonsterPage = require('../pages/newEditMonster.page');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Unfavorite all monster', () => {
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

  it('should unfavorite all', () => {
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      MonsterListPage.monsterItemContainer(i).click();
      MonsterCard.manageMonsterMenu.click();
      MonsterCard.editMonster.click();
      newEditMonsterPage.favoriteCheckbox.click();
      newEditMonsterPage.saveButton.click();
    }

    for (let j = 1; j <= MonsterListPage.monsterItemContainerList.length; j++) {
      assert.equal(
        MonsterListPage.favoriteIcon(j).getAttribute('class'),
        'glyphicon glyphicon-heart pull-right hearted',
        'Favorite icon is missing'
      );
    }

    ButtonsAreaPage.unfavoriteMonsterButton.click();

    for (let j = 1; j <= MonsterListPage.monsterItemContainerList.length; j++) {
      assert.equal(MonsterListPage.favoriteIcon(j).isDisplayed(), false, 'Favorite icon still exist');
    }
  });
});
