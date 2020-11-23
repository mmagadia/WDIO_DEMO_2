const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite: Sort Monster', () => {
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

  it('should sort monsters', () => {
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    ButtonsAreaPage.sortMonsterButton.click();

    let monsters = [];
    let monsterSorted = [];

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      monsters.push(MonsterListPage.monsterName(i).getText());
    }

    monsterSorted = monsters.sort();
    ('');

    for (let j = 0; j < monsters.length; j++) {
      assert.equal(monsters[j] == monsterSorted[j], true, `Row ${j + 1} is not in the correct position`);
      //console.log(`${monsters[j]} : ${monsterSorted[j]}`);
    }
  });
});
