class ProfilePage {

    getProfilePage() {
        return cy.get("#root > div > div.headers > div.app-header > div.header-menu > a:nth-child(2) > p");
      }

    editProfileDetailsButton() {
        return cy.get("#root > div > div.profile > div.profile-top > div > form > div.editable-controls > button:nth-child(2)");
      }

    saveProfileDetailsButton() {
        return cy.get("#root > div > div.profile > div.profile-top > div > form > div.editable-controls > button:nth-child(3)");
      }
    
    profileSuccessMessage(){
        return cy.get("div[role='alert']") 
    }

    bankNameField(){
        return cy.get(".bank-name")

    }

    getAccountNumberField(){
        return cy.get(":nth-child(2) > .details-input")
    }

    accountNameField(){
        return cy.get("div:nth-of-type(3) > .details-input")
    }

    saveBankDetailsButton(){
        return cy.get(".details > .btn-save")
    }

    bankDetailsSuccessMessage(){
        return cy.get(".Toastify__toast-container.Toastify__toast-container--bottom-center > .Toastify__toast.Toastify__toast--success")
    }

    
    
}

export default ProfilePage;
