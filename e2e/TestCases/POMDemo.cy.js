/// <reference types="cypress" />
import lPage, { LoginPage } from '../pages/LoginPage'

describe('Login POM Test',()=>{
    const lPage = new LoginPage()
    beforeEach(function(){
      // Execute this before each function
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
it('Verify successfull Login',()=>{
  
   lPage.enterUsername('admin')
   lPage.enterPassword('admin123')
   lPage.loginClick()
        
}),
it('verify un-successfull Login',()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('wrong')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('contain','Invalid credentials')
})
});