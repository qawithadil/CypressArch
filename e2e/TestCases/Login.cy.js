/// <reference types="cypress" />

//const { contains } = require("cypress/types/jquery");

describe('Valid Login Credentials',()=>{
it("Redirection to Home Page",()=>{

    cy.visit('https://example.testproject.io/web/')
    cy.wait(1000)
    cy.get('#name').type('adilTest')
    cy.get('#password').type('12345')
    cy.get('#login').click();
    cy.get('#pageLogin > h1').should('contain.text','TestProject Example page')
    cy.get('#logout').click()


})
});