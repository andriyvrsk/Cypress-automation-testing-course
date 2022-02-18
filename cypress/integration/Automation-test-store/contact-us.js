///<reference types = "cypress"/>

import { type } from "mocha/lib/utils";

describe("Test Contact Us form via Automation test store", () => {
    before(function () {
        //cy.viewport(550, 750);
        cy.fixture('user-details').as('user');
    });
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$= 'contact']").click().then(function(linkName){
            console.log('It was ' + linkName.text() + ' button!');
        });
        //cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        });
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('It\'s monday');
        cy.get("button[title = 'Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("The test is completed");
    });
}); 