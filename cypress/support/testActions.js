import LandingPage from "../pageObjects/LandingPage";
import LoginPage from "../pageObjects/LoginPage";
import SignupPage from "../pageObjects/SignupPage";
import Testdata from "../testData/testdata";
import DashboardPage from "../pageObjects/DashboardPage";
import ProfilePage from "../pageObjects/ProfilePage";
import WalletPage from "../pageObjects/WalletPage";
import StorePage from "../pageObjects/StorePage";
import GamesPage from "../pageObjects/GamesPage";

const loginData = new Testdata("gabrielleohanwusi@gmail.com", "awesomeGod01");
const landingPage = new LandingPage();
const loginPage = new LoginPage();
const signupPage = new SignupPage();
const dashboardPage = new DashboardPage();
const profilePage = new ProfilePage();
const walletPage = new WalletPage();
const storePage = new StorePage();
const gamesPage = new GamesPage();

let account_number = Math.floor(1000000000 + Math.random() * 9000000000);
let phone_number = '080' + Math.floor(10000000 + Math.random() * 90000000);

function ramdomXter(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const getIframeDocument = () => {
    return cy
        .get('iframe[name="paystack-checkout-Lc4tR"]')
        .its('html.body').should('exist')
}
const getIframeBody = () => {
    // get the document
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}


Cypress.Commands.add("openURL", () => {
    //Picks Url from environment variable in cypress.json file
    cy.visit(Cypress.env("url"));
  });

/****** Sign-Up Actions ***/
//Successful Sign-up
Cypress.Commands.add("successfulSignup", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.firstNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.lastNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.usernameField().type(ramdomXter(6));
    cy.wait(1000)
    signupPage.phoneField().type(phone_number);
    cy.wait(1000)
    signupPage.emailField().type(ramdomXter(5) + "@mailinator.com");
    cy.wait(1000)
    signupPage.passwordField().type("awesomeGod01");
    cy.wait(1000)
    signupPage.confirmPasswordField().type("awesomeGod01");
    cy.wait(1000)
    signupPage.signupButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(2000)
das
});


//Field validation
Cypress.Commands.add("emptyFieldValidationError", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.signupButton().click();
    signupPage.firstnameValidationError().should('contain', '*required');
    signupPage.lastnameValidationError().should('contain', '*required');
    signupPage.usernameValidationError().should('contain', '*required');
    signupPage.phonenumberValidationError().should('contain', '*required');
    signupPage.emailValidationError().should('contain', '*required');
    signupPage.passwordValidationError().should('contain', '*required');
    signupPage.confirmpasswordValidationError().should('contain', '*required');

});

//Less phone digits
Cypress.Commands.add("lessPhonenumberError", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.firstNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.lastNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.usernameField().type(ramdomXter(6));
    cy.waitFor(1000)
    signupPage.phoneField().type('08065678');
    signupPage.phonenumberValidationError().should('contain', '*Phone number must be 11 digits.');

});

//Existing Email
Cypress.Commands.add("emailExist", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.firstNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.lastNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.usernameField().type(ramdomXter(6));
    cy.waitFor(1000)
    signupPage.phoneField().type(phone_number);
    cy.waitFor(1000)
    signupPage.emailField().type("pytanapu@mailinator.com");
    cy.wait(1000)
    signupPage.passwordField().type("awesomeGod01");
    cy.waitFor(1000)
    signupPage.confirmPasswordField().type("awesomeGod01");
    cy.waitFor(1000)
    signupPage.signupButton().click();
    cy.waitFor(1000)
    loginPage.invalidCredentialsError()
        .should('be.visible')
        .should('contain', 'The email has already been taken')
    cy.wait(3000);
    loginPage.invalidCredentialsError().should('not.be.visible')

});


//Existing Phone number
Cypress.Commands.add("phonenumberExist", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.firstNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.lastNameField().type(ramdomXter(5));
    cy.wait(1000)
    signupPage.usernameField().type(ramdomXter(6));
    cy.waitFor(1000)
    signupPage.phoneField().type('08139505091');
    cy.waitFor(1000)
    signupPage.emailField().type(ramdomXter(5) + "@mailinator.com");
    cy.wait(1000)
    signupPage.passwordField().type("awesomeGod01");
    cy.waitFor(1000)
    signupPage.confirmPasswordField().type("awesomeGod01");
    cy.waitFor(1000)
    signupPage.signupButton().click();
    cy.waitFor(1000)
    loginPage.invalidCredentialsError()
        .should('be.visible')
        .should('contain', 'The phone number has already been taken')
    cy.wait(3000);
    loginPage.invalidCredentialsError().should('not.be.visible')

});


