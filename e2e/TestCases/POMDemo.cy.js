/// <reference types="cypress" />
import LoginPage from '../pages/LoginPage'

describe('Login POM Test',()=>{
    beforeEach(function(){
      // Execute this before each function
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
it('Verify successfull Login',()=>{
   const LoginPage  = new LoginPage()
   LoginPage.
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    
    
    
    
}),
it('verify un-successfull Login',()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('wrong')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('contain','Invalid credentials')
})
});