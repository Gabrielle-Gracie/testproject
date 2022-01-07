class WalletPage {

   
    wallet() {
        return cy.get(".wallet-tour-step");
    }

    walletBalance() {
        return cy.get(".balance > h3");
    }

    initiateFundWalletButton() {
        return cy.get(".fund");
    }

    fundAmountField() {
        return cy.get("input[name='amount']")
    }
    
    addFundToWalletButton() {
        return cy.get("div:nth-of-type(2) > button:nth-of-type(2)");
      }

}

export default WalletPage;