//Invalid First and Last name input
Cypress.Commands.add("invalidInput", () => {
    landingPage.createPageButton().click();
    cy.wait(1000)
    signupPage.firstNameField().type('67678');
    cy.wait(1000)
    signupPage.lastNameField().type('77687');
    signupPage.firstnameValidationError().should('contain', 'Name must not contain numbers');
    signupPage.lastnameValidationError().should('contain', 'Name must not contain numbers');
});



/****** Login Actions ***/
//Login via landing page
Cypress.Commands.add("landingpageLogin", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)

});




/****** Login Page Actions ***/
//Successful Logout and Login via login page
Cypress.Commands.add("successfulLoginAndLogout", () => {
    landingPage.createPageButton().click();
    cy.wait(1000);
    signupPage.signinLinkButton().click();
    cy.wait(1000);
    loginPage.emailLoginPage().type(loginData.email);
    cy.wait(1000);
    loginPage.passwordLoginPage().type(loginData.password);
    cy.wait(1000);
    loginPage.buttonLoginPage().click();
    cy.wait(1000);
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(1000);
    cy.get('.nav-links > svg:nth-of-type(2)').click();
    dashboardPage.logout().should('have.text', 'Sign Out').click();
});


//Invalid Login Credentials
Cypress.Commands.add("invalidCredentials", () => {

    function emailid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    landingPage.createPageButton().click();
    cy.wait(1000);
    signupPage.signinLinkButton().click();
    cy.wait(1000);
    loginPage.emailLoginPage().type(emailid(6) + "@mailinator.com");
    cy.wait(1000);
    loginPage.passwordLoginPage().type(loginData.password);
    cy.wait(1000);
    loginPage.buttonLoginPage().click({
        force: true
    });
    cy.wait(500);
    loginPage.invalidCredentialsError()
        .should('be.visible')
        .should('contain', 'Invalid email or password')
        .should('not.be.visible')


});






/****** Dashboard Page Actions ***/
//Successfully validate dashboard details
Cypress.Commands.add("validateDashboardDetails", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(3000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    dashboardPage.userGameDashboard().within(($userGameDashboard) => {
        cy.get('img').should('include.class', 'avatar')
        cy.get('h1').should('include.class', 'firstname')
        cy.get('h3').should('include.class', 'username')
        cy.get('div').should('include.class', 'games-played')
        cy.get('h2').should('include.class', 'game-number')
        cy.get('h3').should('contain.text', 'GAMES PLAYED')
        cy.get('h3').should('contain.text', 'GLOBAL RANKING')
        cy.get('span').should('contain.text', 'Points')
        cy.get('span').should('contain.text', 'Wallet Balance')
    })
    cy.wait(1000)
   

});

//Successfully play a game category via dashboard
Cypress.Commands.add("playGames", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(1000)
    dashboardPage.games().within(($games) => {
        cy.get('h1').should('contain.text', 'Games')
        cy.get('h1').should('contain.text', 'Recently Played')
    
    })
    cy.wait(1000)
    dashboardPage.selectGame().click()
    cy.wait(1000)
    gamesPage.category().click()
    cy.wait(1000)
    gamesPage.categoryTopic().click()
    cy.wait(1000)
    gamesPage.singlePlayerGame().click()
    cy.wait(1000)
    gamesPage.startGameButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.finishButton().click()
    cy.wait(1000)
    gamesPage.continueButton().click()

});



//Successfully view leaderboard details
Cypress.Commands.add("leaderboardDetails", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(3000)
    dashboardPage.userDashboard().should('be.visible');
    dashboardPage.leaderboardDetails().within(($leaderboardDetails) => {
        cy.get('h1').should('have.class', 'leaderboard-title').should('contain.text', 'Leaderboard')
        cy.get('a').should('have.class', 'extended-leaders-button').should('contain.text', 'Extended Leaderboard →')
        cy.get('div').should('have.class', 'TopLeaders').should('contain.text', 'Extended Leaderboard →')
        cy.get('div').should('have.class', 'TopLeaderPosition')
        cy.get('div > span').should('have.class', 'points')

    })
    cy.wait(1000)
});

