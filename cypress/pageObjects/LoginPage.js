class LoginPage {

   emailLoginPage()
   { 
      return cy.get("form > input[name='email']")
   } 

   passwordLoginPage()
   {
      return cy.get("form > input[name='password']")
   }

   buttonLoginPage()
   {
      return cy.get("form > button[type='submit']")
   }

    invalidCredentialsError()
    {
      return cy.get('.Toastify__toast-body')
    }
   
   createAccountLink()
   {
      return cy.get('.landing-nav .app-button')
   }


    
  
  }
  
  export default LoginPage;
  