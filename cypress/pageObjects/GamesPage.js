class GamesPage {

  gamesPage() {
    return cy.get(".nav-links > a:nth-of-type(1)");
  }

  category() {
    return cy.get("#react-tabs-1 > div.all-categories.TRUE_FALSE > div > div");
  }

  categoryTopic() {
    return cy.get("div.subs > p:nth-child(1)", {
      timeout: 2000
    })
  }

  singlePlayerGame() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > div > img:nth-child(1)")
  }

  duelPlayerGame() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > div > img:nth-child(2)")
  }

  selectPlayer() {
    return cy.get("#root > div > div.select-content > div.users-friends > div > div > div:nth-child(1) > div")
  }

  sendRequestbutton() {
    return cy.get("#root > div > div.send-invite > button")
  }

  startGameButton() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > button")
  }

  startDuelGameButton() {
    return cy.get("#root > div > div.invite-player-content > div:nth-child(2) > div > button")
  }

  selectOption() {
    return cy.get("#root > div > div.game-board > div.questions-area > div.questions > div.game-question > div > div:nth-child(1)")
  }

  selectOption2() {
    return cy.get("#root > div > div.game-board > div.questions-area > div.questions > div.game-question > div > div:nth-child(2)")
  }

  useTimefeezeBoost() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > button")
  }

  useSkipBoost() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > button")
  }

  useBombBoost() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > button")
  }

  nextButton() {
    return cy.get(".next")
  }

  finishButton() {
    return cy.get("#root > div > div.game-board > div.questions-area > div.questions > div.question-buttons > button")
  }

  playAgainButton() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > div:nth-child(6) > button:nth-child(2)")
  }

  continueButton() {
    return cy.get("body > div.fade.modal.show > div > div > div > div > div > div:nth-child(6) > button:nth-child(1)")
  }

}

export default GamesPage;