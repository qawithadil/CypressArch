export class TryLogin{
navigate(){
        cy.visit('https://trytestingthis.netlify.com')
    }
    enterUserName(){
        cy.get('#fname').type('Adil')
    }
    enterlastName(){
        cy.get('#lname').type('MD')
    }
}