//Successfully navigate to and view extended leaderboard details
Cypress.Commands.add("extLeaderboardDetails", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(3000)
    dashboardPage.userDashboard().should('be.visible');
    dashboardPage.extLeaderboardPage().click();
    dashboardPage.extLeaderboardDetails().within(($extLeaderboardDetails) => {
        cy.get('div').should('have.class', 'title-header').should('contain.text', 'Extended Leaderboard')

    })
    cy.wait(1000)
});



/****** Profile Page Actions ***/
//Successfully view and edit profile details
Cypress.Commands.add("editProfileDetails", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(3000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    cy.get('#root > div > div.headers > div.app-header > div.nav-links > div > svg').click();
    cy.wait(1000)
    profilePage.getProfilePage().should('have.text', 'My Profile').click()
    cy.wait(1000)
    profilePage.editProfileDetailsButton().click()
    cy.wait(1000)
    cy.get("input[name='First Name']").clear().type(ramdomXter(5))
    cy.wait(1000)
    cy.get("input[name='Phone Number']").type('{backspace}').type('1')
    cy.wait(1000)
    profilePage.saveProfileDetailsButton().click()
    cy.wait(1000)
    profilePage.profileSuccessMessage().should('be.visible').should('contain.text', 'Profile Updated')
    cy.wait(1000)
});



//Successfully update bank details
Cypress.Commands.add("updateBankDetails", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.reload();
    cy.wait(3000)
    cy.get('#root > div > div.headers > div.app-header > div.nav-links > div > svg').click();
    cy.wait(1000)
    profilePage.getProfilePage().should('have.text', 'My Profile').click()
    cy.wait(1000)
    profilePage.bankNameField().select('Guaranty Trust Bank', {
        force: true
    });
    cy.wait(6000)
    profilePage.getAccountNumberField().clear().type(account_number)
    cy.wait(1000)
    profilePage.accountNameField().type(ramdomXter(5) + ramdomXter(5))
    cy.wait(1000)
    profilePage.saveBankDetailsButton().click()
    cy.wait(1000)
    profilePage.bankDetailsSuccessMessage().should('be.visible').should('contain.text', 'Bank details updated successfully')
    cy.wait(1000)

});


//update bank number with letters
Cypress.Commands.add("updateBankNumber", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.reload();
    cy.wait(3000)
    cy.get('#root > div > div.headers > div.app-header > div.nav-links > div > svg').click();
    cy.wait(1000)
    profilePage.getProfilePage().should('have.text', 'My Profile').click()
    cy.wait(1000)
    profilePage.getAccountNumberField().clear().type(ramdomXter(5))
    cy.wait(1000)
    profilePage.saveBankDetailsButton().click()
    cy.wait(1000)
    profilePage.bankDetailsSuccessMessage().should('not.be.visible')
    cy.wait(1000)

});





/****** Wallet Page Actions ***/
//Wallet Dashboard
Cypress.Commands.add("walletPage", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    walletPage.wallet().click();
    cy.wait(1000)
    walletPage.walletBalance().should('be.visible');
    cy.wait(1000)
});


//Successful Fund Wallet
Cypress.Commands.add("fundWalletSuccessful", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    walletPage.wallet().click();
    cy.wait(1000)
    walletPage.initiateFundWalletButton().click();
    cy.wait(1000)
    walletPage.fundAmountField().clear().type('500');
    cy.wait(1000)
    walletPage.addFundToWalletButton().click();
    cy.wait(5000)
    getIframeBody().find('data-v-0a68721c').should('have.class', 'card__details__info').click({
        force: true
    })
    cy.wait(5000)
    // cy.getWithinIframe("div#test-cards > .button").click();
    // cy.wait(5000)
    // cy.get("tr > td:nth-of-type(3)")
    // cy.wait(1000)
    //     .should('be.visible')
    //     .should('have', 'FUND WALLET FROM BANK')

});


