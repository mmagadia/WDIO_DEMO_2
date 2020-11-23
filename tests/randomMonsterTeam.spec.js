const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterData = require('../data/monster.json');
const { assert } = require('chai');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Create Random Monsters', () => {
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
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    assert.equal(
      MonsterListPage.monsterCountText.getText(),
      'Number of monsters: 5',
      'Number of monster is not correct'
    );
    assert.equal(MonsterListPage.monsterItemContainerList.length == 5, true, 'Monster list length is not correct');

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      var monsterName = MonsterListPage.monsterName(i).getText();
      for (let j = 0; j < MonsterData.length; j++) {
        if (monsterName == MonsterData[j].name) {
          console.log(`${monsterName}: ${MonsterData[j].name}`);
          assert.equal(
            MonsterListPage.monsterDescription(i).getText(),
            MonsterData[j].desc,
            `Decription for row ${monsterName} is not correct`
          );
          assert.equal(
            MonsterListPage.monsterIcon(i).getAttribute('class'),
            MonsterData[j].icon,
            `icon for row ${monsterName} is not correct`
          );
          break;
        } else if (j == MonsterData.length - 1) {
          assert.equal(false, true, `Monster with name ${monsterName} was not found.`);
        }
      }
    }

    // assert.equal(MonsterListPage.monsterName(1).getText(), '', 'Monster name is not correct');
    // assert.equal(MonsterListPage.monsterDescription(1).getText(), '', 'Monster decsription is not correct');
    // assert.equal(MonsterListPage.monsterIcon(1).getAttribute('class'), '', 'Monster icon is not correct');
  });
});
