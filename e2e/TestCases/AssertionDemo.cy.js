/// <reference types="cypress" />

describe("Assertion Demo Test",()=> {
it("Assertion Test",()=> {

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain', 'Button') // Verify Button Text present on the particular button item
    .and('have.class','query-btn')

    cy.get('[data-test-id="test-example"]').should('have.class','example')
    cy.get(".query-list").contains('bananas').should('have.class','third')
    cy.get(".query-list").contains('apples').should('have.class','first')
    assert.equal('4','4','Not Equal')

})
})