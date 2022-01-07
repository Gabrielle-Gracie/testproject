class LandingPage {

    emailField() {
      return cy.get("input[name='email']");
    }
  
    passwordField() {
      return cy.get("input[name='password']");
    }

    loginButton() {
        return cy.get(".top-nav  .app-button");
      }

    createPageButton() {
        return cy.get('.landing-nav .app-button');
      }

    
  }
  
  export default LandingPage;
  