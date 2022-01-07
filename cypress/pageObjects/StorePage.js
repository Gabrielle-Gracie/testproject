class StorePage {

    store() {
        return cy.get(".store-tour-step");
      }

    walletBalance() {
        return cy.get(".balance > h3");
      }

    pointsBalance() {
        return cy.get(".user-points > h3");
      }
    
    buyTimeFreeze(){
        return cy.get(".boost-icons > div:nth-of-type(1) > .StoreButton")
    }

    buyBombs(){
        return cy.get(".boost-icons > div:nth-of-type(2) > .StoreButton")
    }

    buySkips(){
        return cy.get(".boost-icons > div:nth-of-type(3) > .StoreButton")
    }

    payWithPoints(){
        return cy.get(".pay > div:nth-of-type(1) > .StoreButton")
    }

    payWithWallet(){
        return cy.get(".pay > div:nth-of-type(2) > .StoreButton")
    }

    successMessage(){
        return cy.get("div[role='alert']")
    }

    
}

export default StorePage;
