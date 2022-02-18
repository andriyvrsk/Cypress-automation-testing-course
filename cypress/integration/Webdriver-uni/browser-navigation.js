///<reference types = "cypress"/>

describe("Validate WebdriverUni homepage links", () => {
    it("Confirm links redirect ot the correct page", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'contactus');


    cy.go('back'); 
    
    cy.reload();
    cy.reload(true); //reloads without using cashe

    cy.go('forward');
    cy.url().should('include', 'contactus');
    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
    cy.url().should('include', 'Login-Portal');
    cy.go('back');

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
    cy.url().should('include', 'To-Do-List');
    cy.go('back');
    });
});