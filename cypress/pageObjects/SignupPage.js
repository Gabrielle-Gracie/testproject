class SignupPage {

  firstNameField() {
    return cy.get("input[name='first_name']");
  }

  lastNameField() {
    return cy.get("input[name='last_name']");
  }

  usernameField() {
    return cy.get("form > input[name='username']")
  }

  phoneField() {
    return cy.get("form > input[name='phone_number']")
  }

  emailField() {
    return cy.get("form > input[name='email']")
  }

  passwordField() {
    return cy.get("form > input[name='password']")
  }

  confirmPasswordField() {
    return cy.get("form > input[name='password_confirmation']")
  }

  signupButton() {
    return cy.get('form > button')
  }

  referralcodeField() {
    return cy.get("form > input[name='referrer']")
  }

  signinLinkButton() {
    return cy.get('.column-2 > span:nth-of-type(1) > a')
  }

  firstnameValidationError() {
    return cy.get(':nth-child(1) > .errorLabel')
  }

  lastnameValidationError() {
    return cy.get(':nth-child(2) > .errorLabel')
  }

  usernameValidationError() {
    return cy.get('form > :nth-child(3)')
  }

  phonenumberValidationError() {
    return cy.get('form > :nth-child(5)')
  }

  emailValidationError() {
    return cy.get('form > :nth-child(7)')
  }

  passwordValidationError() {
    return cy.get('form > :nth-child(9)')
  }

  confirmpasswordValidationError() {
    return cy.get('form > :nth-child(11)')
  }



}

export default SignupPage;