// Amount less than 500
Cypress.Commands.add("fundLessThan500", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    walletPage.wallet().click();
    cy.wait(1000)
    walletPage.initiateFundWalletButton().click();
    cy.wait(1000)
    walletPage.fundAmountField().clear().type('200');
    cy.wait(1000)
    walletPage.addFundToWalletButton().click();
    cy.wait(1000)
    cy.get('.FundWalletModal.modal-dialog.modal-dialog-centered p')
        .should('be.visible')
        .should('contain', 'Amount must be more than 500')
    cy.wait(1000)
});




/****** Store Page Actions ***/
//Store Dashboard
Cypress.Commands.add("storePage", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    storePage.store().click();
    cy.wait(1000)
    storePage.walletBalance().should('be.visible');
    cy.wait(1000)
    storePage.pointsBalance().should('be.visible');
    cy.wait(1000)
});


//Successful buy each boosts via points
Cypress.Commands.add("buyEachBoostViaPoints", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    storePage.store().click();
    cy.wait(1000)
    //buy time freeze boost
    storePage.buyTimeFreeze().click();
    cy.wait(1000)
    storePage.payWithPoints().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithPoints().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })

    //buy bombs boost
    storePage.buyBombs().click();
    cy.wait(1000)
    storePage.payWithPoints().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithPoints().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })
    //buy skips boost
    storePage.buySkips().click();
    cy.wait(1000)
    storePage.payWithPoints().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithPoints().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })
});



//Successful buy each boosts via wallet
Cypress.Commands.add("buyEachBoostViaWallet", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(3000)
    storePage.store().click();
    cy.wait(1000)
    //buy time freeze boost
    storePage.buyTimeFreeze().click();
    cy.wait(1000)
    storePage.payWithWallet().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithWallet().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })
    //buy bombs boost
    storePage.buyBombs().click();
    cy.wait(1000)
    storePage.payWithWallet().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithWallet().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })
    //buy skips boost
    storePage.buySkips().click();
    cy.wait(1000)
    storePage.payWithWallet().then($button => {
        if ($button.is(':disabled')) {
            cy.get(".modal").click({
                force: true
            })
        } else {

            storePage.payWithWallet().click()
            cy.wait(500)
            storePage.successMessage()
                .should('be.visible')
                .should('contain', 'Purchase successful')
            cy.wait(2000)
        }
    })
});





/****** Games Page Actions ***/
//Successfully play a game again via games page
Cypress.Commands.add("playGame", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(1000)
    gamesPage.gamesPage().click();
    cy.wait(1000)
    gamesPage.category().click()
    cy.wait(1000)
    gamesPage.categoryTopic().click()
    cy.wait(1000)
    gamesPage.singlePlayerGame().click()
    cy.wait(1000)
    gamesPage.startSingleGameButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.finishButton().click()
    cy.wait(1000)
    gamesPage.playAgainButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.finishButton().click()
    cy.wait(1000)
    gamesPage.continueButton().click()
        
    
});



//Successfully play a duel game category via dashbaord
Cypress.Commands.add("duelGame", () => {
    landingPage.emailField().type(loginData.email);
    cy.wait(1000);
    landingPage.passwordField().type(loginData.password);
    cy.wait(1000)
    landingPage.loginButton().click();
    cy.wait(1000)
    dashboardPage.userDashboard().should('be.visible');
    cy.wait(1000)
    gamesPage.gamesPage().click();
    cy.wait(1000)
    gamesPage.category().click()
    cy.wait(1000)
    gamesPage.categoryTopic().click()
    cy.wait(1000)
    gamesPage.duelPlayerGame().click()
    cy.wait(1000)
    gamesPage.selectPlayer().click()
    cy.wait(1000)
    gamesPage.sendRequestbutton().click()
    cy.wait(1000)
    gamesPage.startDuelGameButton().click()
    cy.wait(1000)
    cy.wait(1000)
    gamesPage.startGameButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption().click()
    cy.wait(1000)
    gamesPage.nextButton().click()
    cy.wait(1000)
    gamesPage.selectOption2().click()
    cy.wait(1000)
    gamesPage.finishButton().click()
    cy.wait(1000)
    gamesPage.continueButton().click()
});


