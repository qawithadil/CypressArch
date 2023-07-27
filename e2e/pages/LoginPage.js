export class LoginPage{

    elements ={
      userNameInput : () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
      passwordInput : () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
      loginBtn: () => cy.get('.oxd-button')
    }
    
    enterUsername(userName){
      this.elements.userNameInput().clear()
      this.elements.passwordInput().type(userName)
    }
    
    enterPassword(password){
      this.elements.passwordInput().clear()
      this.elements.passwordInput().type(password)
    }
    loginClick(){
        cy.get('.oxd-button').click
    }
    
    }
    
        
     