class ButtonsAreaPage {
  get newMonsterButton() {
    return $('button=New Monster');
  }
  get randomMonsterButton() {
    return $('button=Random Monster');
  }
  get removeMonsterButton() {
    return $('button=Remove All Monsters');
  }
  get unfavoriteMonsterButton() {
    return $('button=Unfavorite All');
  }
  get createRandomMonsterTeamButton() {
    return $('button=Create Random Monster Team');
  }
  get sortMonsterButton() {
    return $('button=Sort Monsters');
  }
}

module.exports = new ButtonsAreaPage();
