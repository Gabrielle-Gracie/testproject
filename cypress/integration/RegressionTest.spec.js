/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

/****Sign-Up Test Cases****/
describe("Signup Test Suite", function () {

    beforeEach(() => {
        cy.openURL({});
    }
    );

    it('should signup successfully with valid details', () => {
        cy.successfulSignup({})
    });

    it('should not signup leaving fields empty', () => {
        cy.emptyFieldValidationError({})
    });

    it('should not signup with phone number less than 11 digits', () => {
        cy.lessPhonenumberError({})
    });

    it('should not signup with existing email', () => {
        cy.emailExist({})
    });

    it('should not signup with existing phone number', () => {
        cy.phonenumberExist({})
    });

    it('should not signup with digits as First or Last Name', () => {
        cy.invalidInput({})
    });


});



// // /****Login****/
describe("Login and Logout test Suite", function () {

    beforeEach(() => 
    {cy.openURL({});
    }
    );

// //     /****Login and Logout Test Cases****/

    it('should login successfully via the landing page', () => {
        cy.landingpageLogin({})
    });

    it('should login and logout successfully via the login page', () => {
        cy.successfulLoginAndLogout({})
    });

    it('should not login with invalid credentials', () => {
        cy.invalidCredentials({})

    });


     });





/****Dashboard Test Cases****/
describe("Dashboard Test Suite", function () {

    beforeEach(() => {
        cy.openURL({});
    });

        it("should validate user's dashboard details are present", () => {
            cy.validateDashboardDetails({})
        });

    it('should play a game successfully from the dashboard page', () => {
        cy.playGames({})
    });

    //     // it('should not create quiz', () => {
    //     //     cy.phonenumberExist({})
    //     // });

        it('should validate leaderboard is present', () => {
            cy.leaderboardDetails({})
        });

        it('should valid user can navigate and view extended leaderboard', () => {
            cy.extLeaderboardDetails({})
        });

});



// /****Profile****/
 describe("Profile test Suite", function () {

    beforeEach(() => {
        cy.openURL({});
    });

    it('Should be able to view and edit Profile details', () => {
        cy.editProfileDetails({})
    });

    it('should update bank details successfully', () => {
        cy.updateBankDetails({})
    });

    it('should not allow letters in bank number', () => {
        cy.fundLessThan500({})

    });


});


// /****Wallet****/
 describe("Wallet test Suite", function () {

     beforeEach(() => {
         cy.openURL({});
     });

     it('should view wallet transactions list', () => {
         cy.walletPage({})
     });

    //  it('should fund wallet successfully', () => {
    //      cy.fundWalletSuccessful({})
    //  });

     it('should not fund with amount less than 500', () => {
         cy.fundLessThan500({})

     });


 });


// /****Store****/
  describe("Store test Suite", function () {

    beforeEach(() => {
        cy.openURL({});
    });

    it('should view store dashboard', () => {
        cy.storePage({})
    });

    it('should buy each boost via game points', () => {
        cy.buyEachBoostViaPoints({})
    });

    it('should  buy each boost via funds in wallet', () => {
        cy.buyEachBoostViaWallet({})

    });


});


// /****Games****/
describe("Games test Suite", function () {

    beforeEach(() => {
        cy.openURL({});
    });

    it('should play a game successfully again from the games page', () => {
        cy.playGame({})
    });

    it('should play true or false duel game successfully', () => {
        cy.duelGame({})
    });



});