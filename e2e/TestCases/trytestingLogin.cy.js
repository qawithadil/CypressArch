/// <reference types="cypress" />
import { TryLogin } from "../pages/TryLogin";
describe('Login Test',()=>{

    const tLogin = new TryLogin()

it('Verify Login Feature',function(){
  
    tLogin.navigate()
    tLogin.enterUserName()
    tLogin.enterlastName()

})

});

  /* cy.get('[type="radio"]').check("male")
    cy.get('select').eq(0).select("Option 2")
    cy.get('select').eq(1).select("Option 1")
    cy.get('select').eq(1).select("Option 3")
    cy.get('[type="checkbox"]').check("Option 2")
    */